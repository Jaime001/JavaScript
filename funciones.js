// Las funciones son las que lleva a cabo el navegador y existen 2 tipos de funciones en JS

// 1.- Las declarativas, ejemplo:

function miFuncion(a,b) {
  return a + b;
}

miFuncion(10,5); //mandamos a llamar a la funcion y le adjuntamos un parametro

// 2.- Las de expresión, son las que guardamos en una varibles y al igual que las declarativas pueden devolver algun dato o valor

var miFuncion = function(nombre) {
  console.log(`Hola ${nombre}`);    //Recurda que para concatenar una varible al momento de imprimir se deben de usar estas comillas ``
}

miFuncion("Jaime");