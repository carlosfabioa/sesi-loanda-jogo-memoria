//SELEÇÃO DOS ELEMENTOS DO DOM 
const tabuleiro = document.getElementById('tabuleiro');
const elementosPares = document.getElementById('pares');
const elementoTempo = document.getElementById('tempo');
const elementoJogadas = document.getElementById('jogadas');
const botaoReinicia = document.getElementById('reiniciar');

//VARIAVEIS DO JOGO 

let paresCombinados = 0;
let tempo = 0;
let temporizador = null;
let jogoIniciado = false;

function iniciarJogo(){
    tempo = 0;
    elementoTempo.textContent = tempo;

    if(temporizador){
        clearInterval(temporizador);
        temporizador = null;
    }

    iniciarTemporizador();
}

//inicia o temporizador do jogo
function iniciarTemporizador(){
    temporizador = setInterval(() =>{
        tempo++;
        elementoTempo.textContent = tempo;
    }, 1000);
}

//adicionar evento de clique no botão de reiniciar
botaoReinicia.addEventListener('click', iniciarJogo);

window.addEventListener("DOMContentLoaded", iniciarJogo);