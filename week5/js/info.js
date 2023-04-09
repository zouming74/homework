window.onload = function(){
    // alert("页面加载完成")
}
function checkPid(pid){
    const baseFac = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2)
    const checkA = new Array('1','0','X','9','8','7','6','5','4','3','2')
    const eleAlarm = document.getElementsByClassName("alarm");
    const ele = document.getElementById("idcard")

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

  
function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }
  
  function toggleLightMode() {
    const body = document.querySelector('body');
    body.classList.toggle('light-mode');
  }
  
  const modeSwitcher = document.querySelector('#mode-switcher');
  
  modeSwitcher.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
      toggleLightMode();
      modeSwitcher.textContent = 'Switch to Dark Mode';
    } else {
      toggleDarkMode();
      modeSwitcher.textContent = 'Switch to Light Mode';
    }
  });
 
  function submitForm() {
    // 这里可以添加提交表单的代码，例如向服务器发送请求等
    alert("信息已提交"); // 弹出提示信息
  }
