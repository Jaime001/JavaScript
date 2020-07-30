var papel = "papel";
var piedra = "piedra";
var tijera = "tijera";

function juego (humano, maquina) {
  switch (true) {
    case (humano === piedra && maquina === papel || humano === papel && maquina === tijera || humano === tijera && maquina === piedra): 
      console.log("Perdiste");
      break; 
    case (humano === piedra && maquina  === tijera || humano === papel && maquina === piedra || humano === tijera && maquina  === papel):
      console.log("Ganaste");
      break; 
    default:
      console.log("Es un empate");
      break;
  }
}
juego(papel, piedra);