## 💻Gitコマンドまとめ  

`clone`  
`init`  
`config`  
`remote add`  
  
↑ 基本的に最初の一回しか使わない  
  
`pull` （こまめにpullするようにする）  
`push`  
`branch`  
`checkout`  
`commit`  
`log`  
`diff`  
`status`  
`add`  
  
↑ 気兼ねなく使ってOK  
  
`merge develop -> 作業中のブランチ` (大丈夫。むしろこまめに)  
`merge 作業中のブランチ -> develop` (気を付ける！github上でやってもらう方が安全)  
`reset --soft HEAD` (commitの取り消し。commit前の状態に戻るので、編集した部分は残る。未pushのcommitに対してなら大丈夫。push後のcommitだと 😵‍💫
`reset --hard HEAD` (気を付ける！最新のcommitを取り消して、編集したものも全部消す。)  
`fetch` (pull使ってくれる方が嬉しい)    
  
--- ↑ 気を付けつつ使う  
  
--- ↓ なれるまで絶対使わない  
  
`revert`  
`squash`  (--squash merge)  
`rebase`  
