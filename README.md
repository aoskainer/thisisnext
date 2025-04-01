# thisisnext

## バージョン更新手順

```bash
# npm-check-updatesというライブラリをグローバルにインストールしncuコマンドで、メジャーバージョンは固定、マイナーバージョンのみ最新にします。
# なぜ、npm updateコマンドを利用しないのかというと、npm updateコマンドでは、package.jsonの書き換えは行ってくれないためです。
$ npm i -g npm-check-updates

# npm-check-updatesを利用し、マイナーバージョンのみアップデートを実施
$ ncu -u --target minor
$ npm install

# ライブラリの監査を見れるので結果を確認
$ npm audit
# もし依存関係の監査結果で脆弱性がSeverity: highのものがあった場合
$ npm audit fix --force
```
