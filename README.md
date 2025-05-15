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
# Sample workflow for building and deploying a Next.js site to GitHub Pages
#
# To get started with Next.js see: https://nextjs.org/docs/getting-started
#
name: Deploy Next.js site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          static_site_generator: next
      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
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
