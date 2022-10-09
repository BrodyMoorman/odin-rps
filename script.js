    let playerScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) =>{button.addEventListener('click', (e) => {
        let userChoice = button.innerHTML.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
        updateScore();
        if(playerScore === 5){
            alert("You Win")
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }
        if(computerScore === 5){
            alert("Computer Wins")
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }

    })} )
   

        
    function getComputerChoice(){
        const rand = Math.floor(Math.random() * 3);
        if(rand === 0){
            return "rock";
        }else if(rand === 1){
            return "paper";
        }else if(rand === 2){
            return "scissors";
        }
    }
    function getUserChoice(){
        let input = prompt("Enter Choice: ")
        let temp = input.toLowerCase();
        return temp;
    }
    function playRound(playerChoice, computerChoice){
        const output = document.getElementById("round-result")
        if(playerChoice === computerChoice ){
            output.innerHTML = "Its a tie";
        }
        if((playerChoice==="rock" && computerChoice === "scissors")||(playerChoice==="paper" && computerChoice === "rock")||(playerChoice==="scissors" && computerChoice === "paper")){
            output.innerHTML = "You Win!";
            playerScore++
        }
        if((computerChoice==="rock" && playerChoice === "scissors")||(computerChoice==="paper" && playerChoice === "rock")||(computerChoice==="scissors" && playerChoice === "paper")){
            output.innerHTML = "You lose!"
            computerScore++
        }
    }

    function updateScore(){
        const playerScoreBox = document.getElementById("player-score")
        const computerScoreBox = document.getElementById("computer-score")
        playerScoreBox.innerHTML = playerScore
        computerScoreBox.innerHTML = computerScore

    }