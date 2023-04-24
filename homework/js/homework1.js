function dispCata(){
    var oDiv = document.getElementById('catalogs');
    if(oDiv.style.display == 'none')
    {
        oDiv.style.display = 'block';
     }
     else{
        oDiv.style.display = 'none';
    } 
}
function gotoTop(){
    document.documentElement.scrollTop = 0;
}