// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return x===y ? x : Math.max(x,y);
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return edad>=18 ? "Allowed" : "Not allowed";
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  switch(status){
              //break no es necesario porque al retornar, la función se detiene
    case 1: return "Online";
    case 2: return "Away";
    default: return "Offline"
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
    switch(idioma){
        //break no es necesario porque al retornar, la función se detiene
    case "aleman": return "Guten Tag!";
    case "mandarin": return "Ni Hao!";
    case "ingles": return "Hello!";
    default: return "Hola!"
  } 
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color){
    //break no es necesario porque al retornar, la función se detiene
    case "blue": return "This is "+color;
    case "red": return "This is "+color;
    case "green": return "This is "+color;
    case "orange": return "This is "+color;
    default: return "Color not found";
  } 
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero == 10 || numero == 5 ? true : false
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero<50 && numero>20) return true
  else return false
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  let diferencia = numero - Math.floor(numero);
  return diferencia===0 ?  true : false
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if(numero%3===0 && numero%5===0) return "fizzbuzz"; 
  if(numero%3===0) return "fizz"; 
  if(numero%5===0) return "buzz"; 

  return numero;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if(num1===0 || num2===0 ||num3===0) return "Error";
  if(num1<0 || num2<0 || num3<0) return "Hay negativos";
  if(num1>num2 && num1>num3 && num1>0) return "Número 1 es mayor y positivo";
  if(num3 > num1 && num3 > num2) return ++num3;
  
  return false;

  //se puede usar else if y else, pero, de nuevo, si la condicion RETORNA algo, no hace falta, y el código es más limpio
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero===0 || numero === 1) return false;

        //la raíz cuadrada de un número es el mayor divisor posible de ese número, asi reducimos iteraciones y ahorramos recursos
  for(let i = 2; i<=Math.sqrt(numero); i++){
    if(numero%i===0) return false;
  }
  return true;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor ? "Soy verdadero" : "Soy falso"
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let tabla_del_seis=[];
  
  for(let i = 0; i<=10; i++){
      tabla_del_seis.push(6*i)
  }
  return tabla_del_seis;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  let check = numero;
  let counter = 0;

  do {
    check = Math.floor(check/10);
    counter++;
  } while (Math.floor(check/10));

  if(counter===2) return true;
  else return false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let added=numero;
  do {
    added+=5;
  } while (added < numero+(5*8));
  return added;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};




























































// // No cambies los nombres de las funciones.

// function obtenerMayor(x, y) {
//   // "x" e "y" son números enteros (int).
//   // Devuelve el número más grande
//   // Si son iguales, devuelve cualquiera de los dos
//   // Tu código:
// }

// function mayoriaDeEdad(edad) {
//   //Determinar si la persona según su edad puede ingresar a un evento.
//   //Si tiene 18 años ó más, devolver --> "Allowed"
//   //Si es menor, devolver --> "Not allowed"
// }
  
// function conection(status) {
//   //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
//   //Cuando el estado es igual a 1, el usuario está "Online"
//   //Cuando el estado es igual a 2, el usuario está "Away"
//   //De lo contrario, presumimos que el usuario está "Offline"
//   //Devolver el estado de conexión de usuario en cada uno de los casos.
// }

// function saludo(idioma) {
//   // Devuelve un saludo en tres diferentes lenguajes:
//   // Si "idioma" es "aleman", devuelve "Guten Tag!"
//   // Si "idioma" es "mandarin", devuelve "Ni Hao!"
//   // Si "idioma" es "ingles", devuelve "Hello!"
//   // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
//   // Tu código:
// }

// function colors(color) {
//   //La función recibe un color. Devolver el string correspondiente:
//   //En caso que el color recibido sea "blue", devuleve --> "This is blue"
//   //En caso que el color recibido sea "red", devuleve --> "This is red"
//   //En caso que el color recibido sea "green", devuleve --> "This is green"
//   //En caso que el color recibido sea "orange", devuleve --> "This is orange"
//   //Caso default: devuelve --> "Color not found"
//   //Usar el statement Switch.
// }

// function esDiezOCinco(numero) {
//   // Devuelve "true" si "numero" es 10 o 5
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

// function estaEnRango(numero) {
//   // Devuelve "true" si "numero" es menor que 50 y mayor que 20
//   // De lo contrario, devuelve "false"
//   // Tu código:
// }

// function esEntero(numero) {
//   // Devuelve "true" si "numero" es un entero (int/integer)
//   // Ejemplo: 0.8 -> false
//   // Ejemplo: 1 -> true
//   // Ejemplo: -10 -> true
//   // De lo contrario, devuelve "false"
//   // Pista: Puedes resolver esto usando `Math.floor`
//   // Tu código:
// }

// function fizzBuzz(numero) {
//   // Si "numero" es divisible entre 3, devuelve "fizz"
//   // Si "numero" es divisible entre 5, devuelve "buzz"
//   // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
//   // De lo contrario, devuelve el numero
// }

// function operadoresLogicos(num1, num2, num3) {
//   //La función recibe tres números distintos. 
//   //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//   //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//   //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//   //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//   //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
// }

// function esPrimo(numero) {
//   // Devuelve "true" si "numero" es primo
//   // De lo contrario devuelve "falso"
//   // Pista: un número primo solo es divisible por sí mismo y por 1
//   // Pista 2: Puedes resolverlo usando un bucle `for`
//   // Nota: Los números 0 y 1 NO son considerados números primos
// }

// function esVerdadero(valor){
//   //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
//   //si su valor es true y “Soy falso” si su valor es false.
//   //Escribe tu código aquí

// }

// function tablaDelSeis(){
//   //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//   //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//   //Escribe tu código aquí   
  
// }

// function tieneTresDigitos(numero){
//   //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
//   //Escribe tu código aquí
  
// }

// function doWhile(numero) {
//   //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
//   //Retornar el valor final.
//   //Usar el bucle do ... while.
// }


// // No modificar nada debajo de esta línea
// // --------------------------------

// module.exports = {
//   obtenerMayor,
//   mayoriaDeEdad,
//   conection,
//   saludo,
//   colors,
//   esDiezOCinco,
//   estaEnRango,
//   esEntero,
//   fizzBuzz,
//   operadoresLogicos,
//   esPrimo,
//   esVerdadero,
//   tablaDelSeis,
//   tieneTresDigitos,
//   doWhile
// };