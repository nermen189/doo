// array for slideshow
var slideShow =["docty.jpg","hos 5.jpg","hos1.jpg","equip 8.jpg","equip 9.jpg","equip0.jpg"];
var i = 0 ;
function $slideShow (){
    
     document.show.src=slideShow[i];
     if(i<slideShow.length -1){
         i++;
     }
     else{
         i=0;
     }
     setTimeout("$slideShow()",2000);
}
$slideShow();

// show about list
var about = document.getElementById("about");
var abo =document.getElementById("abo");
about.addEventListener('click',function(){
    if(abo.style.display=="none"){
    document.getElementById("abo").style.display="block";
    }
    else{
        abo.style.display="none";
    }
})
// show services list
var ser = document.getElementById("ser");
var serv =document.getElementById("serv");
ser.addEventListener('click',function(){
    if(serv.style.display=="none"){
    document.getElementById("serv").style.display="block";
    }
    else{
        serv.style.display="none";
    }
})