const scorePlayer = document.getElementById("playerScore"); // Variável para armazenar a pontuação do jogador.
const scoreComputer = document.getElementById("machineScore"); // Variável para armazenar a pontuação do computador.

let scorePlayerNumber = 0; // Variável para contar a pontuação do jogador.
let scoreComputerNumber = 0; // Variável para contar a pontuação do computador.

let playHuman = (HumanChoice) => { // Função para registrar a escolha do jogador.'
    playComputer();
    console.log(HumanChoice);
    console.log(playComputer());
    return result(HumanChoice, playComputer());
}

let playComputer = () => { // Função para gerar a escolha do computador aleatoriamente.
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let result = (HumanChoice, ComputerChoice) => { // Função para determinar o resultado do jogo.
    if (HumanChoice === ComputerChoice) {
        alert("Empate!");
        return;
    } else if ((HumanChoice === 'rock' && ComputerChoice === 'scissors') ||
        (HumanChoice === 'paper' && ComputerChoice === 'rock') ||
        (HumanChoice === 'scissors' && ComputerChoice === 'paper')) {
            alert("Jogador vence!");
            scorePlayerNumber += 1;
            scorePlayer.innerHTML = scorePlayerNumber;
        return;
    } else {
        alert("Computador vence!");
        scoreComputerNumber += 1;
        scoreComputer.innerHTML = scoreComputerNumber;
        return;
    }
}