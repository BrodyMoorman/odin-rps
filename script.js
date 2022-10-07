
    game();

        
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
        if(playerChoice === computerChoice ){
            console.log("Its a tie")
        }
        if((playerChoice==="rock" && computerChoice === "scissors")||(playerChoice==="paper" && computerChoice === "rock")||(playerChoice==="scissors" && computerChoice === "paper")){
            console.log("You Win!")
        }
        if((computerChoice==="rock" && playerChoice === "scissors")||(computerChoice==="paper" && playerChoice === "rock")||(computerChoice==="scissors" && playerChoice === "paper")){
            console.log("You lose!")
        }
    }
    function game(){
        let playerScore = 0;
        let compterScore = 0;
        for (let i = 0; i < 5; i++){
            let computerChoice = getComputerChoice();
            let userChoice = getUserChoice();
    
            playRound(userChoice, computerChoice);
        }
    }