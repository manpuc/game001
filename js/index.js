
function timeSetBtn(val){
    "use strict";/* err check */
    /* time setting */
    let setTime = val;
    /* startStop btn */
    function changeButton(){
        document.getElementById('js-btn').textContent = 'stop' + "<p></p>";
    }
    document.getElementById('js-btn').addEventListener('click',changeButton);

    /* Game */
    var isStarted = false;
    var startTime;
    var diff;
    /*time limit */
    var time = setTime;
    var msg = `${time}秒で止めろ！`;
    var result = document.getElementById("js-result");
    var btn = document.getElementById("js-btn");
    var lvl = document.getElementById("lvlUpBtn");
    var nowLvl = lvl.value /10;
    result.innerHTML = msg;
    btn.addEventListener("click", function(){
    if(!isStarted){
        isStarted = true;
        this.innerHTML = "stop" + "<p></p>";
        startTime = Date.now();
        result.innerHTML = msg;
    } else {
        isStarted = false;
        this.innerHTML = "start" + "<p></p>";
        diff = (Date.now() - startTime) / 1000 - time;
        //console.log(diff);
        if ( diff >= -nowLvl && diff <= nowLvl) {
        result.innerHTML = "てんさいだぁ！";
        const hitSound = new Audio('srcFile/audio/1.mp3');
        hitSound.play();
        } else if ( diff > 0) {
        result.innerHTML = "あなたは"  + diff.toFixed(2) + "秒遅かった";//小数点2桁まで表示
        const misSound = new Audio('srcFile/audio/2.mp3');
        misSound.play();
        } else {
        result.innerHTML = "あなたは"  + Math.abs(diff).toFixed(2) + "秒速かった";
        const misSound = new Audio('srcFile/audio/2.mp3');
        misSound.play();
        }
    }
    });
}
