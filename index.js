
const computerNumber = init();
let attemptsNumber = 0;
let guesses = [];

function init(){
    //Gera o numero que terá de ser adivinhado
    return Math.floor(Math.random() * 100 + 1);
}

function newGame(){
    window.location.reload();
}

//Lógica do jogo
function compareNumbers(){    
    //Maximo 10 tentativas
    if(attemptsNumber < 10){
        const guessNumber = Number(document.getElementById('inputBox').value);
        if(guessNumber >= 0 && guessNumber <= 100){
        //  Array de guesses
        guesses.push(' ' + guessNumber);

        if(computerNumber === guessNumber){
            document.getElementById('textOutput').innerHTML = 'Thats Right! GG';
            attemptsNumber++;
            document.getElementById('attempts').innerHTML = attemptsNumber;
            document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly');
            
        }
        else if(guessNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Too Low!';
            document.getElementById('inputBox').value = '';
            document.getElementById('guesses').innerHTML = guesses;
            attemptsNumber++;
            document.getElementById('attempts').innerHTML = attemptsNumber;
        }
        else{
            document.getElementById('textOutput').innerHTML = 'Too High!';
            document.getElementById('inputBox').value = '';
            document.getElementById('guesses').innerHTML = guesses;
            attemptsNumber++;
            document.getElementById('attempts').innerHTML = attemptsNumber;
        }  
        }      
    else{
            document.getElementById('textOutput').innerHTML = 'The number MUST be between 0 and 100!';
    }  
    }
    else{
        document.getElementById('textOutput').innerHTML = 'Try Again! Computer Number was ' + computerNumber ;
        document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly');
    }
}