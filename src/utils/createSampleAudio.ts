/**
 * WebAudioAPIを使ってサンプル音源を生成するユーティリティ
 * 
 * これらの関数は、サンプル音源がない場合に代替として使用できます。
 * 実際のアプリケーションでは、より良い音質の実際のサンプルを使用することを推奨します。
 */

// キックドラムのサンプルを生成
export function createKickSample(duration = 0.3): AudioBuffer {
  const sampleRate = 44100;
  const audioContext = new AudioContext();
  const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  // キックドラムの波形を生成
  for (let i = 0; i < buffer.length; i++) {
    // 初期周波数（低い音から開始）
    const frequency = 150 * Math.exp(-i / (sampleRate * 0.05));
    // 時間減衰（指数関数的に減衰）
    const amplitude = 1.0 * Math.exp(-i / (sampleRate * 0.1));
    // サイン波と時間減衰を組み合わせる
    channelData[i] = amplitude * Math.sin(2 * Math.PI * frequency * (i / sampleRate));
  }
  
  return buffer;
}

// スネアドラムのサンプルを生成
export function createSnareSample(duration = 0.2): AudioBuffer {
  const sampleRate = 44100;
  const audioContext = new AudioContext();
  const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  // スネアドラムの波形を生成（ノイズ+サイン波）
  for (let i = 0; i < buffer.length; i++) {
    // 時間減衰
    const amplitude = 0.7 * Math.exp(-i / (sampleRate * 0.05));
    // ノイズ成分
    const noise = Math.random() * 2 - 1;
    // サイン波成分（中間音）
    const tone = Math.sin(2 * Math.PI * 250 * (i / sampleRate));
    // ノイズとトーンを組み合わせる
    channelData[i] = amplitude * (0.7 * noise + 0.3 * tone);
  }
  
  return buffer;
}

// ハイハットのサンプルを生成
export function createHihatSample(duration = 0.1): AudioBuffer {
  const sampleRate = 44100;
  const audioContext = new AudioContext();
  const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
  const channelData = buffer.getChannelData(0);
  
  // ハイハットの波形を生成（高周波ノイズ）
  for (let i = 0; i < buffer.length; i++) {
    // 時間減衰（非常に早い）
    const amplitude = 0.5 * Math.exp(-i / (sampleRate * 0.02));
    // 高周波ノイズ
    const noise = Math.random() * 2 - 1;
    channelData[i] = amplitude * noise;
  }
  
  return buffer;
}

// AudioBufferをWAVファイルに変換
export function audioBufferToWav(buffer: AudioBuffer): Blob {
  const numOfChannels = buffer.numberOfChannels;
  const length = buffer.length * numOfChannels * 2;
  const sampleRate = buffer.sampleRate;
  
  // WAVヘッダーの生成
  const header = new ArrayBuffer(44);
  const view = new DataView(header);
  
  // "RIFF"チャンク記述子
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + length, true);
  writeString(view, 8, 'WAVE');
  
  // "fmt "サブチャンク
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // サブチャンクサイズ
  view.setUint16(20, 1, true); // オーディオフォーマット（1はPCM）
  view.setUint16(22, numOfChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numOfChannels * 2, true); // バイトレート
  view.setUint16(32, numOfChannels * 2, true); // ブロックアライン
  view.setUint16(34, 16, true); // ビット/サンプル
  
  // "data"サブチャンク
  writeString(view, 36, 'data');
  view.setUint32(40, length, true);
  
  // オーディオデータの結合
  const audioData = new Float32Array(buffer.length * numOfChannels);
  
  // チャンネルデータの取得
  for (let channel = 0; channel < numOfChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < buffer.length; i++) {
      audioData[i * numOfChannels + channel] = channelData[i];
    }
  }
  
  // Float32からInt16への変換
  const outputData = new Int16Array(audioData.length);
  for (let i = 0; i < audioData.length; i++) {
    // Float32を-32768から32767の間にクリップ
    const s = Math.max(-1, Math.min(1, audioData[i]));
    outputData[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
  }
  
  // WAVデータの作成
  const wavData = new Uint8Array(header.byteLength + outputData.buffer.byteLength);
  wavData.set(new Uint8Array(header), 0);
  wavData.set(new Uint8Array(outputData.buffer), header.byteLength);
  
  // BlobとしてWAVファイルを返す
  return new Blob([wavData], { type: 'audio/wav' });
}

// ヘルパー関数: DataViewに文字列を書き込む
function writeString(view: DataView, offset: number, string: string): void {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
} 