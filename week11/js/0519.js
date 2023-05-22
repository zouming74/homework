window.onload = function(){

    let aele =document.getElementsByClassName("menuitem");

    aele[0].style.backgroundColor = "red";
}

function move(arg){
    let aele = document.getElementsByClassName("menuitem");

    clear(aele);

    aele[arg].style.backgroundColor = "red";

}

function clear(aelement){

    // alert(aelement.length);

    for ( var i = 0; i < aelement.length; i++) {

        aelement[i].style.backgroundColor = "blue";

    }
    
}