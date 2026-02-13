/*
const body = document.getElementById('bodyTag');


const div = document.createElement('div');
div.innerText = 'This is a div';

const headingOne = document.createElement('h1');
headingOne.innerText = 'Heading One';
div.appendChild(headingOne);

const para = document.createElement('p');
para.innerText = 'This is a paragraph';
div.appendChild(para);


const ul = document.createElement('ul');
ul.innerText = '';
div.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'This is a list item - 1';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'This is a list item -2';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'This is a list item -3';
ul.appendChild(li3);



body.appendChild(div);
*/

const body = document.getElementById('bodyTag');

const div = document.createElement('div');
div.innerHTML = `

        <h1>This is a div</h1>
        <p>This is a paragraph</p>
        <ul style = "background-color:yellow">
            <li style= "list-style:none">This is a list item - 1</li>
            <li>This is a list item - 2</li>
            <li>This is a list item - 3</li>
        </ul>
`;

div.style.border = '1px solid black';
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'green';
div.style.padding = '10px';


body.appendChild(div);