let slide = new Array(
  "cat01.jpg",
  "cat02.jpg",
  "cat03.jpg",
  "cat04.jpg",
  "cat05.jpg",
  "cat06.jpg",
  "cat07.jpg",
  "cat08.jpg",
  "cat09.jpg",
  "cat10.jpg",
  "cat11.jpg",
  "cat12.jpg"
);


console.log(slide);

let b1 = document.querySelector("#previous");
let b2 = document.querySelector("#next");
let b3 = document.querySelector("#start");
let b4 = document.querySelector("#stop");
let x=0;
let myInterval;
 
function start(){
myInterval = setInterval(suivant, 4000);
}

function stop(){
  clearInterval(myInterval);
}

function precedent() {
    if (x!==0){
    x = x - 1;
  }else{
    x=slide.length-1;
  }
    document.querySelector("#slide").src = "assets/img/cats/" + slide[x]; 
}
function suivant() {
  if (x!==slide.length-1){
    x = x + 1;
  }else{
    x=1;
  }
    document.querySelector("#slide").src = "assets/img/cats/" + slide[x];
  
}
b1.addEventListener("click", function () {
  precedent()
});
b2.addEventListener("click", function () {
  suivant()
});
b3.addEventListener("click", function () {
  start()
});
b4.addEventListener("click", function () {
  stop()
});