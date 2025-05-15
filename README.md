# Motion Jam - 動きで音楽を作るインタラクティブアプリ

MotionJamは体の動きを使って音楽を生成できるインタラクティブなWebアプリです。カメラで撮影した動きをTensorFlow.jsとPose Detectionモデルで解析し、それに合わせて音楽を生成します。

## デモ

YouTubeでデモを見る: [MotionJam Demo](https://youtu.be/_G3XRMXgDcw)

## 特徴

- ブラウザ上で完全に動作（サーバー不要）
- TensorFlow.jsとPose Detectionを使った動き検出
- Tone.jsによるリアルタイム音楽生成
- 以下の動作で音楽を制御:
  - 頷く動作：キックドラム
  - 右手を動かす：ハイハット
  - 左手を動かす：スネア
  - 頭を左右に振る：メロディフレーズ
  - 右手を上げる：ベース音
  - 左手を上げる：FXサウンド
  - 両手を上げる：特殊エフェクト

## 開発方法

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build
```

## GitHub Pagesへのデプロイ方法

このプロジェクトは静的サイトとして出力され、GitHub Pagesで簡単にホストできます。

### 手動デプロイ

1. `npm run build` を実行して静的ファイルを生成
2. `out` ディレクトリの内容をGitHubリポジトリの `gh-pages` ブランチにプッシュ
3. リポジトリの設定でGitHub Pagesのソースを `gh-pages` ブランチに設定

### GitHub Actionsによる自動デプロイ

以下のようなワークフローファイルを `.github/workflows/deploy.yml` に追加すると、メインブランチへのプッシュ時に自動的にデプロイされます：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
```

## 技術スタック

- Next.js - Reactフレームワーク
- TensorFlow.js - 機械学習ライブラリ
- Pose Detection - 姿勢推定モデル
- Tone.js - Webオーディオフレームワーク
- TypeScript - 型付きJavaScript

## ライセンス

MITライセンス

## 作者

[Your Name]
