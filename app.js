// Rock Paper Seasor!


// Variables
let Items = ["ROCK", "PAPEL", "TIJERA"];

let numeroRandom = Math.floor(Math.random()* 3);

let computerScore = 0;
let humanScore = 0

// Funcion de computadora
let seleccionDeComputadora = function(){
    return Items[numeroRandom];
}
// Funcion Humana
let SeleccionHumana = function(seleccion){
    return  seleccion = prompt("Select from this: Roca, Papel o Tijera").toUpperCase();
}


// Game Logic

let playRound = function(humanChoice, ComputerChoice){
humanChoice = SeleccionHumana;
ComputerChoice = seleccionDeComputadora;

if(humanChoice == "ROCK" && ComputerChoice == "TIJERA" || humanChoice == "TIJERA" && ComputerChoice == "PAPEL" || humanChoice == "PAPEL" && ComputerChoice == "ROCK"
){
    console.log("El Humano ha Ganado")
}else{
    console.log("La Computadora ha ganado")
}
}

console.log(playRound())