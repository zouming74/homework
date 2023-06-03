window.onload = function() {
    var slides = document.getElementsByClassName("slide");
    var leftBtn = document.getElementsByClassName("btn-left")[0];
    var rightBtn = document.getElementsByClassName("btn-right")[0];
    var menuitems = document.getElementsByClassName("menuitem");
    var container = document.getElementsByClassName("container")[0];
    var index = 0;
    var timer = null;

    // 清除class
    var clearClass = function() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].className = "slide";
            menuitems[i].className = "menuitem";
            menuitems[i].setAttribute("num", i);
        }
    }

    // 只显示一个slide
    function move() {
        clearClass();
        slides[index].className = "slide active";
        menuitems[index].className = "menuitem red";
        // menuitems[index].getElementsByClassName.background = "red";
    }

    // 向右切换
    rightBtn.onclick = function() {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        move();
    }

    // 向左切换
    leftBtn.onclick = function() {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        move();
    }

    // 定时器，实现轮播
    timer = setInterval(function() {
        rightBtn.onclick();
    }, 1500);

    // 点击数字切换
    for (var i = 0; i < slides.length; i++) {
        menuitems[i].addEventListener("click", function() {
            var point_index = this.getAttribute("num");
            index = point_index;
            move();
        });
    }

    // 鼠标移入和鼠标移出
    container.onmouseover =  function() {
        clearInterval(timer);
        timer = setInterval(function() {
            rightBtn.onclick();
        }, 60000);
    }
    container.onmouseleave = function() {
        clearInterval(timer);
        timer = setInterval(function() {
            rightBtn.onclick();
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
