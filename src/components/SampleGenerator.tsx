'use client';

import { useState } from 'react';
import {
    createKickSample,
    createSnareSample,
    createHihatSample,
    audioBufferToWav
} from '@/utils/createSampleAudio';

export const SampleGenerator = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [status, setStatus] = useState('');

    const generateSamples = async () => {
        setIsGenerating(true);
        setStatus('サンプル音源を生成しています...');

        try {
            // キックドラムの生成
            const kickBuffer = createKickSample();
            const kickWav = audioBufferToWav(kickBuffer);
            const kickUrl = URL.createObjectURL(kickWav);

            // スネアドラムの生成
            const snareBuffer = createSnareSample();
            const snareWav = audioBufferToWav(snareBuffer);
            const snareUrl = URL.createObjectURL(snareWav);

            // ハイハットの生成
            const hihatBuffer = createHihatSample();
            const hihatWav = audioBufferToWav(hihatBuffer);
            const hihatUrl = URL.createObjectURL(hihatWav);

            setStatus('サンプル音源の生成が完了しました。');

            // ダウンロードリンクを作成
            const kickLink = document.createElement('a');
            kickLink.href = kickUrl;
            kickLink.download = 'kick.wav';
            kickLink.click();

            const snareLink = document.createElement('a');
            snareLink.href = snareUrl;
            snareLink.download = 'snare.wav';
            snareLink.click();

            const hihatLink = document.createElement('a');
            hihatLink.href = hihatUrl;
            hihatLink.download = 'hihat.wav';
            hihatLink.click();

            // 使い終わったURLは解放
            setTimeout(() => {
                URL.revokeObjectURL(kickUrl);
                URL.revokeObjectURL(snareUrl);
                URL.revokeObjectURL(hihatUrl);
            }, 1000);

        } catch (error) {
            console.error('サンプル生成中にエラーが発生しました:', error);
            setStatus('サンプル生成中にエラーが発生しました。');
        } finally {
            setIsGenerating(false);
        }
    };

    const testSamples = () => {
        // サンプルを試聴する関数
        const playBuffer = async (buffer: AudioBuffer) => {
            const audioContext = new AudioContext();
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.start();
        };

        // 各サンプルを生成して再生
        playBuffer(createKickSample());
        setTimeout(() => playBuffer(createSnareSample()), 500);
        setTimeout(() => playBuffer(createHihatSample()), 1000);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">サンプル音源生成</h3>
            <p className="text-sm mb-4">
                サンプル音源（kick.wav, snare.wav, hihat.wav）をブラウザ上で生成し、ダウンロードします。
                これらのファイルを public/samples/ ディレクトリに配置してください。
            </p>

            <div className="flex flex-wrap gap-2">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
                    onClick={generateSamples}
                    disabled={isGenerating}
                >
                    サンプル音源を生成
                </button>

                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                    onClick={testSamples}
                >
                    試聴
                </button>
            </div>

            {status && (
                <p className="mt-4 text-sm text-gray-700">{status}</p>
            )}

            <div className="mt-4 text-xs text-gray-500">
                <p>※ 実際のアプリケーションでは、より高品質なサンプル音源を使用することをおすすめします。</p>
            </div>
        </div>
    );
}; 