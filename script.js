
var counter = document.querySelector(".counter");


let count = 0;
setInterval(()=>{
    count++;
    counter.innerText = count;
},1)