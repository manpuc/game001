function timeSetBtn(val){
    "use strict";//err check
    // time setting
    let setTime = val;
    // startStop btn
    function changeButton(){
        document.getElementById('js-btn').textContent = 'stop';
    }
    document.getElementById('js-btn').addEventListener('click',changeButton);


    // Game
    //スタートボタンを押した後なのかそうでないのかを知りたいので、この変数を宣言する
    var isStarted = false;//最初はスタートしてないのでfalseにしておく
    var startTime;//スタートボタンを押した時に現在の時間を保持しておきたい
    var diff;//押された時からスタートタイムを引く。その差を保持しておく変数
    //残り時間の設定
    var time = setTime;
    var msg = `${time}秒で止めろ！`;
    var result = document.getElementById("js-result");
    var btn = document.getElementById("js-btn");
    result.innerHTML = msg;
    
    btn.addEventListener("click", function(){
    if(!isStarted){//isStartedがfalseだったら
        isStarted = true;
        this.innerHTML = "stop";
        startTime = Date.now();
        result.innerHTML = msg;//スタートボタンを押したら最初のメッセージを表示。
    } else {
        isStarted = false;
        this.innerHTML = "start";
        diff = (Date.now() - startTime) / 1000 - time;//今の時間からスタートタイムを引く。ミリ秒を1000で割って秒にする。5秒との差のためさらに5を引く。
        //console.log(diff);
        if ( diff >= -0.1 && diff <= 0.1) {//5秒の前後0.1秒を許容範囲にする
        result.innerHTML = "てんさいだぁ！";
        const hitSound = new Audio('srcFile/audio/1.mp3')
        hitSound.play()
        } else if ( diff > 0) {
        result.innerHTML = "あなたは"  + diff.toFixed(2) + "秒遅かった"//小数点2桁まで表示
        const misSound = new Audio('srcFile/audio/2.mp3')
        misSound.play()
        } else {
        result.innerHTML = "あなたは"  + Math.abs(diff).toFixed(2) + "秒速かった"//マイナスなので絶対値を表示するabsをつかう。小数点2桁まで表示
        const misSound = new Audio('srcFile/audio/2.mp3')
        misSound.play()
        }
    }
    });
}
function csb() {
    const clickMp3 = new Audio('srcFile/audio/coca.mp3')
    clickMp3.play()
}