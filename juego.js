var papel = "papel";
var piedra = "piedra";
var tijera = "tijera";

function juegoPiedraPapelTijera(humano, maquina) {
  if (humano != maquina) {
    if (humano === piedra && maquina === papel || humano === papel && maquina === tijera || humano === tijera && maquina === piedra) {
      console.log("perdiste");
    } else if (humano === piedra && maquina  === tijera || humano === papel && maquina === piedra || humano === tijera && maquina  === papel) {
      console.log("Ganaste");
    } 
  } else {
    console.log("Es un empate")
  }
};

juegoPiedraPapelTijera(tijera, juegoPiedraPapelTijera);


// piedra vs papel = perdiste
// piedra vs tijera = ganaste

// papel vs piedra = ganaste
// papel vs tijera = perdiste

// tijera vs piedra = perdiste
// tijera vs papel = ganaste
