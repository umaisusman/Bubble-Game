let timer=60;
let score = 0;
let run;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}

function getHit(){
    run= Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=run
}

function load(){
        location.reload();
}

function setTimer(){
    let timeInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent=timer;
        }else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML=`<div id="endGame"><h1 id="over">Game Over</h1>
            <button id="btn" onclick="load()">Try Again</button></div>
            `
        }
    },1000)
}


function makeBubble(){
    let clutter = "";

     for(let i=1;i<=105;i++){
        let x= Math.floor(Math.random()*10)
        clutter +=`<div class="bubble">${x}</div>`
    };
    
    document.querySelector("#pbtm").innerHTML=clutter;
}

document.querySelector("#pbtm").addEventListener("click",function(data){
    let d=Number(data.target.textContent);
    if(d===run){
        increaseScore();
        makeBubble();
        getHit();
    }else{
        alert("Please click correct number!")
    }
    
})


setTimer();
makeBubble();
getHit();

