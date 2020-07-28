// Las validaciones nos sirven para poder condicionar bloques de codigo 

if (true) {
  console.log("Es verdadero");
}

if (true) {
  console.log("Es verdadero");
} else {
  console.log("Es falso");
}

var edad = 18;

if (edad === 18) {
  console.log("Puedes votar");
} else if (edad > 18) {
  console.log("Puedes votar y no es tu primera vez");
} else {
  console.log("Lo siento no puedes votar :c"); 
}

// Operador ternario

condicion ? true : false; 

// Ejemplo operador ternario 
var tipo = 1; 
var galletas = tipo === 1 ? "Son de chispas de chocolate" : "Son normales"; 
