const prompt = require('prompt-sync')();

let nome = prompt("nome do Jogador: ");
let pontuacao = Number(prompt("Pontuacao: "));
let pontuacaoMinima = 1000;

console.log("Analisando perfil...");

if(pontuacao >= pontuacaoMinima) {
    console.log("APROVADO! " + nome + " tem nível para a equipe principal.");
} else {
    let pontosfaltantes = pontuacaoMinima - pontuacao;
    console.log("REPROVADO! Faltam " + pontosfaltantes + " pontos para entrar no time.");
}