document.getElementById('update-tag').addEventListener("click", function (){
    const inputFild = document.getElementById('input-tag');
    const inputFildValue = inputFild.value;

    const paraTag = document.getElementById('para-tag');
    paraTag.innerText = inputFildValue;

    inputFild.value = '';

})





document.getElementById('change-text').addEventListener("click", function () {
    const changeText = document.getElementById('heading-tag');
        changeText.innerText = 'Sucessfully Changed';
})



document.getElementById("make-green").addEventListener("click", function () {
        document.body.style.backgroundColor = "green";
})



document.getElementById("make-alart").addEventListener("click", function () {
        alert("hello world");
});
