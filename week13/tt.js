window.onload = function(argument){
	// alert('ee')
	let el = document.querySelector(".menu a");
	el.style.color = "red";
	let el1 = document.querySelector(".page a");
	el1.style.color = "green";
}
function doSwitch (arg){
	ini();

    let ele = document.querySelector(".menu a:nth-of-type(" + (arg + 1) + ")");
    ele.style.background = "white";
    ele.style.borderBottom = "none";

    let arr = document.getElementsByClassName("page");
    arr[arg].style.display = "block";
}
function ini(){
    let arr = document.getElementsByClassName("page");

	for (var i = 0; i < 5; i++) {
		let ele = document.querySelector(".menu a:nth-of-type(" + (i + 1) + ")");
        
        ele.style.background="#eee";
        ele.style.borderBottom="1px solid #707070";

        arr[i].style.display = "none";
	}
}