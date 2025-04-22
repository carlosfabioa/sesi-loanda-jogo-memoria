// ========== CONFIGURAÇÃO DO JOGO ========== //
// Lista de imagens que serão usadas no jogo
const configCartas = [
    { nome: 'Vitoria', imagem: 'imagens/vitoria.png' },
    { nome: 'Regina', imagem: 'imagens/regina.png' },
    { nome: 'Jaqueline', imagem: 'imagens/jaqueline.png' },
    { nome: 'Miguel', imagem: 'imagens/miguel.png' },
    { nome: 'Vitoria_', imagem: 'imagens/vitoria_.png' },
    { nome: 'Marina', imagem: 'imagens/marina.png' },
    { nome: 'Kauany', imagem: 'imagens/kauany.png' },
    { nome: 'Luiz', imagem: 'imagens/luiz.png' }
];

// ========== SELEÇÃO DE ELEMENTOS DO DOM ========== //
const tabuleiro = document.getElementById('tabuleiro');
const elementoPares = document.getElementById('pares');
const elementoTempo = document.getElementById('tempo');
const elementoJogadas = document.getElementById('jogadas');
const botaoReiniciar = document.getElementById('reiniciar');

// ========== VARIÁVEIS DO JOGO ========== //
let cartas = []; // Array que armazena todas as cartas do jogo
let cartasViradas = []; // Cartas que estão atualmente viradas
let paresCombinados = 0; // Quantidade de pares encontrados
let totalJogadas = 0; // Número de jogadas realizadas
let tempo = 0; // Tempo decorrido em segundos
let temporizador = null; // Referência do temporizador
let jogoIniciado = false; // Indica se o jogo começou

// ========== FUNÇÕES PRINCIPAIS ========== //

/**
 * Inicializa o jogo, configurando todas as cartas e variáveis
 */
function iniciarJogo() {
    // Reseta todas as variáveis do jogo
    cartas = [];
    cartasViradas = [];
    paresCombinados = 0;
    totalJogadas = 0;
    tempo = 0;
    jogoIniciado = false;
    
    // Atualiza a interface com os valores iniciais
    elementoPares.textContent = paresCombinados;
    elementoJogadas.textContent = totalJogadas;
    elementoTempo.textContent = tempo;
    
    // Para o temporizador se estiver rodando
    if (temporizador) {
        clearInterval(temporizador);
        temporizador = null;
    }
    
    // Limpa o tabuleiro removendo todas as cartas
    tabuleiro.innerHTML = '';
    
    // Cria os pares de cartas (duplica o array de configurações)
    const paresCartas = [...configCartas, ...configCartas];
    
    // Embaralha as cartas
    embaralharArray(paresCartas);
    
    // Cria e adiciona as cartas ao tabuleiro
    paresCartas.forEach((cartaConfig, indice) => {
        // Cria o elemento HTML da carta
        const elementoCarta = document.createElement('div');
        elementoCarta.className = 'carta';
        elementoCarta.dataset.indice = indice;
        
        // Cria a imagem que será mostrada quando a carta for virada
        const imgElemento = document.createElement('img');
        imgElemento.src = cartaConfig.imagem;
        imgElemento.alt = cartaConfig.nome;
        
        // Adiciona a imagem à carta
        elementoCarta.appendChild(imgElemento);
        
        // Adiciona o evento de clique para virar a carta
        elementoCarta.addEventListener('click', virarCarta);
        
        // Adiciona a carta ao tabuleiro
        tabuleiro.appendChild(elementoCarta);
        
        // Armazena a carta no array de cartas
        cartas.push({
            elemento: elementoCarta,
            imagem: cartaConfig.imagem,
            nome: cartaConfig.nome,
            virada: false,
            combinada: false
        });
    });
}

/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 * @param {Array} array - O array a ser embaralhado
 */
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatório
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

/**
 * Função chamada quando uma carta é clicada
 */
function virarCarta() {
    
}

/**
 * Inicia o temporizador do jogo
 */
function iniciarTemporizador() {
    temporizador = setInterval(() => {
        tempo++; // Incrementa o tempo
        elementoTempo.textContent = tempo; // Atualiza a interface
    }, 1000); // Executa a cada 1 segundo
}

/**
 * Finaliza o jogo quando todos os pares são encontrados
 */
function finalizarJogo() {
    clearInterval(temporizador); // Para o temporizador
    setTimeout(() => {
        // Mostra mensagem de parabéns com as estatísticas
        alert(`Parabéns! Você completou o jogo em ${tempo} segundos e ${totalJogadas} jogadas!`);
    }, 500); // Pequeno atraso para melhor experiência
}

// ========== EVENTOS ========== //

// Adiciona evento de clique ao botão de reiniciar
botaoReiniciar.addEventListener('click', iniciarJogo);

// Inicia o jogo quando a página é carregada
window.addEventListener('DOMContentLoaded', iniciarJogo);