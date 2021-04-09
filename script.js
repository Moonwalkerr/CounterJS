var count = document.getElementsByClassName("counter");

var follow = document.getElementById("follow");

let counter = 0;
setInterval(() => {
    if (counter < 1000){
              counter++;
              count.innerText = counter; 
    }
},1000)