# 制作環境の説明

## 前提

VScode で制作してください

## 環境の準備

### node のインストール

下記を参考に nodenv（node のバージョン管理ツール）をインストール
https://qiita.com/kaburankattara/items/3ce735e51ba6226cc34a

ターミナルで

```sh
node -v
```

を実行
エラーにならなければ完了

### モジュールインストール

ターミナルで

```sh
npm install
```

を実行

VScode を再起動して
ウィンドウ左下の NPM スクリプトの

```sh
dev
```

を実行し、エラーが出なければ完了

## NPM スクリプト

| コマンド       | 内容                                               |
| :------------- | :------------------------------------------------- |
| `dev`          | localhost 立ち上げおよび watch タスク実行          |
| `build`        | 納品ファイルのビルド                               |
| `preview`      | 納品ファイルをローカルで表示確認する               |
| `convert:webp` | src 配下の画像ファイルを webp 変換して書き出しする |

## フォルダ構造

.
├── README.md
├── astro.config.mjs 環境設定ファイル
├── convert-to-webp.js 画像の webp 変換のスクリプト
├── dist 納品ファイル出力先
├── node_modules
├── package-lock.json
├── package.json
├── public
│ └── assets
│ ├── font フォントファイルの格納
│ └── img webp に変換した画像の出力先
├── src 作業フォルダ
│ ├── components パーツ格納場所
│ ├── image 画像格納場所
│ ├── pages ページ格納場所
│ ├── sections セクジョン格納場所
│ └── styles sass 格納場所
└── tsconfig.json

## 作業方法

作業については基本的に src 配下のファイルを編集すること。
