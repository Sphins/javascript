start();
let b1= document.querySelector(".cookieButton");
let b2= document.querySelector(".multiplierButton");
let b3= document.querySelector(".autoClick");

let y=1;
let x=0;
let val1=50; 
let val2=100;

function donuts(){
    let click = parseInt(document.querySelector(".counter").innerHTML)+y;
    document.querySelector(".counter").innerHTML=click;  
}

function donuts2(){
    let click = parseInt(document.querySelector(".counter").innerHTML)+x;
    document.querySelector(".counter").innerHTML=click;  
}


function inc(){
    if (parseInt(document.querySelector(".counter").innerHTML)>=val1){
    document.querySelector(".counter").innerHTML=parseInt(document.querySelector(".counter").innerHTML)-val1;
    y++;
    val1=val1*2;
    document.querySelector(".multiplierText").innerHTML="Vous êtes niveau " +y+ " et vous produisez " +y+ " donut(s)/clic";
    document.querySelector(".multiplierButton").innerHTML=  "LVL UP ("+val1+")";  
}
}
function auto(){
    if (parseInt(document.querySelector(".counter").innerHTML)>=val2){
        document.querySelector(".counter").innerHTML=parseInt(document.querySelector(".counter").innerHTML)-val2;
        x++;
        val2=val2*2;
        document.querySelector(".autoClickText").innerHTML="Vous avez "+x+" booster(s), produisant "+x+" donut(s)/seconde";
        document.querySelector(".autoClickButton").innerHTML=  "Acheter un booster ("+val2+")";
    }
}
function start(){
myInterval = setInterval(donuts2, 1000);
}


b1.addEventListener("click", function () {
    donuts()
  });
  b2.addEventListener("click", function () {
    inc()
  });
  b3.addEventListener("click", function () {
    auto()
  });