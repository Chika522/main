## 💻Gitコマンドまとめ  
### 🌟基本  
* 共有するファイルを選択する　  　
`git add ファイル名`
  
* 選択したファイルを記録する = コミット  
`git commit -m "メッセージ"`  
※メッセージはコミットする内容が一目でわかるタイトルにする  
  
* リモートリポジトリを用意する  
`git remote add リモートリポジトリ名 URL`  
  
* リモートリポジトリにファイルをアップロードする = プッシュ  
`git push origin master`  
  
* リモートリポジトリのファイルをダウンロードする = プル  
`git pull origin master`  
※プルはこまめにすること！
  
* 変更したファイルを把握する（ファイルのタイトルが赤字で表示される）  
`git status`  
  
* 変更内容を把握する（変更前コードは赤、変更後コードは緑で表示される）  
`git diff`  
  
---
### 🌟何回打っても何も変更されない安心コマンド  
* リモート追跡ブランチ以外のLocal branch確認  
`git branch`  
  
* すべてのLocal branch確認  
`git branch -a`  

* ファイルの変更状態確認  
`git status`  
  
* 
  
---
### 🌱基本的に最初の一回しか使わない
`clone`  
`init`  
`config`  
`remote add`  
---
### 🐈気兼ねなく使ってOK
`pull`
`push`  
`branch`  
`checkout`  
`commit`  
`log`  
`diff`  
`status`  
`add`  
---
### ⚠️気をつけつつ使う
`merge develop -> 作業中のブランチ` (大丈夫。むしろこまめに)  
`merge 作業中のブランチ -> develop` (気を付ける！github上でやってもらう方が安全)  
`reset --soft HEAD` (commitの取り消し。commit前の状態に戻るので、編集した部分は残る。未pushのcommitに対してなら大丈夫。push後のcommitだと 😵‍💫  
`reset --hard HEAD` (気を付ける！最新のcommitを取り消して、編集したものも全部消す。)  
`fetch` (pull使ってくれる方が嬉しい)    
---
### ☠️なれるまで絶対使わない  
`revert`  
`squash`  (--squash merge)  
`rebase`  
---
