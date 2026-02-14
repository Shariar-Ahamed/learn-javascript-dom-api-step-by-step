/*function something(){
    document.write('Hello');
}*/

function something(){
    document.getElementById('heading2').innerText = 'This is new heading';

}


function forDate(){
    const forDate = document.getElementById('paraTag');
    forDate.innerText = new Date();

}