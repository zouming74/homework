window.onload = function() {
    // var slides = document.getElementsByClassName("slide");
    // var leftBtn = document.getElementsByClassName("btn-left")[0];
    // var rightBtn = document.getElementsByClassName("btn-right")[0];
     var menuitems = document.getElementsByClassName("menuitem"); 
    // var container = document.getElementsByClassName("container")[0];
    var index = 0;
     var timer = null;

    //使用到的对象
    let container = document.querySelector(".container");
    let move = document.querySelector(".move");
    let slides = document.querySelectorAll(".slide");
    let left = document.querySelector(".btn-left");
    let right = document.querySelector(".btn-right");

    //初始化变量
    let curr = 9;


    // 清除class
    var clearClass = function() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].className = "slide";
            menuitems[i].className = "menuitem";
            menuitems[i].setAttribute("num", i);
        }
    }

    // 只显示一个slide
    function mov() {
        clearClass();
        menuitems[index].className = "menuitem red";
         move.style.left = -index*980 + "px";
    }
    function bound(){
        clearClass();
        menuitems[curr].className = "menuitem red";
    }

    // 向右切换
    right.onclick = function() {
        // if (index < slides.length - 1) {
        //     index++;
        // } else {
        //     index = 0;
        // }
        curr++;
        move.style.left = -curr*980 + "px";
        if(curr>=slides.length){
            curr = 0;
            move.style.left = "0px";
        }
        // mov();
        bound();
    }

    // 向左切换
    left.onclick = function() {
        // if (index > 0) {
        //     index--;
        // } else {
        //     index = slides.length - 1;
        // }
        curr--;
        move.style.left = -curr*980 + "px";
        if(curr<0){
            curr = slides.length -1;
            move.style.left = "-3920px"
        }
        // mov();
        bound();
    }

    // 定时器，实现轮播
    timer = setInterval(function() {
        right.onclick();
    }, 1500);

    // 点击数字切换
    for (var i = 0; i < slides.length; i++) {
        menuitems[i].addEventListener("click", function() {
            var point_index = this.getAttribute("num");
            index = point_index;
            mov();
        });
    }

    // 鼠标移入和鼠标移出
    container.onmouseover =  function() {
        clearInterval(timer);
        timer = setInterval(function() {
            right.onclick();
        }, 60000);
    }
    container.onmouseleave = function() {
        clearInterval(timer);
        timer = setInterval(function() {
            right.onclick();
        }, 3000);
    }
    // cd player
                document.querySelector('.btnp').addEventListener('click', function() {
                var cd = document.querySelector('.cd');
                var audio = document.querySelector('audio');
              
                if (audio.paused) {
                    audio.play();
                    cd.classList.remove('pause');
                    cd.classList.add('infinite');
                } else {
                    audio.pause();
                    cd.classList.remove('infinite');
                    cd.classList.add('pause');
            
              }
              audio.addEventListener('ended', function() {
                cd.classList.remove("infinite");
                cd.classList.add('pause');
              });
            }
            );
}
