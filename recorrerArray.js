// Para recorrer un arreglo de objetos podemos usar los metodos:

// Filter, Map y Find
//.filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.
//.map : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

//Ejemplos:

var articulos = [
  { nombre: "Gorra", costo: "700" },
  { nombre: "Bicicleta", costo: "7000" },
  { nombre: "Pantalon", costo: "1000" },
  { nombre: "Computadora", costo: "12000" },
  { nombre: "Teclado Mecanico", costo: "1050" },
  { nombre: "Audiculares", costo: "800" },
  { nombre: "Cargador", costo: "250" },

];

var articulosFilterCosto = articulos.filter(function (articulo){
  return articulo.costo <= 1050;
});

var articulosFindPc = articulos.find(function (articulo){
  return articulo.nombre === "Computadora";
});

var articulosFilterNombres = articulos.map(function (articulo){
  return articulo.nombre
});

console.log(articulosFilterCosto);
console.log(articulosFindPc);
console.log(articulosFilterNombres);

articulos.forEach(function(articulo){   //El metodo forEach no genera un nuevo arreglo como los demas por lo cual se aplica al arreglo principal e imprimimos lo que queremos retornar sevirira para retornar busquedas ara ecoemmerces etc
  console.log(articulo.nombre);
});

// El metodo some(); nos sirve como un condicionador el cual nos regresa verdadero o falso segun la condicion de retorno,  ese metodo sí genera un nuevo arreglo
var articulosSome = articulos.some(function(articulo){
  return articulo.costo < 1000
});

console.log(articulosSome);

// NOTA : Por si a alguien le quedó alguna duda con respecto a la diferencia entre find y filter:

// El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

// El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.