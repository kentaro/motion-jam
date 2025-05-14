# MotionJam

動きで音楽を作るインタラクティブWebアプリケーション。カメラを通して骨格を検出し、動作に応じて音楽を生成・制御します。

## 概要

MotionJamはWebカメラを使って人の動きを検出し、リアルタイムで音楽を生成します。TensorFlow.jsのMoveNetモデルで骨格を検出し、Tone.jsで音楽を生成しています。

## 機能

- カメラからの骨格検出（MoveNet）
- 動きに反応する音楽生成（Tone.js）
- マルチパート構成（ドラム、ベース、メロディ）
- モーションマッピング（特定の動きで音楽を制御）

## モーションマッピング

以下の動きで音楽を制御できます：

- 両手を頭の上に上げる: ドロップ発動（ドラム強化）
- 右手を速く振る: メロディの音程上昇
- 左手を円形に動かす: フィルターエフェクト開始
- 頭を左右に振る: パンを動的に変更
- しゃがむ: ベースのパターン切り替え
- 静止状態が5秒続く: 曲をフェードアウト

## 開発環境

- Next.js
- TensorFlow.js + MoveNet
- Tone.js
- TypeScript

## 必要なファイル

音源サンプルが必要です：

- `/public/samples/kick.wav` - キックドラム
- `/public/samples/snare.wav` - スネアドラム
- `/public/samples/hihat.wav` - ハイハット

## インストール

```bash
# インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド（静的ファイル生成）
npm run build
```

## GitHub Pagesへのデプロイ

このプロジェクトはGitHub Actionsを使用して、GitHub Pagesに自動的にデプロイできます。

1. GitHubリポジトリの「Settings」タブに移動
2. 左サイドバーの「Pages」を選択
3. 「Source」セクションで「GitHub Actions」を選択
4. mainブランチにプッシュするか、GitHub Actionsのワークフローを手動で実行

ワークフローは`.github/workflows/deploy.yml`に定義されています。

### ベースパスの設定

リポジトリ名が`motion-jam`でない場合は、`next.config.ts`ファイルの`basePath`を変更してください：

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/あなたのリポジトリ名' : '',
```

## 使い方

1. カメラへのアクセスを許可する
2. 「開始」ボタンをクリックするか、スペースキーを押す
3. カメラの前で動いて音楽を制御する
4. 「停止」ボタンをクリックするか、再度スペースキーを押して停止

## 注意事項

- カメラの使用は初回時に明示的な許可が必要です
- すべての処理はクライアントサイドで完結します（個人情報は送信されません）
- 処理性能により、古いスマホやPCでは低パフォーマンスになる可能性があります

## ライセンス

MIT

## 作者

[Your Name]
