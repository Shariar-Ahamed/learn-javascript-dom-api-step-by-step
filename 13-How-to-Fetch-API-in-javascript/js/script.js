fetch('http://127.0.0.1:5501/13-How-to-Fetch-API-in-javascript/api.txt')
.then(response => response.text())
.then(data => console.log(data))





function loadDate() {
    fetch('http://127.0.0.1:5501/13-How-to-Fetch-API-in-javascript/api.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('p-tag').innerText = data
    })
}






const url = 'http://127.0.0.1:5501/13-How-to-Fetch-API-in-javascript/api.txt'


function displaData() {
    fetch(url)
    .then(response => response.txt())
    .then(data => {
    const pTag = document.getElementById('p-tag2')
    pTag.innerText = data;
    })
}