let numeros = [1,2,3,4,5];
let nombres = ["Jaime", "Giselle", "Daniela", "Yami", "Alexander", "Jorge"];

// Con el metodo .shift() podemos eliminar el primer elemento de un array(el que esta en la poscione 0 del index).

let eliminarPrimero = numeros.shift();
console.log(numeros);

let eliminarPrimerNombre = nombres.shift();
console.log(nombres);

//El metodo .pop() nos ayuda a eliminar el ultimo elemnto del array

let eliminarUltimo = numeros.pop();
console.log(numeros);


let eliminarUltimoNombre = nombres.pop();
console.log(nombres);

