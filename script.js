var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getnewhit(){
    hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
var clutter = "";
for(var i = 1; i<=136; i++){
    var rn = Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${rn}</div>`;
}


document.querySelector("#pbtm").innerHTML = clutter;
}

function runtime(){
   var timerint =  setInterval(function(){
        if(timer>0){
        timer--;
        
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h2>`;
        }
    }, 1000)
    
}
document.querySelector("#pbtm")
.addEventListener("click", function(details){
    
    var clickthenum = Number(details.target.textContent);
    if(clickthenum === hitrn){
        increaseScore();
        makebubble();
        getnewhit();
    }
});
runtime();
makebubble();
getnewhit();
