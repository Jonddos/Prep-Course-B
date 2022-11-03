// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

const { default: simpleGit } = require("simple-git");

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    i=0;
    suma=0
    while(i<10){
      i++;
      suma = suma +i;
    }
    return suma

}

function encuentraPares(array){

  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  const resultado = array.filter(par => par%2 == 0);
  return resultado

}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var exp = array.map(function(x) {
    return x * x;
 });
 return exp

}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:

      let newArray = array.reduce((prev,next) => next+prev, 0);
      return newArray
    
  
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let str = num.toString();
  return str.length
  
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
