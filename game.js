// INICIALIZANDO VARIÁVEIS
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scissors = document.getElementById("scissors-button");

const resultText = document.getElementById("result-text");

// OBTENÇÃO DO MOVIMENTO ESCOLHIDO PELO USUÁRIO
function userMove() {
    rock.addEventListener('click', function() {
        game("Pedra");
    });
    
    paper.addEventListener('click', function() {
        game("Papel");
    });
    
    scissors.addEventListener('click', function() {
        game("Tesoura");
    });
}

userMove();

// OBTENÇÃO DO MOVIMENTO DO COMPUTADOR
function getComputerChoice() {
    const choices = ['Pedra', 'Papel', 'Tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

// FUNÇÃO PRINCIPAL DO JOGO (CONDIÇÕES DE VITÓRIA, DERROTA E EMPATE)
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "Pedra" + "Tesoura":
        case "Papel" + "Pedra":
        case "Tesoura" + "Papel":
            win(userChoice, computerChoice);
            break;
        case "Pedra" + "Papel":
        case "Papel" + "Tesoura":
        case "Tesoura" + "Pedra":
            lose(userChoice, computerChoice);
            break;
        case "Pedra" + "Pedra":
        case "Papel" + "Papel":
        case "Tesoura" + "Tesoura":
            draw(userChoice, computerChoice);
            break;
    }
}

// IMPRESSÃO DO RESULTADO
function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    resultText.innerHTML = `${userChoice} ganha de ${computerChoice}. Você venceu!`;
    resultText.style.color = "var(--user-tag-bg)";
}

function lose (userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    resultText.innerHTML = `${userChoice} perde para ${computerChoice}. Você perdeu...`;
    resultText.style.color = "var(--computer-tag-bg)";
}

function draw (userChoice, computerChoice) {
    resultText.innerHTML = `${userChoice} é igual a ${computerChoice}. Houve um empate.`;
    resultText.style.color = "var(--draw-result-color)";
}

// FUNÇÃO DE RESET DO PLACAR
function resetScore() {
    userScore = 0;
    userScore_span.innerHTML = userScore;

    computerScore = 0;
    computerScore_span.innerHTML = computerScore;

    resultText.innerHTML = "Escolha qual será o seu movimento:";
    resultText.style.color = "var(--game-text-color)";
}

// RESET FEITO PELO USUÁRIO
function resetButton() {
    let answer = window.confirm('Deseja zerar o placar?\nCaso sim, clique em "OK". Caso não, clique em "Cancelar".');

    if(answer == true) {
        resetScore();
    } else {
        return;
    }
}