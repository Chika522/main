// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;

// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('button');
const count = document.getElementById('count');

// 複数のテキストを格納する配列
const textLists = [
    'Naoki Fujii',
    'Hidaka Ukisho',
    'Yuto Nasu',
    'Ryuga Sato',
    'Taisho Iwasaki',
    'Issei Kanasashi',
    'Ryusei Onishi',
    'Daigo Nishihata',
    'Shunsuke Michieda',
    'Kyohei Takahashi',
    'Kazuya Ohashi',
    'Kento Nagao',
    'Joichiro Fujiwara',
    'Shori Sato',
    'Fuma Kikuchi',
    'Kento Nakajima',
    'So Matsushima',
    'Yo Marius'
];

// ランダムなテキストを表示
const createText = () => {

    // 正タイプした文字列をクリア
    typed = '';
    typedfield.textContent = typed;

    // 配列のインデックス数からランダムな数値を生成する
    let random = Math.floor(Math.random() * textLists.length);

    // 配列からランダムにテキストを取得し画面に表示する
    untyped = textLists[random];
    untypedfield.textContent = untyped;
};

// キー入力の判定
const keyPress = e => {

    // 誤タイプの場合
    if(e.key !== untyped.substring(0, 1)) {
        wrap.classList.add('mistyped');
        // 100ms後に背景色を元に戻す
        setTimeout(() => {
            wrap.classList.remove('mistyped');
        }, 100);
        return;
    }

    // 正タイプの場合
    // スコアのインクリメント
    score++;
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;

    // テキストがなくなったら新しいテキストを表示
    if(untyped === ''){
        createText();
    }
};

// タイピングスキルのランクを判定
const rankCheck = score => {

    // テキストを格納する変数を作る
    let text = '';

    // スコアに応じて異なるメッセージを変数textに格納する
    if(score < 100) {
        text = `★ランク:C★ Bランクまであと${100 - score}文字です。`;
    } else if(score < 200) {
        text = `★ランク:B★ Aランクまであと${200 - score}文字です。`;
    } else if(score < 300) {
        text = `★ランク:A★ Sランクまであと${300 - score}文字です。`;
    } else if(score >= 300) {
        text = `★ランク:S★ おめでとうございます!`;
    }

    // 生成したメッセージと一緒に文字列を返す
    return `${score}文字打てました！ \n${text} \n【キャンセル】終了 / 【OK】リトライ`;
};

// ゲームを終了
const gameOver = id => {
    clearInterval(id);

    const result = confirm(rankCheck(score));

    // OKボタンをクリックされたらリロードする
    if(result == true) {window.location.reload()}
};

// カウントダウンタイマー
const timer = () => {

    // タイマー部分のHTML要素（p要素）を取得する
    let time = count.textContent;

    const id = setInterval(() => {

        // カウントダウンする
        time--;
        count.textContent = time;

        // カウントが0になったらタイマーを停止する
        if(time <= 0){
            gameOver(id);
        }
    }, 1000);
};

// ゲームスタート時の処理
start.addEventListener('click', () => {

    // カウントダウンタイマーを開始する
    timer();

    // ランダムなテキストを表示する
    createText();

    // スタートボタンを非表示にする
    start.style.display = 'none';

    // キーボードのイベント処理
    document.addEventListener('keypress', keyPress);
});

untypedfield.textContent = 'STARTを押してね';