function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Success', console.log('Resolve Log'));
        }, 2000);
    });
}

async function anotherFunc() {           //async
    const data = await getData();       //await
    console.log(data);

    console.log('Log 1...');
    console.log('Log 2...');
    console.log('Log 3...');
}

anotherFunc();




// <----With fetch API----->


async function getData1(){
    let url = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await url.json();
    console.log(data);
}

async function anotherFunc1(){
    const data = await getData1();
    console.log(data);

    console.log('Hello 1');
    console.log('Hello 2');
    console.log('Hello 3');
}

anotherFunc1();