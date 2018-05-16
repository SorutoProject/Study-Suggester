window.onload = function(){
	var title = document.getElementById("title");
	title.focus();
}
function add(){
	var qvl = document.getElementById("q").value;
	var avl = document.getElementById("a").value;
	var qlist = document.getElementById("qlist");
	var qlistvl = qlist.value;
	if(qlistvl == ""){
		alert("問題を追加する前に、タイトルを入力してください");
	}else{
		qlist.value = qlistvl + "\n" + qvl + "\t" + avl;
		document.getElementById("q").value = "";
		document.getElementById("a").value = "";
	}	
}
function titleChange(){
	var qlist = document.getElementById("qlist");
	var titlevl = document.getElementById("title").value;
	var list = qlist.value.split("\n");
	list[0] = titlevl;
	qlist.value = list.join("\n");
}