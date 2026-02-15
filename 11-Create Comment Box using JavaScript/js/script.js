document.getElementById('comment-btn').addEventListener('click', () => {
    const commentBox = document.getElementById('comment-area');
    const commentBoxValue = commentBox.value;

    const commentShow = document.getElementById('comment-show');

    const makePTag = document.createElement('p');
    makePTag.style.color = 'blue';
    makePTag.style.fontWeight = 'bold';
    makePTag.style.fontSize = '20px';


    makePTag.innerText = commentBoxValue;

    commentShow.appendChild(makePTag);

    commentBox.value = '';
});