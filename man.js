var show = document.getElementById("more");
var a = document.getElementById("all");
show.addEventListener('click',function(){
 if (a.style.display=="none"){
     a.style.display="block";
 }
 else{
     a.style.display="none";
 }
})
//make slide show 
var slideShow = ["equip 2.jpg","equip 1.jpg","equip 3.jpg","equip 4.jpg","equip 5.jpg","equip 6.jpg","equip 7.jpg"];
var i =0 ;
function $slide(){
var show = document.getElementById("slide");
show.src=slideShow[i];
if(i<slideShow.length -1){
    i++;
}
else{
    i=0;
}
setTimeout("$slide()",2000);
}
$slide();
//the  counter work
var num1=document.getElementById("count1");
var num2=document.getElementById("count2");
var num3=document.getElementById("count3");
var num4=document.getElementById("count4");

// the function for the first counter 
var start = 0;
var End = 5;

var num1 = document.getElementById("count1");
   count,

counter= setInterval(function()  {
   "use strict";
    count();
    start++;
}, 100);
function count(){
    "use strict";
    if(End>start)
    {
       start++;
        num1.innerHTML= start;
    }
    start--;
}

count();

// the function for the second counter 
var starter = 0;
var Ender = 13600;

var num2 = document.getElementById("count2");
   counterr,

 counter= setInterval(function()  {
   "use strict";
    counterr();
    starter++;
}, .1);
function counterr(){
    "use strict";
    if(Ender>starter)
    {
       starter++;
        num2.innerHTML= starter;
    }
    starter--;
}

counterr();

// the function for the third counter 
var starterr = 0;
var Enderr = 200;

var num3 = document.getElementById("count3");
   counterrr,

 counter= setInterval(function()  {
   "use strict";
    counterrr();
    starterr++;
}, 20);
function counterrr(){
    "use strict";
    if(Enderr>starterr)
    {
       starterr++;
        num3.innerHTML= starterr;
    }
    starterr--;
}

counterrr();

// the function for the forth counter 
var startere = 0;
var Endere = 300;

var num4 = document.getElementById("count4");
   counterre,

 counter= setInterval(function()  {
   "use strict";
    counterre();
    startere++;
}, 20);
function counterre(){
    "use strict";
    if(Endere>startere)
    {
       startere++;
        num4.innerHTML= startere;
    }
    startere--;
}

counterre();