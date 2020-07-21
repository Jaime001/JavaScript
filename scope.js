// Hay 2 tipos de scope, el scope global y el scope local. 
// El scope global es donde declaramos las variables, funciones, pruebas, etc. que puedes acceder desde cualquier lugar
// En el scope local es el pequeño universo o espacio que se genera dentro de alguna funcion el cual  no puedes acceder desde el scope global 

// Ejemplo de los 2 scopes;

var miNombre = "José Jaime"; // Scope Global pues esta variable esta definida afuera del todo, no esta dentro de alguna funcion o accion. 

function nombreCompleto() {
  var miApellido = "Ortiz Diaz"; // Scope Local pues esta definida dentro de mi funcion por lo cual solo mi funcion sabe que valor tiene. 
  console.log(miNombre + " " + miApellido);
}

nombreCompleto();