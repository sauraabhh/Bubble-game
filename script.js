var timer=60;
var score=0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
   hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble(){
    var clutter="";

for(var i=1;i<=319;i++){
    var rno=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rno}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}


function runtimer(){
    var clearInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(clearInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><br/><h1>Your Score is ${score}</h1>`;
        }
    },1000);
}

//event bubbling we add eventlistner click to particular element if not found check it to parent the next parent and so on
document.querySelector("#pbtm").addEventListener("click",
function(details){
    var clickedno=Number(details.target.textContent);
    if(clickedno === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runtimer();
makeBubble();
getNewHit();