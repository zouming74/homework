// window.onload = function(){
// 	let aele = document.getElementsByClassName("menuitem");

// 	aele[0].style.backgroundColor = "red";
// }
// function move(arg){
// 	let aele = document.getElementsByClassName("menuitem");
// 	clear(aele);
// 	aele[arg].style.backgroundColor = "red";

// 	let aMove = document.getElementsByClassName("move");
// 	aMove[0].style.top = - arg * 100 + "%";  ///运算完后是100%；
// }
// function clear(aelement){
// 	for (var i = 0;i < aelement.length; i++) {
// 		aelement[i].style.backgroundColor = "blue";
// 	}
// }

window.onload=function(){
    var slides=document.getElementsByClassName("slide");
    var leftBtn=document.getElementsByClassName("btn-left");
    var rightBtn=document.getElementsByClassName("btn-right");
    var menuitems=document.getElementsByClassName(".menu.menuitem");
    var container=document.getElementsByClassName("container");
    var index = 0;
    var timer=null;

    //清除class
    var clearClass=function(){
        for(let i=0;i<slides.length;i++){
            slides[i].className="slide";
            menuitems[i].className="menuitem";
            menuitems[i].setAttribute("num",i);
        }
    }

    //只显示一个slide
    function move(){
        clearClass();
        slides[index].className="slide active";
        menuitems[index].className="menuitem red";
    }

    //向右切换
    rightBtn.onclick=function(){
        if(index<slides.length-1){
            index++;
        }
        else{
            index=0;
        }
        move();
    }
    
    //向左切换
    rightBtn.onclick=function(){
        if(index<slides.length){
            index--;
        }
        else{
            index=slides.length-1;
        }
        move();
    }

    //定时器，实现轮播
    timer=setInterval(function(){
        rightBtn.onclick();
    },1500)

    // 点击数字切换
    for(var i=0;i<slides.length;i++){
        menuitems[i].addEventListener("click",function(){
            var point_index=this.getAttribute("num");
            index=point_index;
            move();
        })
    }

    //鼠标移入和鼠标移出
    container.onmouseover=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            rightBtn.onclick();
        },1500)
    }
    container.onmouseleave=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            rightBtn.onclick();
        },1500)
    }


}