// Una funcion constructora nos ayuda a contruir objetos desde un template(objeto)

function auto(marca, modelo, auto) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = auto;
}

var autos = [];
for(let i = 0; i < 5; i++){
  var marca = prompt("Ingresa la marca del auto: ");
  var modelo = prompt("Ingresa el modelo del auto: ");
  var annio = prompt("Ingresa el annio del auto: ");
  autos.push(new auto (marca, modelo, annio));
}

for(let i = 0; i < autos.length; i++){
  console.log(autos[i]);
}