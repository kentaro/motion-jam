'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// 動的インポートに変更
const Camera = dynamic(() => import('@/components/Camera'), { ssr: false });
const AudioEngine = dynamic(() => import('@/components/AudioEngine'), { ssr: false });
// 型だけをインポート
import type { Pose } from '@tensorflow-models/pose-detection';

export default function Home() {
  const [pose, setPose] = useState<Pose | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTfLoaded, setIsTfLoaded] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);

  // TensorFlowの読み込み状態を管理
  useEffect(() => {
    // Next.jsのサーバーサイドレンダリングでエラーが発生しないように
    // クライアントサイドでのみTensorFlow.jsを読み込む
    async function loadTf() {
      try {
        // dynamicにTensorFlow.jsをインポート
        const tf = await import('@tensorflow/tfjs');
        await tf.ready();
        setIsTfLoaded(true);
      } catch (error) {
        console.error('TensorFlow.jsの読み込みに失敗しました:', error);
      }
    }

    loadTf();
  }, []);

  // カメラコンポーネントの表示をユーザーに許可させるための関数
  const handleEnableCameraClick = () => {
    setCameraEnabled(true);
  };

  // ポーズ検出時の処理
  const handlePoseDetected = (detectedPose: Pose) => {
    setPose(detectedPose);
  };

  // 再生・停止の制御
  const togglePlayback = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  // キーボードのスペースキーで再生/停止
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsPlaying]);

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-center">MotionJam</h1>
        <p className="text-center text-gray-500">動きで音楽を作ろう</p>
      </header>

      <div className="flex-1 flex flex-col items-center">
        {isTfLoaded ? (
          <div className="w-full max-w-2xl">
            {!cameraEnabled ? (
              <div className="mb-8 p-6 bg-yellow-50 border border-yellow-400 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-3">カメラアクセスが必要です</h3>
                <p className="mb-4">このアプリはカメラを使用して動きを検出します。「カメラを有効にする」ボタンをクリックして、カメラへのアクセスを許可してください。</p>

                <button
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                  onClick={handleEnableCameraClick}
                >
                  カメラを有効にする
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 text-center">
                  <p className="text-gray-600 text-sm">※カメラの使用許可を求められたら「許可」を選択してください</p>
                  <p className="text-gray-600 text-sm">※初回ロード時はモデルのダウンロードに時間がかかることがあります</p>
                </div>

                {isTfLoaded && cameraEnabled && (
                  <Camera onPoseDetected={handlePoseDetected} />
                )}

                <div className="mt-6 flex justify-center">
                  <button
                    className={`px-6 py-3 rounded-full text-white font-medium transition-all ${isPlaying
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-green-500 hover:bg-green-600'
                      }`}
                    onClick={togglePlayback}
                    disabled={!isTfLoaded || !cameraEnabled}
                  >
                    {isPlaying ? '停止' : '開始'}
                  </button>
                </div>

                <AudioEngine pose={pose} isPlaying={isPlaying} />
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">TensorFlow.jsを読み込んでいます...</p>
          </div>
        )}
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>MotionJam © 2025</p>
      </footer>
    </main>
  );
}
