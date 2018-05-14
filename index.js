//メインメニュー設定
var main = null;
var bl = '<a href="javascript:void(0)" onclick="change(\'top\')" class="bp">← 戻る</a><br>'
window.onload = function(){
	main = document.getElementById("main");
	main.innerHTML = '<a href="javascript:void(0);" onclick="change(\'jp\')" class="sl">国語</a><a href="javascript:void(0);" onclick="change(\'ma\')" class="sl">数学</a><a href="javascript:void(0);" onclick="change(\'sc\')" class="sl">社会</a>';
}
function change(n){
	if(n=="jp"){
		main.innerHTML = "現在、項目はありません。";
	}
	else if(n=="ma"){
		main.innerHTML = "現在、項目はありません。";
	}
	else if(n=="sc"){
		main.innerHTML = bl+'<br><a href="a/?q=rekishi-sample" class="sl">歴史サンプル問題</a>';
	}
	else if(n=="top"){
		main.innerHTML = '<a href="javascript:void(0);" onclick="change(\'jp\')" class="sl">国語</a><a href="javascript:void(0);" onclick="change(\'ma\')" class="sl">数学</a><a href="javascript:void(0);" onclick="change(\'sc\')" class="sl">社会</a>';
	}
	else{
		main.innerHTML = bl + "指定されたメニューIDはありません。"
	}
}