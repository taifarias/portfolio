

const hoverSound = new Audio("img/button.mp3");

const startButton = document.getElementById("startButton");
const socialMedia = document.getElementsByClassName("linkSocial");
const buttons = document.getElementsByClassName('buttons');
const form = document.getElementsByTagName('form');


function playSound() {
    hoverSound.currentTime = 0;
    hoverSound.play();
}



startButton.addEventListener('mouseover', playSound);

for (let i = 0; i < socialMedia.length; i++) {
    socialMedia[i].addEventListener('mouseover', playSound);
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', playSound);
}

for (let i = 0; i <form.length; i++) {
    form[i].addEventListener('mouseover', playSound);
}