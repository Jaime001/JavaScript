var papel = "papel";
var piedra = "piedra";
var tijera = "tijera";

function juegoPiedraPapelTijera(humano, maquina) {
  if (humano != maquina) {
    if (humano === piedra && maquina === papel) {
      console.log("perdiste");
    } else if (humano === piedra && maquina  === tijera) {
      console.log("Ganaste");
    } else if (humano === papel && maquina === piedra) {
      console.log("Ganaste");
    } else if (humano === papel && maquina === tijera) {
      console.log("Perdiste");
    } else if (humano === tijera && maquina === piedra) { 
      console.log("Perdiste");
    } else if (humano === tijera && maquina  === papel) {
      console.log("Ganaste")
    }
  } else {
    console.log("Es un empate")
  }
}


// piedra vs papel = perdiste
// piedra vs tijera = ganaste

// papel vs piedra = ganaste
// papel vs tijera = perdiste

// tijera vs piedra = perdiste
// tijera vs papel = ganaste
