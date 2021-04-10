
var counter = document.querySelector(".counter");


let count = 0;
setInterval(()=>{

    if (count < 1000){
        count++;
        counter.innerText = count;    
    }

},1)


