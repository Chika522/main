## ✏️1章　Springの概要

#### 🌸**Spring**: Java開発のフレームワーク 
  フレームワークを使うと、必要な部分のプログラムを作る必要がないので開発効率がアップ.  
	ケーキ作りで例えると、ケーキの材料が並べられているだけの状態

#### 🌸**Spring Boot**: Springの初期設定の手間を省くことができるフレームワーク 
  ケーキ作りで例えると、ケーキ作りの材料を選ぶとある程度出来上がり、あとは装飾だけと言う感じ


### 🔖 
* IoC（Inversion of Control）: 制御の逆転＝作ったプログラムが呼び出される側になること
* DI: 依存性の注入


## ✏️2章　開発環境の構築

* プラグインのインストール確認
* Lombokのインストール確認
* プロジェクトの作成
* 選択したライブラリ
  * Spring Boot DevTools（Webアプリケーションを自動で再起動してくれる、開発効率を上げるための補助ツール）
  * Lombok
  * JDBC API, Spring Data JDBC（SpringでJDBCを使ってSQLを実行できるようになる）
  * H2（セットアップが不要なH2データベースを使えるようになる）
  * Thymeleaf（HTMLのテンプレートエンジン＝HTMLのテンプレートとデータを合成して、HTMLを作成してくれる機能のこと）
  * Spring Web（Spring MVCを使って、Webアプリケーションの開発ができるようになる）
* プロジェクト管理ツール
  * Maven（ライブラリの依存関係などを管理してくれる）


## ✏️3章　Hello World 簡単なサンプル
💥Whitelabel Error Pageのエラーになってしまった
* 考えられるエラーの原因 
  * アノテーションの入力ミスか未入力 　
  * クラスファイルの設置場所を間違えている
  * htmlの記述がどこか間違えている
  * build.gardleファイルにおいて必要な記述が抜けている
  * application.propertyにおいて正確な情報を記載していない 

🌟次の方法で解決 （８０８０ポートが既に使われていてサーバーが起動できなかったのが原因？） 
[SpringBootのポート指定方法](https://springhack.com/springboot%e3%81%ae%e3%83%9d%e3%83%bc%e3%83%88%e6%8c%87%e5%ae%9a%e6%96%b9%e6%b3%95-web-server-failed-to-start-port-8080-was-already-in-use-%e3%80%80/)
