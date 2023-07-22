// Importar la clase XMLHttpRequest del módulo 'xmlhttprequest'
import { XMLHttpRequest } from 'xmlhttprequest';
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// Definir la URL base de la API
const API = 'https://api.escuelajs.co/api/v1';

// Función para realizar la solicitud HTTP GET y obtener datos de la API
function fetchData(urlApi, callback) {
  // Crear una instancia de XMLHttpRequest
  let xhttp = new XMLHttpRequest();

  // Configurar la solicitud HTTP GET con la URL proporcionada
  xhttp.open('GET', urlApi, true);

  // Definir una función que se ejecutará cada vez que cambie el estado de la solicitud
  xhttp.onreadystatechange = function(event) {
    // Verificar si la solicitud se ha completado correctamente (estado 4)
    if (xhttp.readyState === 4) {
      // Verificar el código de estado de la respuesta HTTP
      if (xhttp.status === 200) {
        // Si el código de estado es 200 (OK), llamar al callback con los datos obtenidos (parseados como JSON)
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // Si el código de estado no es 200, crear un objeto de error y llamar al callback con el error
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  };

  // Enviar la solicitud HTTP
  xhttp.send();
}

// Llamar a fetchData para obtener la lista de productos
fetchData(`${API}/products`, function(error1, data1) {
  if (error1) return console.error(error1);
  // Obtener el primer producto de la lista y llamar a fetchData para obtener más detalles sobre él
  fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
    if (error2) return console.error(error2);
    // Obtener la categoría del producto y llamar a fetchData para obtener más detalles sobre la categoría
    fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
      if (error3) return console.error(error3);
      // Imprimir los datos obtenidos
      console.log(data1[0]); // Imprimir el primer producto de la lista
      console.log(data2.title); // Imprimir el título del producto
      console.log(data3.name); // Imprimir el nombre de la categoría
    });
  });
});


/*

// Código sin comentarios

const XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
const API='https://api.escuelajs.co/api/v1';

function fetchData(urlApi,callback) {
    let xhttp=new XMLHttpRequest();
    xhttp.open('GET',urlApi,true);
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState===4) {
            if(xhttp.status===200) {
                callback(null,JSON.parse(xhttp.responseText));
            } else {
                const error=new Error('Error'+urlApi);return callback(error,null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`,function(error1,data1) {
    if(error1)return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`,function(error2,data2) {
        if(error2)return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if(error3)return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

*/
