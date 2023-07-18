// Vamos a hacer una nueva promesa

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    });
};

const anotherFn = async () => {
    const something = await fnAsync(); //aquí nos está regresando una promesa
    console.log(something);
    console.log('Hello!'); // Se imprime hasta que termine la promesa de fnAsync
};

console.log('Before');
anotherFn();
console.log('After');

/* Orden de resultado:

Before
After
Async!!
Hello!

*/