# Dockerでpuppeteerを起動するテスト

とりあえず起動できるところまで。  
スクショで豆腐になっているのは日本語フォントが入っていないためで、HTML上では日本語は入っていた。  
プリレンダリングのためだけなら一旦これで大丈夫。  

+ node:10.15.3

## コマンド
### Docker Imageのビルド
+ `$ cd docker && docker build -t test .`

### Docker Imageの起動
+ `$ cd ..`
+ `$ docker run -v $(PWD)/:/app -it test /bin/bash`
+ `# (Docker内に入る。Docker内appディレクトリと実行PC側カレントディレクトリが同期している状態)`
+ `# cd app`
+ `# yarn install && yarn start`
