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
    cartas = []; 

    tempo = 0;
    elementoTempo.textContent = tempo;

    if(temporizador){
        clearInterval(temporizador);
        temporizador = null;
    }

    const paresCartas = [...configCartas, ...configCartas];

    paresCartas.array.forEach((cartaconfig, indice) => {
        const  elementoCarta = document.createElement('div');
        elementoCarta.className = 'carta';
        elementoCarta.dataset.indice = indice;

        //adicionar a carta ao tabuleiro
        tabuleiro.appendChild(elementoCarta);

        //Armazenar a carta no array
        cartas.push({
            elemento: elementoCarta,
            imagem: cartaconfig.imagem,
            nome: cartaconfig.nome,
            virada: false,
            combinada: false
        });
    });


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