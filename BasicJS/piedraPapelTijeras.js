function piedraPapelTijeraWithIf(player1, player2){
    if(player1 == player2) {
	console.log("Empate");
    }else if(player1=="piedra" && player2=="tijera"){
	console.log("Player 1 Wins");
    }else if(player1=="piedra" && player2=="papel"){
	console.log("Player 2 Wins");
    }else if(player1=="papel" && player2=="piedra"){
	console.log("Player 1 Wins");
    }else if(player1=="papel" && player2=="tijera"){
	console.log("Player 2 Wins");
    }else if(player1=="tijera" && player2=="papel"){
	console.log("Player 1 Wins");
    }else if(player1=="tijera" && player2=="piedra"){
	console.log("Player 2 Wins");
    }else{
	console.log("Algun jugador no escogio bien piedra, papel o tijera");
    }
}

function piedraPapelTijeraWithSwitch(player1, player2){
    switch(player1){
	case "piedra":
	    if(player2=="tijera"){
		console.log("Player 1 Wins");
	    }else if(player2=="papel"){
		console.log("Player 2 Wins");
	    }else{
		console.log("Empate");
	    }
	    break;
	case "papel":
	    if(player2=="piedra"){
		console.log("Player 1 Wins");
	    }else if(player2=="tijera"){
		console.log("Player 2 Wins");
	    }else{
		console.log("Empate");
	    }
	    break;
	case "tijera":
	    if(player2=="papel"){
		console.log("Player 1 Wins");
	    }else if(player2=="piedra"){
		console.log("Player 2 Wins");
	    }else{
		console.log("Empate");
	    }
	    break;
	default:
	    console.log("Algun jugador no escogio bien piedra, papel o tijera");
    }
}

piedraPapelTijeraWithIf("piedra", "papel");
piedraPapelTijeraWithIf("papel", "piedra");
piedraPapelTijeraWithIf("piedra", "piedra");
console.log("**********************")
piedraPapelTijeraWithSwitch("tijera", "papel");
piedraPapelTijeraWithSwitch("papel", "tijera");
piedraPapelTijeraWithSwitch("tijera", "tijera");
