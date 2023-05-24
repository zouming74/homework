window.onload = function(){
	let aele = document.getElementsByClassName("menuitem");

	aele[0].style.backgroundColor = "red";
}
function move(arg){
	let aele = document.getElementsByClassName("menuitem");
	clear(aele);
	aele[arg].style.backgroundColor = "red";

	let aMove = document.getElementsByClassName("move");
	aMove[0].style.top = - arg * 100 + "%";  ///运算完后是100%；
}
function clear(aelement){
	for (var i = 0;i < aelement.length; i++) {
		aelement[i].style.backgroundColor = "blue";
	}
}