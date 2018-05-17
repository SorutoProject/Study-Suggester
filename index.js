//Study Suggester Top Menu
//メインメニュー設定
var main = null;
var bl = '<a href="javascript:void(0)" onclick="change(\'top\')" class="bp">← 戻る</a><br>'
window.onload = function(){
	main = document.getElementById("main");
	main.innerHTML = '<a href="javascript:void(0);" onclick="change(\'jp\')" class="sl">国語</a><a href="javascript:void(0);" onclick="change(\'ma\')" class="sl">数学</a><a href="javascript:void(0);" onclick="change(\'sc\')" class="sl">社会</a>';
	tippy('.title', {
  delay: 100,
  arrow: true,
  duration: 200,
  placement: 'left'
});
}
function change(n){
	if(n=="jp"){
		var sc = "現在、項目はありません。";
	}
	else if(n=="ma"){
		var sc = "現在、項目はありません。";
	}
	else if(n=="sc"){
		var sc = '<a href="a/?q=rekishi-nenpyo-sample" class="sl">歴史サンプル問題</a>';
	}
	else if(n=="top"){
		main.innerHTML = '<a href="javascript:void(0);" onclick="change(\'jp\')" class="sl">国語</a><a href="javascript:void(0);" onclick="change(\'ma\')" class="sl">数学</a><a href="javascript:void(0);" onclick="change(\'sc\')" class="sl">社会</a>';
		return false;
		
	}
	else{
		var sc = "指定されたメニューIDはありません。"
	}
main.innerHTML = bl + sc;
}
function Set(){
	so.modal.custom('設定<br>通常出題する問題数<br><input type="number" id="NofQNo">問<br><br><input type="button" onclick="saveSet()" value="保存">');
	if(localStorage.quesno != undefined){
		document.getElementById("NofQNo").value=localStorage.quesno;
	}
}
function saveSet(){
	localStorage.quesno = document.getElementById("NofQNo").value;
	so.modal.close();
}
function fs(){
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }
}