'use client';

import { useEffect, useRef, useState } from 'react';
import type { Pose } from '@tensorflow-models/pose-detection';

interface AudioEngineProps {
    pose: Pose | null;
    isPlaying: boolean;
}

// 独自の型定義を追加
interface SoundEvent {
    note: string;
    duration: string;
    velocity: number;
}

// グローバル型拡張（Window型にToneを追加）
declare global {
    interface Window {
        Tone?: any;
    }
}

// Tone.jsの型定義
interface ToneType {
    Synth: any;
    MembraneSynth: any;
    NoiseSynth: any;
    MetalSynth: any;
    MonoSynth: any;
    Part: any;
    Transport: any;
    start: () => Promise<void>;
    context: any;
    version: string;
    [key: string]: any;
}

const AudioEngine = ({ pose, isPlaying }: AudioEngineProps) => {
    const [bpm, setBpm] = useState(120);
    const [isInitialized, setIsInitialized] = useState(false);
    // ToneJSインスタンス
    const ToneRef = useRef<ToneType | null>(null);

    // Tone.jsインスタンスの参照
    const drumsRef = useRef<{
        kick: any | null;
        snare: any | null;
        hihat: any | null;
    }>({
        kick: null,
        snare: null,
        hihat: null
    });
    const bassRef = useRef<any | null>(null);
    const melodyRef = useRef<any | null>(null);
    const fxRef = useRef<any | null>(null);

    // 姿勢データの状態を管理
    const poseStateRef = useRef({
        handsUp: false,        // 両手が頭の上
        rightHandSpeed: 0,     // 右手の動きの速さ
        leftHandCircular: false, // 左手の円運動検出
        headShaking: false,    // 頭を左右に振る
        squatting: false,      // しゃがむ動作
        stillTime: 0,          // 静止状態の時間
        lastPose: null as Pose | null,
        // 新しいポーズ状態を追加
        rightHandWave: false,  // 右手を振る
        leftHandWave: false,   // 左手を振る
        jumpDetected: false,   // ジャンプ検出
        punchDetected: false,  // パンチ動作
        lastSoundTime: 0,      // 最後に音を鳴らした時間
        // メロディ生成用の状態を追加
        currentScale: 'C',     // 現在のスケール（調）
        currentOctave: 4,      // 現在のオクターブ
        melodyPhase: 0,        // メロディのフェーズ（発展段階）
        melodyNoteIndex: 0,    // メロディ内の音符インデックス
        lastMelodyNotes: [] as string[], // 直前に鳴らしたメロディ音符
        // 新しい動作状態
        nodDetected: false,    // 頷く動作
        rightHandUp: false,    // 右手を上げる
        handsSpread: false,    // 手を広げる
        lastMelodyTime: 0,     // 最後にメロディを鳴らした時間
        leftHandUp: false,     // 左手を上げる
        bothHandsUp: false,    // 両手を上げる
        scaleType: 'major',     // スケールタイプ
    });

    // 音の再生状態を管理
    const audioStateRef = useRef({
        // 各動きに対するクールダウン時間
        kickCooldown: 0,
        snareCooldown: 0,
        hihatCooldown: 0,
        bassCooldown: 0,
        melodyCooldown: 0,
        fxCooldown: 0,
    });

    // Tone.jsの初期化
    useEffect(() => {
        let isMounted = true;

        const loadTone = async () => {
            try {
                if (typeof window === 'undefined') return; // サーバーサイドではロードしない

                // window.Toneが存在する場合はそれを使用
                if (window.Tone) {
                    console.log('Using pre-loaded Tone.js from window');
                    ToneRef.current = window.Tone as ToneType;
                } else {
                    // 動的インポートではなくCDNから読み込む
                    console.error('Tone.js not found in window, attempting to load from CDN');
                    await loadToneFromCDN();

                    if (!window.Tone) {
                        throw new Error('Failed to load Tone.js from all sources');
                    }

                    ToneRef.current = window.Tone as ToneType;
                }

                const Tone = ToneRef.current;
                if (!Tone) {
                    throw new Error('Tone.js could not be loaded');
                }

                console.log('Tone.js version:', Tone.version);

                // まずはシンプルなテスト - このテストが成功すれば基本的な初期化は可能
                try {
                    const testSynth = new Tone.Synth().toDestination();
                    testSynth.triggerAttackRelease("C4", 0.1);
                    console.log('Test synth created successfully');
                    testSynth.dispose();
                } catch (e) {
                    console.error('Test synth failed:', e);
                    throw e;
                }

                // キックドラム
                try {
                    console.log('Creating kick drum...');
                    // MembraneSynthが失敗する場合があるため、ここで明示的にチェック
                    if (typeof Tone.MembraneSynth !== 'function') {
                        throw new Error('MembraneSynth is not a constructor');
                    }

                    drumsRef.current.kick = new Tone.MembraneSynth({
                        pitchDecay: 0.05,
                        octaves: 5,
                        oscillator: { type: 'sine' },
                        envelope: {
                            attack: 0.001,
                            decay: 0.4,
                            sustain: 0.01,
                            release: 1.4,
                        }
                    }).toDestination();
                    console.log('Kick drum created');
                } catch (e) {
                    console.error('Failed to create kick drum:', e);
                    // フォールバック: 通常のSynthで代用
                    drumsRef.current.kick = new Tone.Synth({
                        oscillator: { type: 'sine' },
                        envelope: {
                            attack: 0.001,
                            decay: 0.4,
                            sustain: 0.01,
                            release: 1.4,
                        }
                    }).toDestination();
                }

                // スネアドラム
                try {
                    drumsRef.current.snare = new Tone.NoiseSynth({
                        noise: { type: 'white' },
                        envelope: {
                            attack: 0.001,
                            decay: 0.2,
                            sustain: 0.02,
                            release: 0.2
                        }
                    }).toDestination();
                } catch (e) {
                    console.error('Failed to create snare drum:', e);
                    drumsRef.current.snare = new Tone.Synth().toDestination();
                }

                // ハイハット
                try {
                    drumsRef.current.hihat = new Tone.MetalSynth({
                        envelope: {
                            attack: 0.001,
                            decay: 0.1,
                            release: 0.01
                        },
                        harmonicity: 5.1,
                        modulationIndex: 32,
                        resonance: 4000,
                        octaves: 1.5
                    }).toDestination();
                } catch (e) {
                    console.error('Failed to create hihat:', e);
                    drumsRef.current.hihat = new Tone.Synth().toDestination();
                }

                // 各ドラムの音量調整
                drumsRef.current.kick.volume.value = -6;
                drumsRef.current.snare.volume.value = -10;
                drumsRef.current.hihat.volume.value = -15;

                // ベースの初期化
                try {
                    bassRef.current = new Tone.MonoSynth({
                        oscillator: {
                            type: 'square',
                        },
                        envelope: {
                            attack: 0.01,
                            decay: 0.1,
                            sustain: 0.3,
                            release: 0.5,
                        },
                        filterEnvelope: {
                            attack: 0.01,
                            decay: 0.1,
                            sustain: 0.5,
                            release: 0.5,
                            baseFrequency: 200,
                            octaves: 2,
                        },
                    }).toDestination();
                } catch (e) {
                    console.error('Failed to create bass:', e);
                    bassRef.current = new Tone.Synth().toDestination();
                }
                bassRef.current.volume.value = -6;

                // メロディの初期化
                melodyRef.current = new Tone.Synth({
                    oscillator: {
                        type: 'sine',
                    },
                    envelope: {
                        attack: 0.01,
                        decay: 0.2,
                        sustain: 0.2,
                        release: 0.5,
                    },
                }).toDestination();
                melodyRef.current.volume.value = -10;

                // FXの初期化（「びょいーん」感のあるサウンド）
                fxRef.current = new Tone.FMSynth({
                    harmonicity: 3.01,
                    modulationIndex: 14,
                    oscillator: {
                        type: "sine"
                    },
                    envelope: {
                        attack: 0.01,
                        decay: 0.2,
                        sustain: 0.3,
                        release: 1.2,
                    },
                    modulation: {
                        type: "triangle"
                    },
                    modulationEnvelope: {
                        attack: 0.2,
                        decay: 0.01,
                        sustain: 0.9,
                        release: 0.9
                    }
                }).toDestination();
                // AutoFilterを追加してさらに「びょいーん」感を出す
                const autoFilter = new Tone.AutoFilter({
                    frequency: "8n",
                    baseFrequency: 200,
                    octaves: 4,
                    depth: 0.8
                }).start();
                fxRef.current.connect(autoFilter);
                autoFilter.toDestination();
                fxRef.current.volume.value = -15;

                setIsInitialized(true);
                console.log('All instruments initialized successfully');

            } catch (error) {
                console.error('Tone.jsの初期化に失敗しました:', error);
            }
        };

        // CDNからTone.jsを読み込むバックアップ方法を追加
        const loadToneFromCDN = () => {
            return new Promise<void>((resolve, reject) => {
                try {
                    if (typeof window === 'undefined') return reject('Server side');
                    if (window.Tone) return resolve(); // 既にロード済み

                    // 複数のCDNを試す
                    const cdnUrls = [
                        'https://unpkg.com/tone/build/Tone.js', // バージョン指定なし = 最新版
                        'https://cdn.jsdelivr.net/npm/tone/build/Tone.js',
                        'https://unpkg.com/tone@16.0.0/build/Tone.js',
                        'https://cdn.jsdelivr.net/npm/tone@16.0.0/build/Tone.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/tone/16.0.0/Tone.js'
                    ];

                    let loadedSuccessfully = false;
                    let failedCount = 0;

                    // 各CDNを順番に試す
                    const tryNextCDN = (index = 0) => {
                        if (index >= cdnUrls.length) {
                            console.warn(`All CDNs failed (${failedCount} failures). Trying inline minimal version...`);
                            // 最終手段: 最小限のTone.jsを直接インラインスクリプトとして注入
                            try {
                                const minimalToneScript = document.createElement('script');
                                minimalToneScript.textContent = `
                                // Minimal Tone.js replacement for basic functionality
                                window.Tone = {
                                    version: "fallback-minimal",
                                    Synth: class Synth {
                                        constructor(options) { this.options = options || {}; }
                                        toDestination() { return this; }
                                        triggerAttackRelease() { console.log("Synth trigger (fallback)"); return this; }
                                        dispose() {}
                                        connect() { return this; }
                                        disconnect() {}
                                    },
                                    MembraneSynth: class MembraneSynth {
                                        constructor(options) { this.options = options || {}; this.volume = { value: 0, rampTo: () => {} }; }
                                        toDestination() { return this; }
                                        triggerAttackRelease() { console.log("MembraneSynth trigger (fallback)"); return this; }
                                        dispose() {}
                                        connect() { return this; }
                                        disconnect() {}
                                    },
                                    NoiseSynth: class NoiseSynth {
                                        constructor(options) { this.options = options || {}; this.volume = { value: 0, rampTo: () => {} }; }
                                        toDestination() { return this; }
                                        triggerAttackRelease() { console.log("NoiseSynth trigger (fallback)"); return this; }
                                        dispose() {}
                                        connect() { return this; }
                                        disconnect() {}
                                    },
                                    MetalSynth: class MetalSynth {
                                        constructor(options) { this.options = options || {}; this.volume = { value: 0, rampTo: () => {} }; }
                                        toDestination() { return this; }
                                        triggerAttackRelease() { console.log("MetalSynth trigger (fallback)"); return this; }
                                        dispose() {}
                                        connect() { return this; }
                                        disconnect() {}
                                    },
                                    MonoSynth: class MonoSynth {
                                        constructor(options) { 
                                            this.options = options || {}; 
                                            this.volume = { value: 0, rampTo: () => {} };
                                            this.detune = { value: 0 };
                                        }
                                        toDestination() { return this; }
                                        triggerAttackRelease() { console.log("MonoSynth trigger (fallback)"); return this; }
                                        dispose() {}
                                        connect() { return this; }
                                        disconnect() {}
                                    },
                                    Part: class Part {
                                        constructor(callback, events) { 
                                            this.callback = callback; 
                                            this.events = events || []; 
                                            this.loop = false;
                                            this.loopEnd = "4:0:0";
                                        }
                                        start() { return this; }
                                        stop() { return this; }
                                        add() { return this; }
                                        dispose() {}
                                    },
                                    Filter: class Filter {
                                        constructor(options) { this.options = options || {}; }
                                        toDestination() { return this; }
                                        connect() { return this; }
                                        disconnect() {}
                                        dispose() {}
                                    },
                                    AutoFilter: class AutoFilter {
                                        constructor(options) { 
                                            this.options = options || {}; 
                                            this.wet = { value: 0 };
                                        }
                                        start() { return this; }
                                        connect() { return this; }
                                        disconnect() {}
                                        dispose() {}
                                    },
                                    Panner: class Panner {
                                        constructor(pan) { this.pan = pan; }
                                        toDestination() { return this; }
                                        dispose() {}
                                    },
                                    Transport: {
                                        start() { console.log("Transport start (fallback)"); },
                                        stop() { console.log("Transport stop (fallback)"); },
                                        cancel() {},
                                        bpm: { value: 120 }
                                    },
                                    start: async function() { 
                                        console.log("Tone.start (fallback)"); 
                                        return Promise.resolve();
                                    },
                                    context: { resume: async () => Promise.resolve() }
                                };
                                console.warn("Using minimal Tone.js fallback implementation");
                                `;
                                document.head.appendChild(minimalToneScript);

                                if (window.Tone) {
                                    ToneRef.current = window.Tone;
                                    loadedSuccessfully = true;
                                    resolve();
                                } else {
                                    reject("Failed to create minimal Tone.js fallback");
                                }
                            } catch (inlineError) {
                                console.error("Failed to create inline fallback:", inlineError);
                                reject(`All loading methods failed: ${failedCount} CDN failures + inline failure`);
                            }
                            return;
                        }

                        console.log(`Attempting to load Tone.js from: ${cdnUrls[index]}`);
                        const script = document.createElement('script');
                        script.src = cdnUrls[index];

                        script.onload = () => {
                            if (window.Tone) {
                                ToneRef.current = window.Tone;
                                console.log(`Loaded Tone.js from CDN: ${cdnUrls[index]}`);
                                loadedSuccessfully = true;
                                resolve();
                            } else {
                                console.warn(`CDN loaded but window.Tone not found: ${cdnUrls[index]}`);
                                tryNextCDN(index + 1);
                            }
                        };

                        script.onerror = () => {
                            failedCount++;
                            console.warn(`Failed to load from CDN: ${cdnUrls[index]}`);
                            tryNextCDN(index + 1);
                        };

                        document.head.appendChild(script);
                    };

                    // 最初のCDNから試す
                    tryNextCDN();

                    // 8秒後のタイムアウト
                    setTimeout(() => {
                        if (!loadedSuccessfully) {
                            reject('Timed out loading Tone.js from CDN');
                        }
                    }, 8000);
                } catch (err) {
                    reject(err);
                }
            });
        };

        const init = async () => {
            try {
                // まずCDNからロードを試みる
                if (typeof window !== 'undefined' && !window.Tone) {
                    try {
                        await loadToneFromCDN();
                    } catch (cdnError) {
                        console.error('CDNからのロードに失敗しました:', cdnError);
                    }
                }

                // それからTone.jsの初期化
                await loadTone();
            } catch (error) {
                console.error('Tone.jsの初期化に完全に失敗しました:', error);
            }
        };

        init();

        return () => {
            isMounted = false;
            // クリーンアップ
            if (drumsRef.current.kick) drumsRef.current.kick.dispose();
            if (drumsRef.current.snare) drumsRef.current.snare.dispose();
            if (drumsRef.current.hihat) drumsRef.current.hihat.dispose();
            if (bassRef.current) bassRef.current.dispose();
            if (melodyRef.current) melodyRef.current.dispose();
            if (fxRef.current) fxRef.current.dispose();

            if (ToneRef.current?.Transport) {
                ToneRef.current.Transport.stop();
                ToneRef.current.Transport.cancel();
            }
        };
    }, [bpm]);

    // 再生状態の制御
    useEffect(() => {
        if (!isInitialized || !ToneRef.current) return;

        const Tone = ToneRef.current;

        const setupTransport = async () => {
            if (isPlaying) {
                try {
                    // Audio Contextを開始 (ユーザーインタラクション必須)
                    await Tone.start();

                    // BPMの設定
                    Tone.Transport.bpm.value = bpm;

                    // Tone.Transportを開始（タイムベースの処理用）
                    Tone.Transport.start();

                    console.log('音声エンジン準備完了 - ポーズによる音声生成を開始します');
                } catch (error) {
                    console.error('音楽エンジンの開始に失敗しました:', error);
                }
            } else {
                // 停止
                Tone.Transport.stop();
                Tone.Transport.cancel();
            }
        };

        setupTransport();

        return () => {
            // クリーンアップ
            if (Tone.Transport) {
                Tone.Transport.stop();
            }
        };
    }, [isPlaying, isInitialized, bpm]);

    // ポーズデータの処理とそれに基づいた音の生成
    useEffect(() => {
        if (!pose || !isPlaying || !isInitialized || !ToneRef.current) return;

        const Tone = ToneRef.current;
        // nowをフレームごとに一度だけ取得し、すべての音に同じ値を使う
        const now = Tone.now() + 0.05; // わずかな遅延を追加して安全マージンを確保

        // クールダウン時間を更新（減少）
        Object.keys(audioStateRef.current).forEach(key => {
            if (audioStateRef.current[key as keyof typeof audioStateRef.current] > 0) {
                audioStateRef.current[key as keyof typeof audioStateRef.current] -= 1;
            }
        });

        // フレームごとの音の重複を防ぐフラグ
        let soundPlayedThisFrame = false;

        // ポーズデータの処理と音の生成
        const processMotionAndGenerateSound = () => {
            const keypoints = pose.keypoints;

            // キーポイントのインデックス取得用の関数
            const getKeypoint = (name: string) => {
                return keypoints.find(kp => kp.name === name);
            };

            // 頷く動作でキックドラム（両手上げるのではなく）
            const nose = getKeypoint('nose');
            const nosePrev = poseStateRef.current.lastPose?.keypoints.find(kp => kp.name === 'nose');

            if (nose && nosePrev && nose.score && nose.score > 0.3) {
                // 頷く動作（鼻が下に移動）を検出
                const dy = nose.y - nosePrev.y;

                if (dy > 12 && !poseStateRef.current.nodDetected && audioStateRef.current.kickCooldown <= 0 && !soundPlayedThisFrame) {
                    console.log('頷く動作を検出: キックドラム');
                    if (drumsRef.current.kick) {
                        try {
                            drumsRef.current.kick.triggerAttackRelease('C2', '8n', now, 0.8);
                            soundPlayedThisFrame = true;
                        } catch (error) {
                            console.error('キックドラム再生エラー:', error);
                        }
                    }
                    poseStateRef.current.nodDetected = true;
                    audioStateRef.current.kickCooldown = 10; // クールダウン設定
                } else if (dy < 0) {
                    poseStateRef.current.nodDetected = false;
                }
            }

            // 右手の動き -> ハイハット（閾値調整）
            const rightWrist = getKeypoint('right_wrist');
            const rightWristPrev = poseStateRef.current.lastPose?.keypoints.find(kp => kp.name === 'right_wrist');

            if (rightWrist && rightWristPrev && rightWrist.score && rightWrist.score > 0.3) {
                const dx = rightWrist.x - rightWristPrev.x;
                const dy = rightWrist.y - rightWristPrev.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 10 && audioStateRef.current.hihatCooldown <= 0 && !soundPlayedThisFrame) {
                    console.log('右手の動きを検出: ハイハット');
                    if (drumsRef.current.hihat) {
                        try {
                            const velocity = Math.min(0.8, distance / 40);
                            drumsRef.current.hihat.triggerAttackRelease('C4', '32n', now + 0.01, velocity); // わずかな時間差
                            soundPlayedThisFrame = true;
                        } catch (error) {
                            console.error('ハイハット再生エラー:', error);
                        }
                    }
                    audioStateRef.current.hihatCooldown = 5;
                }
            }

            // 左手の動き -> スネア（閾値調整）
            const leftWrist = getKeypoint('left_wrist');
            const leftWristPrev = poseStateRef.current.lastPose?.keypoints.find(kp => kp.name === 'left_wrist');

            if (leftWrist && leftWristPrev && leftWrist.score && leftWrist.score > 0.3) {
                const dx = leftWrist.x - leftWristPrev.x;
                const dy = leftWrist.y - leftWristPrev.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 12 && audioStateRef.current.snareCooldown <= 0 && !soundPlayedThisFrame) {
                    console.log('左手の動きを検出: スネア');
                    if (drumsRef.current.snare) {
                        try {
                            const velocity = Math.min(0.7, distance / 40);
                            drumsRef.current.snare.triggerAttackRelease('16n', now + 0.02, velocity); // わずかな時間差
                            soundPlayedThisFrame = true;
                        } catch (error) {
                            console.error('スネア再生エラー:', error);
                        }
                    }
                    audioStateRef.current.snareCooldown = 8;
                }
            }

            // 頭を左右に振る動作 -> メロディ音符
            if (nose && nosePrev && nose.score && nose.score > 0.3) {
                const dx = nose.x - nosePrev.x;
                const dy = nose.y - nosePrev.y; // y軸方向の動きも考慮
                const absDx = Math.abs(dx);
                const absDy = Math.abs(dy);
                const movement = Math.sqrt(dx * dx + dy * dy); // 総合的な動きの大きさ

                // より厳格な条件で一時的な動きのみを検出
                const significantMovement = movement > 5; // 動きの最小閾値
                const movementStopped = poseStateRef.current.lastMelodyTime &&
                    (now - poseStateRef.current.lastMelodyTime > 1.5); // 前回のメロディから十分な時間が経過

                // 動きがあり、かつ前回のメロディから十分な時間が経過しているか、まだメロディを鳴らしていない場合
                if (significantMovement &&
                    (movementStopped || !poseStateRef.current.lastMelodyTime) &&
                    audioStateRef.current.melodyCooldown <= 0 &&
                    !soundPlayedThisFrame) {

                    console.log('頭の動作を検出: メロディフレーズ');
                    if (melodyRef.current) {
                        try {
                            // メロディ生成パラメータを動きから計算
                            const intensity = Math.min(1.0, movement / 40); // 動きの強さ（0-1）
                            const direction = dx > 0 ? 1 : -1; // 動きの方向（左右）
                            const vertical = dy > 0 ? 1 : -1; // 動きの方向（上下）

                            // 動きの特性に基づいてスケールを更新する可能性がある
                            updateMelodyScale(intensity, direction, vertical);

                            // 現在のスケールから音符を生成（フレーズの長さを減らす）
                            const melodyPhrase = generateMelodyPhrase(intensity, direction, vertical);

                            // フレーズを再生
                            playMelodyPhrase(melodyPhrase, now);

                            // 最後にメロディを鳴らした時間を記録
                            poseStateRef.current.lastMelodyTime = now;

                            soundPlayedThisFrame = true;
                        } catch (error) {
                            console.error('メロディ再生エラー:', error);
                        }
                    }
                    audioStateRef.current.melodyCooldown = 12; // クールダウン時間を延長
                }
            }

            // ベース音：右手を上げる動作（しゃがむではなく）
            const rightElbow = getKeypoint('right_elbow');
            const rightShoulder = getKeypoint('right_shoulder');

            if (rightWrist && rightElbow && rightShoulder &&
                rightWrist.score && rightWrist.score > 0.3 &&
                rightElbow.score && rightElbow.score > 0.3 &&
                rightShoulder.score && rightShoulder.score > 0.3) {

                // 手が肩より上にあるかチェック
                if (rightWrist.y < rightShoulder.y &&
                    !poseStateRef.current.rightHandUp &&
                    audioStateRef.current.bassCooldown <= 0 &&
                    !soundPlayedThisFrame) {

                    console.log('右手を上げる動作を検出: ベース音');
                    if (bassRef.current) {
                        try {
                            const bassNotes = ['C2', 'G1', 'A1', 'F1'];
                            const note = bassNotes[Math.floor(Math.random() * bassNotes.length)];
                            bassRef.current.triggerAttackRelease(note, '4n', now + 0.04, 0.7); // わずかな時間差
                            soundPlayedThisFrame = true;
                        } catch (error) {
                            console.error('ベース再生エラー:', error);
                        }
                    }
                    poseStateRef.current.rightHandUp = true;
                    audioStateRef.current.bassCooldown = 15;
                } else if (rightWrist.y > rightShoulder.y) {
                    poseStateRef.current.rightHandUp = false;
                }
            }

            // FXサウンド：手を左右に広げる動作を左手を上げる動作に変更
            const leftElbow = getKeypoint('left_elbow');
            const leftShoulder = getKeypoint('left_shoulder');

            if (leftWrist && leftShoulder &&
                leftWrist.score && leftWrist.score > 0.3 &&
                leftShoulder.score && leftShoulder.score > 0.3) {

                // 左手が肩より上にあるかチェック（シンプルな姿勢検出）
                if (leftWrist.y < leftShoulder.y &&
                    !poseStateRef.current.leftHandUp &&
                    audioStateRef.current.fxCooldown <= 0 &&
                    !soundPlayedThisFrame) {

                    console.log('左手を上げる動作を検出: FXサウンド');
                    if (fxRef.current) {
                        try {
                            // 周波数が上昇する「びょいーん」効果
                            fxRef.current.triggerAttackRelease('C4', '4n', now + 0.05, 0.6);
                            // 音の持続時間中にピッチを上げる
                            fxRef.current.detune.rampTo(1200, 0.4); // 1オクターブ上げる
                            setTimeout(() => {
                                if (fxRef.current) {
                                    fxRef.current.detune.value = 0; // デチューンをリセット
                                }
                            }, 500);
                            soundPlayedThisFrame = true;
                        } catch (error) {
                            console.error('FXサウンド再生エラー:', error);
                        }
                    }
                    poseStateRef.current.leftHandUp = true;
                    audioStateRef.current.fxCooldown = 15;
                } else if (leftWrist.y > leftShoulder.y) {
                    poseStateRef.current.leftHandUp = false;
                }
            }

            // 特殊エフェクト：両手を同時に上げる動作に変更
            if (leftWrist && rightWrist && leftShoulder && rightShoulder &&
                leftWrist.score && leftWrist.score > 0.3 &&
                rightWrist.score && rightWrist.score > 0.3 &&
                leftShoulder.score && leftShoulder.score > 0.3 &&
                rightShoulder.score && rightShoulder.score > 0.3) {

                // 両手が同時に肩より上にあるかチェック
                if (leftWrist.y < leftShoulder.y && rightWrist.y < rightShoulder.y &&
                    !poseStateRef.current.bothHandsUp &&
                    audioStateRef.current.fxCooldown <= 0 &&
                    !soundPlayedThisFrame) {

                    console.log('両手を上げる動作を検出: 特殊エフェクト');
                    if (drumsRef.current.kick && drumsRef.current.snare) {
                        try {
                            drumsRef.current.kick.triggerAttackRelease('C2', '8n', now + 0.06, 0.9); // わずかな時間差
                            drumsRef.current.snare.triggerAttackRelease('16n', now + 0.1, 0.8); // さらに時間差
                            soundPlayedThisFrame = true;
                        } catch (error) {
                            console.error('特殊エフェクト再生エラー:', error);
                        }
                    }
                    poseStateRef.current.bothHandsUp = true;
                    audioStateRef.current.fxCooldown = 15;
                } else if (leftWrist.y > leftShoulder.y || rightWrist.y > rightShoulder.y) {
                    poseStateRef.current.bothHandsUp = false;
                }
            }

            // パンチ動作 -> 特殊エフェクト（パンチの検出感度向上）
            // この部分は既存のパンチ検出ロジックを使用し、閾値を調整
            const isPunching = detectSimplePunch(keypoints, poseStateRef.current.lastPose?.keypoints);
            if (isPunching && !poseStateRef.current.punchDetected && audioStateRef.current.fxCooldown <= 0 && !soundPlayedThisFrame) {
                console.log('パンチ動作を検出: 特殊エフェクト');
                if (drumsRef.current.kick && drumsRef.current.snare) {
                    try {
                        drumsRef.current.kick.triggerAttackRelease('C2', '8n', now + 0.06, 0.9); // わずかな時間差
                        drumsRef.current.snare.triggerAttackRelease('16n', now + 0.1, 0.8); // さらに時間差
                        soundPlayedThisFrame = true;
                    } catch (error) {
                        console.error('パンチエフェクト再生エラー:', error);
                    }
                }
                poseStateRef.current.punchDetected = true;
                audioStateRef.current.fxCooldown = 15;
            } else if (!isPunching) {
                poseStateRef.current.punchDetected = false;
            }

            // 最新のポーズを保存
            poseStateRef.current.lastPose = pose;
        };

        // シンプルなパンチ動作検出関数（閾値を下げて検出しやすく）
        const detectSimplePunch = (keypoints: any[], prevKeypoints?: any[]) => {
            if (!prevKeypoints) return false;

            // 右手と左手の位置を取得
            const rightWrist = keypoints.find(kp => kp.name === 'right_wrist');
            const leftWrist = keypoints.find(kp => kp.name === 'left_wrist');
            const prevRightWrist = prevKeypoints.find(kp => kp.name === 'right_wrist');
            const prevLeftWrist = prevKeypoints.find(kp => kp.name === 'left_wrist');

            // 右手の動き検出
            if (rightWrist && prevRightWrist && rightWrist.score && rightWrist.score > 0.3) {
                const dx = rightWrist.x - prevRightWrist.x;
                const dy = rightWrist.y - prevRightWrist.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // 素早い動きをパンチとみなす
                if (distance > 15) {
                    return true;
                }
            }

            // 左手の動き検出
            if (leftWrist && prevLeftWrist && leftWrist.score && leftWrist.score > 0.3) {
                const dx = leftWrist.x - prevLeftWrist.x;
                const dy = leftWrist.y - prevLeftWrist.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 15) {
                    return true;
                }
            }

            return false;
        };

        // ポーズ処理と音生成の実行
        try {
            processMotionAndGenerateSound();
        } catch (error) {
            console.error('ポーズ処理中にエラーが発生しました:', error);
        }
    }, [pose, isPlaying, isInitialized]);

    // 現在のスケールを動きに基づいて更新する関数
    const updateMelodyScale = (intensity: number, direction: number, vertical: number) => {
        // 一定の確率（動きの強さに比例）でスケールを変更
        if (Math.random() < intensity * 0.4) { // 確率を少し上げて変化を促す
            // スケールの種類を拡張（メジャーだけでなくマイナーも追加）
            // 激しさを強調するためにマイナーとペンタトニックの確率を上げる
            const scaleTypes = ['major', 'minor', 'pentatonic', 'blues', 'phrygian']; // より激しいスケールを追加
            const currentScaleType = poseStateRef.current.scaleType || 'major';

            // スケールのルート音
            const scaleRoots = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
            let newScaleIndex = scaleRoots.indexOf(poseStateRef.current.currentScale);

            // 動きの方向に基づいてスケールのルート音を変更
            newScaleIndex = (newScaleIndex + direction + scaleRoots.length) % scaleRoots.length;
            poseStateRef.current.currentScale = scaleRoots[newScaleIndex];

            // 動きの強さに基づいてスケールタイプを変更（激しい動きなら緊張感のあるスケールが出やすく）
            if (intensity > 0.6) {
                // 強い動きでは緊張感のあるスケールを選びやすくする
                const moreIntenseScales = ['minor', 'phrygian', 'blues'];
                poseStateRef.current.scaleType = moreIntenseScales[Math.floor(Math.random() * moreIntenseScales.length)];
            } else if (Math.random() < 0.4) {
                const newScaleTypeIndex = (scaleTypes.indexOf(currentScaleType) + 1) % scaleTypes.length;
                poseStateRef.current.scaleType = scaleTypes[newScaleTypeIndex];
            }

            // 強い動きでオクターブを変更する可能性
            if (intensity > 0.5 && Math.random() < 0.4) { // 確率を上げて変化を促進
                // 垂直方向の動きでオクターブを上下（より広いオクターブレンジ）
                poseStateRef.current.currentOctave = Math.max(2, Math.min(6,
                    poseStateRef.current.currentOctave + vertical));
            }

            // メロディのフェーズも更新（より多くのフェーズを追加）
            poseStateRef.current.melodyPhase = (poseStateRef.current.melodyPhase + 1) % 8; // フェーズをさらに追加

            console.log(`スケール変更: ${poseStateRef.current.currentScale} ${poseStateRef.current.scaleType}, オクターブ: ${poseStateRef.current.currentOctave}, フェーズ: ${poseStateRef.current.melodyPhase}`);
        }
    };

    // メロディフレーズを生成する関数
    const generateMelodyPhrase = (intensity: number, direction: number, vertical: number) => {
        const scale = poseStateRef.current.currentScale;
        const scaleType = poseStateRef.current.scaleType || 'major';
        const octave = poseStateRef.current.currentOctave;
        const phase = poseStateRef.current.melodyPhase;

        // スケールに基づいた音階を取得
        let notes: string[] = [];

        // 拡張されたスケール定義
        const scaleDefinitions: { [key: string]: { [key: string]: string[] } } = {
            'major': {
                'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
                'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
                'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
                'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
                'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
                'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
                'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
            },
            'minor': {
                'C': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
                'D': ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
                'E': ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
                'F': ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
                'G': ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
                'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                'B': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A']
            },
            'pentatonic': {
                'C': ['C', 'D', 'E', 'G', 'A'],
                'D': ['D', 'E', 'F#', 'A', 'B'],
                'E': ['E', 'F#', 'G#', 'B', 'C#'],
                'F': ['F', 'G', 'A', 'C', 'D'],
                'G': ['G', 'A', 'B', 'D', 'E'],
                'A': ['A', 'B', 'C#', 'E', 'F#'],
                'B': ['B', 'C#', 'D#', 'F#', 'G#']
            },
            'blues': { // ブルーススケール（緊張感あり）
                'C': ['C', 'Eb', 'F', 'F#', 'G', 'Bb'],
                'D': ['D', 'F', 'G', 'G#', 'A', 'C'],
                'E': ['E', 'G', 'A', 'A#', 'B', 'D'],
                'F': ['F', 'Ab', 'Bb', 'B', 'C', 'Eb'],
                'G': ['G', 'Bb', 'C', 'C#', 'D', 'F'],
                'A': ['A', 'C', 'D', 'D#', 'E', 'G'],
                'B': ['B', 'D', 'E', 'F', 'F#', 'A']
            },
            'phrygian': { // フリジアンモード（緊張感強い）
                'C': ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb'],
                'D': ['D', 'Eb', 'F', 'G', 'A', 'Bb', 'C'],
                'E': ['E', 'F', 'G', 'A', 'B', 'C', 'D'],
                'F': ['F', 'Gb', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
                'G': ['G', 'Ab', 'Bb', 'C', 'D', 'Eb', 'F'],
                'A': ['A', 'Bb', 'C', 'D', 'E', 'F', 'G'],
                'B': ['B', 'C', 'D', 'E', 'F#', 'G', 'A']
            }
        };

        // スケールの音符を取得
        if (scaleDefinitions[scaleType] && scaleDefinitions[scaleType][scale]) {
            notes = scaleDefinitions[scaleType][scale].map(note => `${note}${octave}`);

            // 高いオクターブと低いオクターブの音も追加（音域を広げる）
            notes.push(`${scaleDefinitions[scaleType][scale][0]}${octave + 1}`);
            if (scaleDefinitions[scaleType][scale].length > 2) {
                notes.push(`${scaleDefinitions[scaleType][scale][2]}${octave + 1}`); // 3度上の音も追加
                notes.push(`${scaleDefinitions[scaleType][scale][4 % scaleDefinitions[scaleType][scale].length]}${octave + 1}`); // 5度上の音も追加（激しさ増加）
            }
            // より広い音域で動くように低音も確実に追加（激しさ増加）
            notes.unshift(`${scaleDefinitions[scaleType][scale][0]}${octave - 1}`);

            // さらに極端な音域も少し加える（激しさ極大）
            if (Math.random() > 0.7) {
                notes.push(`${scaleDefinitions[scaleType][scale][0]}${octave + 2}`); // 2オクターブ上
            }
        } else {
            // フォールバック：Cメジャースケール
            notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'].map(note => `${note}${octave}`);
            notes.push(`C${octave + 1}`);
        }

        // メロディフレーズのパターンを選択（フェーズと動きの強さに基づく）
        let melodyPattern: string[] = [];

        // フレーズの長さを動的に決定（強い動きほど長いフレーズになる傾向）
        // 激しいメロディのために、より長いフレーズを生成
        const phraseLength = Math.min(9, Math.max(4, Math.floor(intensity * 10) + 3));

        // フェーズ別のメロディパターン（より多様なパターン）
        switch (phase) {
            case 0: // 激しい上昇/下降パターン
                if (direction > 0) {
                    // 急激な上昇
                    melodyPattern = Array.from({ length: phraseLength }, (_, i) =>
                        notes[Math.min(i * 2 % notes.length, notes.length - 1)]);
                } else {
                    // 急激な下降
                    melodyPattern = Array.from({ length: phraseLength }, (_, i) =>
                        notes[Math.max(notes.length - 1 - i * 2, 0) % notes.length]);
                }
                break;
            case 1: // 大きな跳躍のアルペジオ
                if (vertical > 0) {
                    // 上下の激しい動き（1-5-8-2-7）
                    const baseIndices = [0, 4, notes.length - 1, 1, notes.length - 2];
                    melodyPattern = Array.from({ length: phraseLength }, (_, i) =>
                        notes[baseIndices[i % baseIndices.length] % notes.length]);
                } else {
                    // より広いジャンプ
                    const baseIndices = [0, notes.length - 1, 2, notes.length - 3, 4];
                    melodyPattern = Array.from({ length: phraseLength }, (_, i) =>
                        notes[baseIndices[i % baseIndices.length] % notes.length]);
                }
                break;
            case 2: // 緊張感のあるパターン
                {
                    // テンションの高いフレーズ
                    const baseIndices = [0, 6, 1, 5, 2, 7, 3];
                    melodyPattern = Array.from({ length: phraseLength }, (_, i) =>
                        notes[baseIndices[i % baseIndices.length] % notes.length]);
                }
                break;
            case 3: // 複雑な不規則パターン
                {
                    // 完全にランダムな跳躍（最も激しい）
                    const steps = [];
                    for (let i = 0; i < phraseLength; i++) {
                        // 大きなランダム跳躍を作る
                        steps.push(Math.floor(Math.random() * notes.length));
                    }
                    melodyPattern = steps.map(i => notes[i % notes.length]);
                }
                break;
            case 4: // 反復と突然の変化
                {
                    // 同じ音を繰り返した後で急に大きく跳躍するパターン
                    const pattern = [];
                    const noteIdx = Math.floor(Math.random() * notes.length);
                    // 同じ音を数回繰り返す
                    for (let i = 0; i < Math.min(3, Math.floor(phraseLength / 2)); i++) {
                        pattern.push(noteIdx);
                    }
                    // 残りは大きく跳躍
                    for (let i = pattern.length; i < phraseLength; i++) {
                        const jump = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5 + 3);
                        pattern.push((noteIdx + jump + notes.length) % notes.length);
                    }
                    melodyPattern = pattern.map(i => notes[i % notes.length]);
                }
                break;
            case 5: // ハーモニックマイナー風の劇的なパターン
                {
                    // 劇的な動きを作る
                    const dramaticPattern = [0, 2, 7, 0, 7, 5, 7];
                    melodyPattern = Array.from({ length: phraseLength }, (_, i) => {
                        const idx = dramaticPattern[i % dramaticPattern.length];
                        // 時々オクターブ上の音を混ぜる
                        const octaveJump = (i % 4 === 3) ? notes.length - 1 : 0;
                        return notes[(idx + octaveJump) % notes.length];
                    });
                }
                break;
            case 6: // 急激な上下運動
                {
                    // ジグザグの激しいパターン
                    melodyPattern = Array.from({ length: phraseLength }, (_, i) => {
                        const idx = i % 2 === 0 ?
                            Math.floor(i / 2) % Math.ceil(notes.length / 2) :
                            notes.length - 1 - Math.floor(i / 2) % Math.ceil(notes.length / 2);
                        return notes[idx % notes.length];
                    });
                }
                break;
            case 7: // 激しい連続跳躍
                {
                    let prevIdx = Math.floor(Math.random() * notes.length);
                    melodyPattern = [notes[prevIdx]];

                    for (let i = 1; i < phraseLength; i++) {
                        // 毎回3-6音程の跳躍を行う
                        const jump = (Math.random() > 0.5 ? 1 : -1) * (3 + Math.floor(Math.random() * 4));
                        prevIdx = (prevIdx + jump + notes.length) % notes.length;
                        melodyPattern.push(notes[prevIdx]);
                    }
                }
                break;
        }

        // 直前のフレーズとの連続性を考慮（最後の音符を開始音として使用する可能性）
        // 激しさを出すため連続性はやや減らす
        if (poseStateRef.current.lastMelodyNotes.length > 0 && Math.random() > 0.5) {
            const lastNote = poseStateRef.current.lastMelodyNotes[poseStateRef.current.lastMelodyNotes.length - 1];
            if (lastNote) {
                // 最後の音符をフレーズの最初の音符として置き換える
                melodyPattern[0] = lastNote;
            }
        }

        // 生成したフレーズを保存
        poseStateRef.current.lastMelodyNotes = [...melodyPattern];

        return melodyPattern;
    };

    // メロディフレーズを再生する関数
    const playMelodyPhrase = (melodyPhrase: string[], baseTime: number) => {
        // フレーズ内の音符の数
        const noteCount = melodyPhrase.length;

        // より激しいリズムパターンを追加
        const noteDurations = ['32n', '16n', '16n.', '8n', '8n.', '4n'];

        // リズムパターンの選択
        let rhythmPattern: string[];

        // 激しいリズムパターンの確率を上げる
        const aggressiveRhythm = Math.random() > 0.3; // 70%の確率で激しいリズム

        if (aggressiveRhythm) {
            // 激しいリズムパターン（急激な変化と短い音符）
            if (Math.random() > 0.5) {
                // パンクロック風の均等な短い音符
                rhythmPattern = Array(noteCount).fill('16n');
            } else {
                // ジャズフュージョン風の変則パターン
                const basePattern = ['16n', '16n', '8n', '16n', '8n.', '16n'];
                rhythmPattern = Array.from({ length: noteCount }, (_, i) =>
                    basePattern[i % basePattern.length]);

                // アクセント（長め・短めの音をランダムに配置）
                for (let i = 0; i < noteCount; i++) {
                    if (Math.random() > 0.8) {
                        // 時々32分音符の超短い音を入れる（さらに激しく）
                        rhythmPattern[i] = '32n';
                    } else if (i === 0 || i === Math.floor(noteCount / 2)) {
                        // フレーズの最初や中間は少し強調
                        rhythmPattern[i] = '8n';
                    }
                }
            }
        } else {
            // 通常のリズムバリエーション
            rhythmPattern = Array(noteCount).fill('').map(() =>
                noteDurations[Math.floor(Math.random() * (noteDurations.length - 1))]);

            // リズミカルなアクセントを付ける
            if (noteCount > 3) {
                // 最初と最後の音を強調
                rhythmPattern[0] = '8n.';
                rhythmPattern[noteCount - 1] = '8n';

                // 中間の音をよりバラエティに富ませる
                for (let i = 1; i < noteCount - 1; i++) {
                    if (i % 2 === 0) {
                        rhythmPattern[i] = '16n';
                    } else {
                        rhythmPattern[i] = '16n.';
                    }
                }
            }
        }

        // フレーズの総再生時間を計算するための変換テーブル
        const durationValues: { [key: string]: number } = {
            '32n': 0.05, // 超短い音符を追加
            '16n': 0.1,
            '16n.': 0.15,
            '8n': 0.2,
            '8n.': 0.3,
            '4n': 0.4
        };

        // 各音符を再生
        let cumulativeTime = 0;
        melodyPhrase.forEach((note, index) => {
            // タイミングを計算（前の音符の長さに基づく）
            const duration = rhythmPattern[index];
            const noteTime = baseTime + cumulativeTime;

            // 次の音符の開始時間を加算
            cumulativeTime += durationValues[duration] || 0.2;

            // 音符の強さを計算（よりダイナミックな変化をつける）
            let velocity = 0.5 + (Math.sin(index / noteCount * Math.PI * 2) * 0.4); // より大きな変化

            // リズミカルなアクセントを強調（より大きな差をつける）
            if (duration === '8n.' || duration === '4n') {
                velocity += 0.2; // 長い音符はより強く
            } else if (duration === '16n') {
                velocity -= 0.05; // 短い音符は少し弱く
            } else if (duration === '32n') {
                velocity += 0.15; // 超短い音符は強めのアクセント
            }

            // 重要な拍（1拍目など）はさらに強調
            if (index === 0 || index === Math.floor(noteCount / 2)) {
                velocity += 0.15; // より強い強調
            }

            // ランダムな強弱をさらに追加（激しさを増す）
            velocity += (Math.random() - 0.5) * 0.2;

            // 音符を鳴らす
            try {
                // 大きな値でクリップするのを防ぐ
                melodyRef.current.triggerAttackRelease(note, duration, noteTime, Math.min(0.95, Math.max(0.3, velocity)));
            } catch (error) {
                console.error(`音符再生エラー (${note}, ${duration}):`, error);
            }
        });
    };

    // メロディ関連の状態を初期化するためにposeStateRefにプロパティを追加
    // 最初のuseEffectのinitメソッド内でmelodyRef.current初期化後に追加
    if (!poseStateRef.current.scaleType) {
        poseStateRef.current.scaleType = 'major'; // 初期スケールタイプ
    }

    return (
        <div className="p-4 bg-gray-100 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">音楽エンジン</h3>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <p className="text-sm">BPM: {bpm}</p>
                    <input
                        type="range"
                        min="80"
                        max="160"
                        value={bpm}
                        onChange={(e) => {
                            const newBpm = parseInt(e.target.value);
                            setBpm(newBpm);
                            if (ToneRef.current) {
                                try {
                                    ToneRef.current.Transport.bpm.value = newBpm;
                                } catch (error) {
                                    console.error('BPM変更に失敗しました:', error);
                                }
                            }
                        }}
                        className="w-full"
                    />
                </div>
                <div className="text-sm">
                    <p>ステータス: {isPlaying ? '認識中' : '停止'}</p>
                    <p>初期化: {isInitialized ? '完了' : '準備中...'}</p>
                </div>
            </div>
            <div className="mt-3 text-xs text-gray-600">
                <p>【動作説明】</p>
                <ul className="list-disc pl-5">
                    <li>頷く動作：キックドラム</li>
                    <li>右手を動かす：ハイハット</li>
                    <li>左手を動かす：スネア</li>
                    <li>頭を左右に振る：メロディフレーズ</li>
                    <li>右手を上げる：ベース音</li>
                    <li>左手を上げる：FXサウンド</li>
                    <li>両手を上げる：特殊エフェクト</li>
                </ul>
            </div>
        </div>
    );
};

export default AudioEngine;
export { AudioEngine }; 