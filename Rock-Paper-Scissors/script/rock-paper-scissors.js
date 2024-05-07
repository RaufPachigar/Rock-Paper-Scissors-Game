let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  updateScore();
  /*const score={
        wins:0,
        losses:0,
        ties:0
        };*/
function playGame(playerMove){

 
    const computerMove= PickComputerMove();
    let result='';

        if(playerMove==='SCISSORS'){
                if(computerMove ==='ROCK'){
                    result='YOU LOSE';
                } else if(computerMove ==='PAPER'){
                    result='YOU WIN';
                } else if(computerMove ==='SCISSORS'){
                    result='TIE';
                }
            } else if(playerMove ==='ROCK'){
                if(computerMove ==='ROCK'){
                    result='TIE';
                } else if(computerMove ==='PAPER'){
                    result='YOU LOSE';
                } else if(computerMove ==='SCISSORS'){
                    result='YOU WIN';
                    }
            } else if (playerMove === 'PAPER') {
               if (computerMove === 'ROCK') {
                   result = 'YOU WIN';
                } else if (computerMove === 'PAPER') {
                   result = 'TIE';
                } else if (computerMove === 'SCISSORS') {
                   result = 'YOU LOSE';
                }
            }

        if( result === 'YOU WIN'){
               score.wins += 1;
            } else if( result === 'YOU LOSE'){
                score.losses += 1;
            } else if( result === 'TIE' ){
                score.ties += 1;
            }

        localStorage.setItem('score',JSON.stringify(score));

         updateScore();
         document.querySelector('.js-result')
         .innerHTML=result;
         
         document.querySelector('.js-moves')
         .innerHTML=`You
         <img src="images/${playerMove}-emoji.png" class="move-icon">
         <img src="images/${computerMove}-emoji.png" class="move-icon">
         Computer`;
         
            
}
function updateScore(){
document.querySelector('.js-score')
        .innerHTML=`wins:${score.wins} losses:${score.losses} ties:${score.ties}`;
}

function PickComputerMove(){
    let computerMove='';
    const randomNumber= Math.random();

    if(randomNumber >= 0 && randomNumber< 1/3){
            computerMove='ROCK';
        }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove='PAPER';
        }
    else if(randomNumber >= 2/3 && randomNumber < 1){
            computerMove='SCISSORS';
        }
        return computerMove;
}
