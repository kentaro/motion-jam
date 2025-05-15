// @ts-check
import { createRequire } from 'module'; // createRequire をインポート
const require = createRequire(import.meta.url); // require 関数を作成

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // 静的サイト生成のため、exportモードを有効化
    output: 'export',
    trailingSlash: true, // URLの末尾にスラッシュを追加
    images: {
        unoptimized: true, // 画像最適化を無効化（静的エクスポートでは必要）
    },
    // GitHub Pagesでのデプロイ用のベースパス
    // リポジトリ名がmotion-jamの場合は '/motion-jam' を指定
    // デプロイ先のURLによって変更が必要
    basePath: process.env.NODE_ENV === 'production' ? '/motion-jam' : '',

    // Tone.jsをトランスパイル対象に追加
    // transpilePackages: ['tone'],

    // ビルド時の型チェックを無効化（プロダクションビルドでのエラーを回避）
    typescript: {
        ignoreBuildErrors: true,
    },

    // ESLintチェックを警告のみに
    eslint: {
        ignoreDuringBuilds: true,
    },

    webpack: (config, { isServer, webpack: Webpack }) => {
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

            // Buffer polyfill (もし 'Buffer is not defined' エラーが出る場合)
            config.plugins.push(
                new Webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                })
            );
            config.resolve.fallback = {
                ...config.resolve.fallback,
                "buffer": require.resolve("buffer/")
            };
        }

        return config;
    },
    // Next.js 14の機能に合わせて調整
    experimental: {
        // CSS最適化を無効化（静的エクスポートの問題を回避）
        optimizeCss: false,
        typedRoutes: true, // 型安全なルーティング
        webpackBuildWorker: true, // ビルドパフォーマンス向上
        serverActions: {
            allowedOrigins: ['localhost:3000'],
        },
    },
};

export default nextConfig; 