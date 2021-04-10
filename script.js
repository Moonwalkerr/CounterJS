
var counter = document.querySelector(".counter");
var follow = document.querySelector(".follow");


let count = 0;
setInterval(()=>{

    if (count < 5000){
        count++;
        counter.innerText = count;    
    }

    if (count === 1000){
        follow.innerText = "Fred is at  !! " + count;
    }
    
    if (count === 2000){
        follow.innerText = "Fred is at  !! " + count;
    }
    
    if (count === 5000){
        follow.innerText = "Fred has lost is count now  !! " ;
    }

},1)

