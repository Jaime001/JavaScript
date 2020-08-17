// Un ciclo o loop nos ayuda a recorrer arrelgos para saber los elementos y su posicion
var estudiantes = ["Jaime", "Jose", "Laura", "Giselle", "Oscar", "Alexander", "Jhony"];

function saludarEstudiantes (estudiante){
  console.log(`Hola ${estudiante}`);
}

// for(var i = 0; i < estudiantes.length; i++){
//   saludarEstudiantes(estudiantes[i]);
// }

// for (var estudiante of estudiantes){
//   saludarEstudiantes(estudiante);
// }

while (estudiantes.length > 0){
  console.log(estudiantes);
  var i = estudiantes.shift(); //el metodo .shift elimina Y retorna el primer valor del arreglo por lo cual podemos acceder al valor eliminado e imprimierlo
  saludarEstudiantes(i);
}