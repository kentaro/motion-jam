import type { NextConfig } from "next";

// 2025年5月現在のNext.js設定
const nextConfig: NextConfig = {
  output: 'export', // 静的ファイルとしてエクスポート
  trailingSlash: true, // URLの末尾にスラッシュを追加
  images: {
    unoptimized: true, // 画像最適化を無効化（静的エクスポートでは必要）
  },
  // GitHub Pagesでのデプロイ用のベースパス
  // リポジトリ名がmotion-jamの場合は '/motion-jam' を指定
  // デプロイ先のURLによって変更が必要
  basePath: process.env.NODE_ENV === 'production' ? '/motion-jam' : '',
  
  // Tone.jsをトランスパイル対象に追加
  transpilePackages: ['tone'],
  
  webpack: (config, { isServer }) => {
    // TensorFlow.jsのブラウザフラグを設定
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      "@mediapipe/pose": false,
    };

    // ブラウザのみで動作するモジュールをServer Sideでは使用しない
    if (isServer) {
      Object.assign(config.resolve.alias, {
        '@tensorflow/tfjs-node': false,
        '@tensorflow/tfjs': false,
        '@tensorflow-models/pose-detection': false,
        'tone': false,
      });
    }

    // WebGPUなどModern Web API用の設定
    if (!isServer) {
      config.experiments = {
        ...config.experiments,
        asyncWebAssembly: true,
      };

      // Tone.js用の追加設定
      config.module.rules.push({
        test: /node_modules\/tone\/.*\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      });
    }

    return config;
  },
  // Next.js 16の機能
  experimental: {
    optimizeCss: true, // CSS最適化
    typedRoutes: true, // 型安全なルーティング
    webpackBuildWorker: true, // ビルドパフォーマンス向上
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
    // 警告が出ているので削除
    // esmExternals: 'loose',
    // 型定義に存在しない拡張プロパティはany型として扱う
    // ...(({
    //   // Tone.js特有の問題に対応
    //   modularizeImports: {
    //     'tone': {
    //       transform: 'tone/{{member}}',
    //       skipDefaultConversion: true
    //     }
    //   }
    // } as any))
  },
};

export default nextConfig;
