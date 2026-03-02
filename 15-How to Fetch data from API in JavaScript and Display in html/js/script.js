function loadApiData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayData(data))
}


function displayData(data){
    const container = document.getElementById('parent-container');
    // console.log(data); 


    data.map(photo => {
        const div = document.createElement('div');

        div.style.backgroundColor = 'tomato';
        div.style.color = 'white';
        div.style.padding = '10px';
        div.style.margin = '10px';
        div.style.borderRadius = '10px';
        div.style.textAlign = 'center';


        div.innerHTML = `
            <h2> Tittle ---> : ${photo.title} </h2>
            <img src="${photo.thumbnailUrl}" alt=""/>
        `
        container.appendChild(div);
    })
}