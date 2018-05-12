//グローバル変数の設定
var questions = `テスト問題	
1853年、誰が浦賀に来航したか。	ペリー
1854年にアメリカと結んだ条約をなんというか。	日米和親条約
1858年にアメリカと結んだ条約をなんというか。	日米修好通商条約
1860年、井伊直弼が暗殺された事件を何というか。	桜田門外の変
1866年、坂本龍馬によって結ばれた同盟をなんというか。	薩長同盟
1867年、徳川慶喜が天皇に政権を返したが、これをなんというか。	大政奉還
1868年、新政府の方針をまとめたものをなんというか。	五箇条の御誓文
1871年、藩を廃止して、県を置いた政策をなんというか。	廃藩置県
1872年に発布された、教育に関する法律をなんというか。	学制
1873年に行われた、農地に関する改革をなんというか。	地租改正
1874年、板垣退助らを中心として起きた運動をなんというか。	自由民権運動
1874年、板垣退助らは民選議院( )の建白書を出した。	設立
`;
var num = 1;
var queslist = questions.split("\n");
var anstext = null;
window.onload = function(){
document.getElementById("title").innerHTML = queslist[0].split("\t")[0];//タイトルの表示
//1番目の問題を表示
var ques = queslist[1].split("\t");
document.getElementById("question").innerHTML = ques[0];
//模範解答をanstextに代入しとく
anstext = ques[1];
}
function next(){
num = num +　1;//問題No.の作成
document.getElementById("answer").value = "";
document.getElementById("answer").focus();
if(queslist[num]===undefined){
document.getElementById("question").innerHTML = "<b>これで問題は終わりです。<br>お疲れ様でした。</b>";
document.getElementById("answer").style.display = "none";
document.getElementById("ansb").style.display = "none";
}else{
var ques = queslist[num].split("\t");
document.getElementById("question").innerHTML = ques[0];
anstext = ques[1];
}
}
function ans(){
var ans = document.getElementById("answer").value;
if(ans == anstext){
alert("正解です");
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