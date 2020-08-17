// Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. 

var miAuto = {
  marca: "Ferrari",
  modelo: "California T",
  annio: "2020",
  detalles: function(){
      console.log(`Auto ${this.marca} ${this.modelo} ${this.annio}`);
  }
}
console.log(miAuto.marca);
miAuto.detalles();