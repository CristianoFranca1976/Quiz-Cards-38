const perguntas = [
    {
        pergunta: "Quanto é 12 + 3 ?",
        opcoesResposta: ["10", "15", "19"],
        respostaCorreta: 1
    },
    {
        pergunta: "Quanto é 8 + 9 ?",
        opcoesResposta: ["15", "16", "17"],
        respostaCorreta: 2
    },
    {
        pergunta: "Quanto é 5 + 7 ?",
        opcoesResposta: ["10", "12", "11"],
        respostaCorreta: 1
    },
    {
        pergunta: "Quanto é 4 x 4 ?",
        opcoesResposta: ["16", "18", "17"],
        respostaCorreta: 0
    },
    {
        pergunta: "Quanto é 10 + 6 ?",
        opcoesResposta: ["14", "15", "16"],
        respostaCorreta: 2
    }
];

let pontuacao = 0;
let perguntaAtual = 1;
const totalPerguntas = perguntas.length;

function atualizarPergunta() {
    const perguntaAtualObj = perguntas[perguntaAtual - 1];

    document.getElementById('Text').innerHTML = `<h1>${perguntaAtualObj.pergunta}</h1>`;
    document.getElementById('Card1').innerHTML = `<label><input type="radio" name="resposta" value="0">${perguntaAtualObj.opcoesResposta[0]}</label>`;
    document.getElementById('Card2').innerHTML = `<label><input type="radio" name="resposta" value="1">${perguntaAtualObj.opcoesResposta[1]}</label>`;
    document.getElementById('Card3').innerHTML = `<label><input type="radio" name="resposta" value="2">${perguntaAtualObj.opcoesResposta[2]}</label>`;
}

function responder() {
    const radioButtons = document.querySelectorAll('input[name="resposta"]:checked');

    if (radioButtons.length === 0) {
        alert('Selecione uma opção antes de avançar.');
        return;
    }

    const respostaSelecionada = parseInt(radioButtons[0].value);
    const perguntaAtualObj = perguntas[perguntaAtual - 1];

    if (respostaSelecionada === perguntaAtualObj.respostaCorreta) {
        pontuacao++;
        document.getElementById('Acertos').innerHTML = `<p>${pontuacao}</p>`;
    }

    proximaPergunta();

    radioButtons.forEach(radioButton => {
        radioButton.checked = false;
    });
}

function proximaPergunta() {
    perguntaAtual++;
    document.getElementById('questoesRestantes').innerHTML = `<p>${perguntaAtual - 1}</p>`;
    setTimeout(() => { 
    if (perguntaAtual > totalPerguntas) {
        alert('Quiz finalizado! Sua pontuação é: ' + pontuacao);
        reiniciarQuiz();
    } else {
        atualizarPergunta();
    }
}, 1000);}

function reiniciarQuiz() {
    pontuacao = 0;
    perguntaAtual = 1;
    document.getElementById('Acertos').innerHTML = '<p>0</p>';
    document.getElementById('questoesRestantes').innerHTML = '<p>0</p>';
    atualizarPergunta();
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarPergunta();
});

const btn = document.getElementById("card1");


