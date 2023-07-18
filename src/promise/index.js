
// Una promesa es algo que va a pasar now, later or never

// pendiente, cumplido, rechazado

const promise = new Promise(function (resolve, reject){
    resolve('hey!')
});;

// Vamos a validar si la cantidad de vacas nos cumple con la cantidad de leche que queremos

// Se declara una constante "cows" con el valor 9
const cows = 9;

// Se crea una nueva promesa utilizando el constructor Promise
const countCows = new Promise(function (resolve, reject) {
  // Se verifica si el valor de "cows" es mayor que 10
  if (cows > 10) {
    // Si es mayor, se resuelve la promesa con un mensaje que indica la cantidad de vacas en la granja
    resolve(`We have ${cows} cows on the farm`);
  } else {
    // Si no es mayor, se rechaza la promesa con un mensaje que indica que no hay suficientes vacas en la granja
    reject("There are no cows on the farm");
  }
});

// Se llama al método "then" de la promesa para manejar el caso en que la promesa se resuelve correctamente
countCows.then((result) => {
  // El argumento "result" contiene el valor resuelto de la promesa
  console.log(result); // Imprime el mensaje con la cantidad de vacas en la granja
}).catch((error) => {
  // El argumento "error" contiene el motivo del rechazo de la promesa
  console.log(error); // Imprime el mensaje de que no hay suficientes vacas en la granja
}).finally(() => {
  console.log('Finally'); // Se ejecuta siempre, tanto en caso de resolución como de rechazo de la promesa
});

/*

código sin comentarios

const cows = 9;
const countCows = new Promise(function (resolve, reject){
    if (cows > 10){
        resolve(`we have ${cows} cows on the farm`);
    } else {
        reject("There are no cows on the farm")
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));
*/