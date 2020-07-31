// Un arreglo es un espacio en memoria el cual nos ayuda a guardar varios tipos de datos en una sola variable y se define de la siguiente manera: 
var frutas = ["Fresa", "Manzana", "Melon", "Pera", "Uva"];

// para saber la longitud de un arreglo podemos usar el elemento .lenght de la siguiente manera
console.log(frutas.length);

// Para acceder a un valor en especifico de un arreglo lo podemos hacer de la sigueinte manera 

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

// para agregar mas valores a un array podemos usar el metodo .push el cual adjunta los nuevos elementos al final del array

var nuevasVerduras = frutas.push("Naranja", "Sandia", "Platano");
console.log(frutas);

// Otro metodo util es el .pop el cual nos ayuda a eliminar el ultimo elemento de nuestro array

var ultimo = frutas.pop();
console.log(frutas);

// El metodo .unshift nos ayuda al igual que .push agregar valores a nuestro array con la diferencia que este lo agrega al principio de nuestor arreglo

var principio = frutas.unshift("Arandano");
console.log(frutas);

// Para borrar el primer valor de un array podemos usar el metodo .shift de la siguiente manera:

var borrarPrimero = frutas.shift();
console.log(frutas);

// Otro metodo util es el .indexOf el cual no dice la posicion del elemento(index) mediante su nombre

var manzanaIndex = frutas.indexOf("Manzana");
console.log(manzanaIndex);
console.log(frutas[1]);