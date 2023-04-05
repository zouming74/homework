window.onload = function(){
    // alert("页面加载完成")
}
// function colorChag(value){
//     const ele = document.getElementById("lb1"); //驼峰命名
//     ele.style.color = value;
//     alert("颜色改变"); //body
// }

function colorChag(value){
    const eleA = document.getElementsByClassName("lb");
    for(var i = eleA.length -1;i>= 0;i--){
        eleA[i].style.color = value;
    }
}

function rangeChag(arg){
    const eleA = document.getElementsByClassName("container");
    let arg1 = 255-arg;
    eleA[0].style.backgroundColor = "rgb("+arg1+","+arg1+","+arg1+")";
}

function checkPid(pid){
    const baseFac = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2)
    const checkA = new Array('1','0','X','9','8','7','6','5','4','3','2')
    const eleAlarm = document.getElementsByClassName("alarm");
    const ele = document.getElementById("ip2")

    const factor = pid.split('');
    let sum = 0;
    for(var i = 0;i<17;i++)
    {
        sum += factor[i]*baseFac[i];

    }
    if(checkA[sum % 11] != factor[17])
    {
        ele.style.borderColor = "red";
        eleAlarm[0].style.display = "inline";
    }
    else{
        ele.style.borderColor = "gray";
        eleAlarm[0].style.display = "none";
    }
}