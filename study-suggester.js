//グローバル変数の設定
var questions = null;
var min = 1 ;
var max = questions.split("\n").length - 1;
var quesnum = 3//解く問題の数
var answered = 0;//解いた問題の数
var num = null;
var queslist = questions.split("\n");
var anstext = null;
window.onload = function(){
document.getElementById("title").innerHTML = queslist[0].split("\t")[0];//タイトルの表示
//URLパラメータ取得
var arg = new Object;
var pair=location.search.substring(1).split('&');
for(var i=0;pair[i];i++) {
    var kv = pair[i].split('=');
    arg[kv[0]]=kv[1];
}
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "txtdb/" + arg.q + ".txt", true);
  xhr.onreadystatechange = function(){
    // 本番用
    if (xhr.readyState === 4 && xhr.status === 200){
		questions = xhr.responseText;
		next();
    }
    // ローカルファイル用
    if (xhr.readyState === 4 && xhr.status === 0){
      questions = xhr.responseText;
	  next();
    }
  };
  xhr.send(null);
};
function next(){
if(answered >= quesnum){
document.getElementById("question").innerHTML = "<b>これで問題は終わりです。<br>お疲れ様でした。</b>";
document.getElementById("answer").style.display = "none";
document.getElementById("ansb").style.display = "none";
}else{
answered = answered + 1;
num = Math.floor( Math.random() * (max + 1 - min) ) + min ;;//問題No.の作成
document.getElementById("answer").value = "";
document.getElementById("answer").focus();
var ques = queslist[num].split("\t");
document.getElementById("question").innerHTML = ques[0];
anstext = ques[1];
}
}
function ans(){
var ans = document.getElementById("answer").value;
if(ans == anstext){
next();
}
else if(ans==""){
alert("解答が入力されていません。");
}else{
alert("不正解です。\nもう一度解いてみましょう。");
}
}
function key_on(event){
if(event.keyCode == 13){
ans();
}
}