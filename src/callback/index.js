// Reto: sumar 2 elementos
function sum(num1, num2){
    return num1 + num2;
};

function calc(num1, num2, callback){
    return callback(num1, num2); // no necesariamente se tiene que llamar callback se puede llamar como sea
};
console.log(calc(2,2, sum)); // no es necesario pasarle los argumentos ni usarlos ()



// En este ejemplo se uso una función anónima
setTimeout(function(){
    console.log('Hola JavaScript')
}, 2000);



// Este ejemplo explica como también se puede usar una función por aparte, con un timer y colocarle un argumento. El argumento va por aparte, en este caso es 'Oscar'
function gretting(name) {
    console.log(`Hola ${name}`);
};

setTimeout(gretting, 2000, 'Oscar');

