/**
 * このスクリプトは、サンプル音源を生成してファイルに保存するためのものです。
 * Node.js環境でこのスクリプトを実行すると、プロジェクトの public/samples ディレクトリに
 * kick.wav, snare.wav, hihat.wav が生成されます。
 * 
 * 使用方法:
 * 1. このファイルを src/utils/generateSamples.ts として保存
 * 2. 以下のコマンドを実行:
 *    npx ts-node src/utils/generateSamples.ts
 */

import fs from 'fs';
import path from 'path';
import { createKickSample, createSnareSample, createHihatSample, audioBufferToWav } from './createSampleAudio';

// ブラウザ環境のみで利用可能なクラスをNode.js環境で使用するためのモック
class MockAudioContext {
  sampleRate: number;
  
  constructor(options = { sampleRate: 44100 }) {
    this.sampleRate = options.sampleRate;
  }
  
  createBuffer(numOfChannels: number, length: number, sampleRate: number) {
    return {
      numberOfChannels: numOfChannels,
      length: length,
      sampleRate: sampleRate,
      duration: length / sampleRate,
      getChannelData: function(channel: number) {
        return new Float32Array(length);
      }
    };
  }
}

// グローバルにAudioContextを定義
(global as any).AudioContext = MockAudioContext;

// サンプルを生成して保存する関数
async function generateAndSaveSamples() {
  const samplesDir = path.resolve(process.cwd(), 'public', 'samples');
  
  // ディレクトリが存在しない場合は作成
  if (!fs.existsSync(samplesDir)) {
    fs.mkdirSync(samplesDir, { recursive: true });
  }
  
  try {
    // キックドラムのサンプル生成と保存
    const kickBuffer = createKickSample();
    const kickWav = audioBufferToWav(kickBuffer);
    const kickArrayBuffer = await kickWav.arrayBuffer();
    fs.writeFileSync(path.join(samplesDir, 'kick.wav'), Buffer.from(kickArrayBuffer));
    console.log('キックドラムのサンプルを保存しました');
    
    // スネアドラムのサンプル生成と保存
    const snareBuffer = createSnareSample();
    const snareWav = audioBufferToWav(snareBuffer);
    const snareArrayBuffer = await snareWav.arrayBuffer();
    fs.writeFileSync(path.join(samplesDir, 'snare.wav'), Buffer.from(snareArrayBuffer));
    console.log('スネアドラムのサンプルを保存しました');
    
    // ハイハットのサンプル生成と保存
    const hihatBuffer = createHihatSample();
    const hihatWav = audioBufferToWav(hihatBuffer);
    const hihatArrayBuffer = await hihatWav.arrayBuffer();
    fs.writeFileSync(path.join(samplesDir, 'hihat.wav'), Buffer.from(hihatArrayBuffer));
    console.log('ハイハットのサンプルを保存しました');
    
    console.log('すべてのサンプルを生成しました。');
    console.log(`保存先: ${samplesDir}`);
  } catch (error) {
    console.error('サンプル生成中にエラーが発生しました:', error);
  }
}

// スクリプトが直接実行された場合のみ実行
if (require.main === module) {
  generateAndSaveSamples();
} 