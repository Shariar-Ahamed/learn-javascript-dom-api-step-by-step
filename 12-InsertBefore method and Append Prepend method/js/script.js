/*const menuTag = document.getElementById('menu');

const li = document.createElement('li');
li.textContent = 'First';

menuTag.insertBefore(li, menuTag.firstChild);  // lastChild {last li}
*/



const menuTag1 = document.getElementById('menu-tag');

const list = ['Home', 'About', 'Contact', 'Blog'];


const makeList = list.map((ltems) => {
    const li = document.createElement('li');
    li.textContent = ltems;
    return li;
});

menuTag1.append(...makeList);  //prepend {last li}