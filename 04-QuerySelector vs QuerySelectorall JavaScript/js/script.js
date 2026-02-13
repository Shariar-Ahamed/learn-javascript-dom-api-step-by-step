const findElement = document.getElementById('hello');
console.log(findElement);

const findElement2 = document.getElementsByTagName('h2');
console.log(findElement2);

const findElement3 = document.getElementsByClassName('helloClass');
console.log(findElement3);

const findElement4 = document.querySelector('.querySelector');
console.log(findElement4);

const findElement5 = document.querySelectorAll('#querySelectorAll');
console.log(findElement5);

// const findElement6 = document.querySelector('.text').innerText = "Hello";

const findElement7 = document.querySelector('.text').innerHTML = "<h1>Hello World</h1>";
console.log(findElement7);