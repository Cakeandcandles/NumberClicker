let numberShown = 0;
const button = document.getElementById("button");
let counter = document.getElementById("num");
const buttonPressed = function() {
    numberShown ++;
    counter.innerHTML = numberShown;
    if (numberShown === 10) {
        counter.innerHTML = "10 already? Get a life!";
    } else if (numberShown === 25) {
        counter.innerHTML = "Ok 25 is enough";
    } else if (numberShown === 30) {
        counter.innerHTML = "Ok 30 is good to stop at";
    }
};
button.addEventListener("click", buttonPressed);
