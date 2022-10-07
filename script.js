let computerChoice = getComputerChoice();
        console.log(computerChoice)
        
        
    function getComputerChoice(){
        const rand = Math.floor(Math.random() * 3);
        if(rand === 0){
            return "Rock";
        }else if(rand === 1){
            return "Paper";
        }else if(rand === 2){
            return "Scisors";
        }
    }