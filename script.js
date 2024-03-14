var timer = 60;
var score = 0;
var hitrn = 0;

function makesbubble(){
var clutter = "";

for(var i = 1; i<=286; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
} 
document .querySelector("#pbtm").innerHTML = clutter;
}

function incresaScore(){
    score += 10;
    document.querySelector("#seoreval").textContent = score;
}
function runTimer(){
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
 
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickdnum = Number(dets.target.textContent);
    
    if(clickdnum === hitrn){
        incresaScore();
        makesbubble();
        getNewHit();
    
    }
});

getNewHit();
runTimer();
makesbubble();