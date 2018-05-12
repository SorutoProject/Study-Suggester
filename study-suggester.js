﻿//グローバル変数の設定
var questions = `第一回OP模試 歴史　<b>年号を答えよ</b>	
アヘン戦争	1840
太平天国の乱	1851
ペリー来航	1853
日米和親条約	1854
インドの大反乱	1857
日米修好通商条約	1858
安政の大獄	1859
桜田門外の変	1860
南北戦争	1861
生麦事件	1862
薩英戦争	1863
四国連合艦隊下関砲撃事件	1864
薩長同盟	1866
大政奉還	1867
戊辰戦争	1868
五箇条の御誓文	1868
版籍奉還	1869
廃藩置県	1871
ドイツ帝国成立	1871
学制を交付	1872
徴兵令	1873
地租改正	1873
自由民権運動	1874
民撰議院設立の建白書を提出(板垣退助ら)	1874
西南戦争	1877
国会期成同盟を結成(民権派)	1880
国会開設の詔→板垣退助は自由党を結成	1881
大隈重信が立憲改進党を結成	1882
内閣制度ができる→伊藤博文が初代総理大臣	1885
大日本帝国憲法	1889
第一回帝国議会	1890
領事裁判権(治外法権)を撤廃(陸奥宗光)	1894
日清戦争(下関条約)	1894
"甲午農民戦争,日清戦争"	1894
朝鮮の独立が認められる(下関条約)	1895
日英同盟	1902
日露戦争(ポーツマス条約)	1904
韓国統監府の設置	1905
韓国併合	1910
朝鮮併合→朝鮮総督府の設置	1910
関税自主権の完全回復(小村寿太郎)	1911
辛亥革命	1911
第一次護憲運動	1912
中華民国建国(1月)(アジア初の共和国)	1912
第一次世界大戦に参戦	1914
第一次世界大戦	1914
中国に二十一カ条の要求を出す	1915
ロシア革命(レーニン)→ソビエト社会主義共和国連邦	1917
朝鮮出兵→米騒動が全国的に広がる	1918
原敬の政党内閣が完成	1918
ベルサイユ条約、五四運動、三・一独立運動	1919
パリ講和会議(ベルサイユ条約)	1919
三・一独立運動、五四運動	1919
"国際連盟加盟,新渡戸稲造が常任理事局次長"	1920
国際連盟成立	1920
ワシントン会議(日英同盟廃止)	1921
全国水平社結成	1922
関東大震災	1923
ラジオ放送開始	1925
治安維持法の制定	1925
普通選挙法の成立	1925
世界恐慌(ニューヨーク)	1929
ルーズベルト大統領のニューディール政策	1929
イギリス・フランスのブロック経済	1929
ヒトラーのナチス党が台頭→ユダヤ人を迫害	1929
満州事変(柳条湖事件が原因)	1931
満州国建国	1932
五・一五事件(犬養毅暗殺)	1932
国際連盟脱退	1933
二・二六事件	1936
ファシスト党が武力でエチオピアを併合	1936
日中戦争(盧溝橋事件)	1937
抗日民族統一戦線	1937
日中戦争	1937
国家総動員法→配給制	1938
第二次世界大戦(ドイツがポーランドに侵攻)	1939
日独伊三国同盟	1940
大政翼賛会を結成	1940
日ソ中立条約	1941
太平洋戦争	1941
真珠湾攻撃	1941
ミッドウェー海戦で敗れる	1942
学徒出陣、勤労動員、学童疎開	1943
マリアナ諸島の占領	1944
"東京大空襲,沖縄上陸,広島・長崎に原爆投下"	1945
ポツダム宣言を受諾	1945`;
var min = 1 ;
var max = questions.split("\n").length - 1;
var quesnum = 3//解く問題の数
var answered = 0;//解いた問題の数
var num = null;
var queslist = questions.split("\n");
var anstext = null;
window.onload = function(){
document.getElementById("title").innerHTML = queslist[0].split("\t")[0];//タイトルの表示
next();
}
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