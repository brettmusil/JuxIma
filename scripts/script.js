const imageWidth = 800; //your desired image width in pixels
const imageHeight = 600; //desired image height in pixels
let num = 1;

function setRandomNumber() {
    num = Math.floor((Math.random() * 1000) + 1);
    console.log(num);
}

setRandomNumber();

function renderImages(){
    document.getElementById("leftImage").src = 'https://source.unsplash.com/random/' + imageWidth + 'x' + imageHeight + '?sig=' + num;
    num++;
    document.getElementById("rightImage").src = 'https://source.unsplash.com/random/' + imageWidth + 'x' + imageHeight + '?sig=' + num;
    num++;
}