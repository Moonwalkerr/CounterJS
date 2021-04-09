var counter = document.querySelector(".counter");
var follow = document.querySelector(".follow");
setInterval(
    () => {
        if (count < 1000) {
            count++;
            counter.innerText = count;
        }
    }, 1);

setTimeout(() => {
    follow.innerText = "Fred has lost count !";
}, 5000);