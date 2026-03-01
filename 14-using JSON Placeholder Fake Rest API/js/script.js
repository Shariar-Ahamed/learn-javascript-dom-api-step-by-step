function loadApi(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))

}

function displayData(data){
    const div = document.getElementById('div-Tag');


    data.map(user => {
        const p = document.createElement('h1');
        p.innerText = user.name;
        div.appendChild(p);
    })
}