const makeGreen = () => {
    document.body.style.backgroundColor = 'green';
}




const makeColorButton = document.getElementById('blueColor');
makeColorButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}




const makeOrangeButton = document.getElementById('orangeColor');
makeOrangeButton.onclick = makeOrange ;

function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}