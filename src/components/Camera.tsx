'use client';

import { useRef, useEffect, useState } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';

interface CameraProps {
    onPoseDetected: (pose: poseDetection.Pose) => void;
}

// コンポーネント定義の方法を修正
const Camera = ({ onPoseDetected }: CameraProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const overlayCanvasRef = useRef<HTMLCanvasElement>(null); // 骨格表示用の別レイヤー
    const [detector, setDetector] = useState<poseDetection.PoseDetector | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // GPU メモリ使用量の制限
    useEffect(() => {
        try {
            // WebGLのメモリ使用量を制限
            if (tf.getBackend() === 'webgl') {
                console.log('WebGL backend detected, setting memory limits');
                tf.env().set('WEBGL_DELETE_TEXTURE_THRESHOLD', 0);  // テクスチャを即座に削除
                tf.env().set('WEBGL_FORCE_F16_TEXTURES', true);     // 16ビット浮動小数点を使用
            }
        } catch (_) {
            console.warn('Error setting TF memory limits');
        }
    }, []);

    // TensorflowとMoveNetモデルの初期化
    useEffect(() => {
        let isMounted = true;

        const setupTF = async () => {
            try {
                // TF v5では、WebGPUがデフォルトで有効 (if available)
                try {
                    await tf.setBackend('webgpu');
                    console.log('Using WebGPU backend');
                } catch (e) {
                    console.log('WebGPU not available, falling back to WebGL');
                    await tf.setBackend('webgl');
                }

                await tf.ready();

                // MoveNet v3で新しい設定オプション - 軽量化
                const detectorConfig = {
                    modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING, // より軽量なモデル
                    enableSmoothing: true,
                    trackerType: poseDetection.TrackerType.Keypoint,
                    multiPoseMaxDimension: 128, // 解像度を下げる (256 -> 128)
                    enableTracking: true,
                    scoreThreshold: 0.3,
                    minPoseScore: 0.25
                };

                if (!isMounted) return;

                const detector = await poseDetection.createDetector(
                    poseDetection.SupportedModels.MoveNet,
                    detectorConfig
                );

                if (!isMounted) {
                    detector.dispose();
                    return;
                }

                setDetector(detector);
            } catch (error) {
                console.error('TensorFlow/MoveNetの初期化に失敗しました:', error);
                if (isMounted) {
                    setError(`モデルの初期化に失敗: ${error instanceof Error ? error.message : '不明なエラー'}`);
                }
            }
        };

        setupTF();

        // クリーンアップ
        return () => {
            isMounted = false;
            if (detector) {
                try {
                    detector.dispose();
                } catch (e) {
                    console.warn('Error disposing detector:', e);
                }
            }
            // メモリ解放 - 安全に行う
            try {
                // disposeVariablesは安全に呼び出せる
                tf.disposeVariables();
                // endScopeは条件付きで呼び出す
                if (tf.engine() && typeof tf.engine().endScope === 'function') {
                    tf.engine().endScope();
                }
            } catch (e) {
                console.warn('Error cleaning up TensorFlow resources:', e);
            }
        };
    }, []);

    // ビデオストリームの処理 - ビデオフレームだけを処理するスレッド
    useEffect(() => {
        if (!videoRef.current || !canvasRef.current) return;

        let animationFrameId: number;
        let videoStreamActive = false;

        // ビデオストリームの取得
        const setupCamera = async () => {
            try {
                console.log('カメラの初期化を開始します...');
                const constraints = {
                    video: {
                        width: { ideal: 320, max: 480 }, // さらに解像度を下げる
                        height: { ideal: 240, max: 360 },
                        facingMode: 'user',
                        frameRate: { ideal: 12, max: 15 } // フレームレートをさらに下げる
                    },
                    audio: false,
                };

                console.log('カメラへのアクセスを要求しています...');
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                console.log('カメラアクセス成功:', stream);

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.muted = true;
                    videoRef.current.playsInline = true;

                    // videoタグの読み込み完了を待機
                    await new Promise<void>((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.onloadeddata = () => {
                                console.log('ビデオデータ読み込み完了');
                                resolve();
                            };
                        } else {
                            resolve();
                        }
                    });

                    try {
                        await videoRef.current.play();
                        console.log('ビデオの再生を開始しました');
                        videoStreamActive = true;
                        setIsRunning(true);
                        setError(null);
                        startVideoRendering();
                    } catch (playError) {
                        console.error('ビデオの再生に失敗しました:', playError);
                        const errorMessage = playError instanceof Error ? playError.message : 'Unknown error';
                        setError(`ビデオの再生に失敗しました: ${errorMessage}`);
                    }
                }
            } catch (error) {
                console.error('カメラへのアクセスに失敗しました:', error);

                // エラーの種類に応じたメッセージを設定
                if (error instanceof DOMException) {
                    if (error.name === 'NotAllowedError') {
                        setError('カメラへのアクセスが拒否されました。ブラウザの設定でカメラへのアクセスを許可してください。');
                    } else if (error.name === 'NotFoundError') {
                        setError('カメラが見つかりません。カメラが接続されているか確認してください。');
                    } else if (error.name === 'NotReadableError') {
                        setError('カメラにアクセスできません。別のアプリがカメラを使用している可能性があります。');
                    } else {
                        setError(`カメラエラー: ${error.message || '不明なエラーが発生しました'}`);
                    }
                } else {
                    setError('不明なエラーが発生しました');
                }
            }
        };

        // ビデオフレームのみをキャンバスにレンダリング（シンプルに保つ）
        const renderVideoFrame = () => {
            if (!videoRef.current || !canvasRef.current || !videoStreamActive) {
                animationFrameId = requestAnimationFrame(renderVideoFrame);
                return;
            }

            const video = videoRef.current;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (!ctx) {
                animationFrameId = requestAnimationFrame(renderVideoFrame);
                return;
            }

            // ビデオがロードされていない場合はスキップ
            if (video.readyState < 2) {
                animationFrameId = requestAnimationFrame(renderVideoFrame);
                return;
            }

            // キャンバスサイズを設定（初回または変更時のみ）
            if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                // オーバーレイキャンバスも同じサイズに設定
                if (overlayCanvasRef.current) {
                    overlayCanvasRef.current.width = video.videoWidth;
                    overlayCanvasRef.current.height = video.videoHeight;
                }
            }

            // ビデオフレームだけを描画（シンプルに）
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // ループ継続
            animationFrameId = requestAnimationFrame(renderVideoFrame);
        };

        const startVideoRendering = () => {
            // 既に実行中のアニメーションフレームがあればキャンセル
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            // ビデオレンダリングループの開始
            animationFrameId = requestAnimationFrame(renderVideoFrame);
        };

        // カメラセットアップの実行
        setupCamera();

        // クリーンアップ
        return () => {
            videoStreamActive = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                videoRef.current.srcObject = null;
            }
        };
    }, []);

    // ポーズ検出のループ（ビデオレンダリングとは分離）
    useEffect(() => {
        const DETECTION_INTERVAL = 150; // 検出間隔を長く（150ms = 約6.7FPS）

        // コンポーネントが存在しない場合は何もしない
        if (!overlayCanvasRef.current || !isRunning || !detector) {
            return;
        }

        let detectionTimer: NodeJS.Timeout | null = null;
        let isDetecting = false;

        // ポーズ検出処理
        const detectPose = async () => {
            // 既に検出中の場合はスキップ
            if (isDetecting || !videoRef.current || !overlayCanvasRef.current || !detector) {
                return;
            }

            isDetecting = true;

            try {
                const video = videoRef.current;
                const canvas = overlayCanvasRef.current;

                // ビデオが準備できてなければ何もしない
                if (video.readyState < 2) {
                    isDetecting = false;
                    return;
                }

                // キャンバス初期化
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    isDetecting = false;
                    return;
                }

                // オーバーレイキャンバスをクリア
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // TensorFlow処理の前に少し待機
                await tf.nextFrame();

                // ポーズ検出を実行
                try {
                    const poses = await detector.estimatePoses(video, {
                        flipHorizontal: false,
                        maxPoses: 1
                    });

                    // TensorFlowのメモリ解放
                    try {
                        if (tf.engine() && typeof tf.engine().endScope === 'function') {
                            tf.engine().endScope();
                        }
                    } catch (e) {
                        console.warn('Error in TF endScope:', e);
                    }

                    // ポーズが検出された場合のみ描画
                    if (poses.length > 0) {
                        const pose = poses[0];
                        // 親コンポーネントにポーズデータを送信
                        onPoseDetected(pose);

                        // オーバーレイに骨格のみを描画
                        drawSkeletonOnly(ctx, pose);
                    }
                } catch (poseError) {
                    console.error('Pose estimation failed:', poseError);
                }
            } catch (e) {
                console.error('Detection loop error:', e);
            } finally {
                isDetecting = false;
            }
        };

        // 定期的なポーズ検出の開始
        const startDetection = () => {
            // 検出間隔でdirectPose関数を呼び出し
            detectionTimer = setInterval(detectPose, DETECTION_INTERVAL);

            // 初回検出を即時実行
            detectPose();
        };

        // 検出開始
        startDetection();

        // クリーンアップ
        return () => {
            if (detectionTimer) {
                clearInterval(detectionTimer);
            }

            // オーバーレイキャンバスをクリア
            const ctx = overlayCanvasRef.current?.getContext('2d');
            if (ctx && overlayCanvasRef.current) {
                ctx.clearRect(0, 0, overlayCanvasRef.current.width, overlayCanvasRef.current.height);
            }
        };
    }, [detector, isRunning, onPoseDetected]);

    // 骨格のみを描画する関数（ビデオは描画しない）
    const drawSkeletonOnly = (
        ctx: CanvasRenderingContext2D,
        pose: poseDetection.Pose
    ) => {
        // キャンバスをクリア
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // 骨格点の描画
        const keypoints = pose.keypoints;

        // 骨格点を描画 - シンプルな描画に変更
        keypoints.forEach((keypoint) => {
            if (keypoint.score && keypoint.score > 0.3) {
                const { x, y } = keypoint;

                // シンプルな点描画
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
                ctx.fill();
            }
        });

        // 骨格線を描画（主要な接続のみ）- 接続数を減らす
        const essentialConnections = [
            // 肩と腰 - 最小限の接続のみ
            ['left_shoulder', 'right_shoulder'],
            ['left_hip', 'right_hip'],
            ['left_shoulder', 'left_hip'],
            ['right_shoulder', 'right_hip'],
            // 腕
            ['left_shoulder', 'left_elbow'],
            ['left_elbow', 'left_wrist'],
            ['right_shoulder', 'right_elbow'],
            ['right_elbow', 'right_wrist'],
        ];

        // キーポイント名とインデックスのマッピング
        const keypointMap = new Map(keypoints.map((kp, i) => [kp.name, i]));

        // シンプルな線描画
        essentialConnections.forEach(([start, end]) => {
            const startIndex = keypointMap.get(start);
            const endIndex = keypointMap.get(end);

            if (
                startIndex !== undefined &&
                endIndex !== undefined &&
                keypoints[startIndex].score &&
                keypoints[endIndex].score &&
                keypoints[startIndex].score > 0.3 &&
                keypoints[endIndex].score > 0.3
            ) {
                const startPoint = keypoints[startIndex];
                const endPoint = keypoints[endIndex];

                // シンプルな線
                ctx.beginPath();
                ctx.moveTo(startPoint.x, startPoint.y);
                ctx.lineTo(endPoint.x, endPoint.y);
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'rgba(0, 255, 0, 0.6)';
                ctx.stroke();
            }
        });
    };

    return (
        <div className="relative w-full max-w-[640px] mx-auto">
            {error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                    <p className="font-bold">エラー</p>
                    <p>{error}</p>
                    <button
                        className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                        onClick={() => location.reload()}
                    >
                        再試行
                    </button>
                </div>
            ) : (
                <div className="relative">
                    {/* 非表示のビデオ要素 */}
                    <video
                        ref={videoRef}
                        className="hidden"
                        playsInline
                        muted
                        autoPlay
                    />

                    {/* ビデオ表示用キャンバス */}
                    <canvas
                        ref={canvasRef}
                        className="w-full h-auto rounded-lg border border-gray-300 shadow-lg"
                    />

                    {/* 骨格表示用オーバーレイキャンバス - 絶対位置で重ねる */}
                    <canvas
                        ref={overlayCanvasRef}
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        style={{ zIndex: 10 }}
                    />
                </div>
            )}
        </div>
    );
};

// デフォルトエクスポートとnamed exportの両方を提供
export default Camera;
export { Camera }; 