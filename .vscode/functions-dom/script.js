/*
function myFunction(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = num1 + num2;
}
*/

/*
function reverseString(){
    let str = document.getElementById("reverseTheName").value;
    let newString = "";
    
    for(let i=str.length-1; i>=0; i--){
        newString += str[i];
    }
    document.getElementById("showData").value = newString;
}
*/

function reverseString(){
    let inputWord = document.getElementById("input-word").value;
    
    let newVar = '';
    let arr = [];
    arr = inputWord.split('');
    arr.reverse();
    for (let i = 0; i < arr.length; i++){
        newVar += arr[i];
    }
    document.getElementById("result").innerHTML = newVar;
}

// end reverse string

function palindrome() {
    let inputPal = document.getElementById("input-pal").value;
    let str2 = inputPal.toLowerCase() 
    const regex = /[^A-Za-z0-9]/g;
    let newStr = str2.replace(regex, "")
  
    let strReversed = ''           
    for (let i = newStr.length - 1; i >=0; i--){
        strReversed += newStr[i]                                       
    }
    
    if (newStr === strReversed){
    return document.getElementById("result-pal").innerHTML = newStr + " " + strReversed + " " + 'TRUE';
  }else{
    return document.getElementById("result-pal").innerHTML = newStr + " " + strReversed + " " + 'FALSE';
  }
    
  }

// end palindrome

let count = 0;
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        value.textContent = count;
    })
})

  
//end counter


/*
  function rockPaperScissors(hand){
      let answer = '';
      let compMove = Math.random();
      if(compMove <= 0.33){
          compMove = 'rock';
      }else if (compMove <= 0.67){
          compMove = 'scissors';
      }else{ compMove = 'paper'}
  
      if(hand === compMove){
          answer = 'draw';
      }else if (hand === 'rock' && compMove === 'paper'){
          answer = 'paper. you lose';
      }else if (hand === 'rock' && compMove === 'scissors'){
        answer = 'scissors. you win';
    }else if (hand === 'paper' && compMove === 'rock'){
        answer = 'rock. you win';
    }else if (hand === 'paper' && compMove === 'scissors'){
        answer = 'scissors. you lose';
    }else if (hand === 'scissors' && compMove === 'rock'){
        answer = 'rock. you lose';
    }else if (hand === 'scissors' && compMove === 'paper'){
        answer = 'paper. you win';
    }
        return answer;
    }


  rockPaperScissors();
*/

    // end of rock paper scissors functions

var sound1 = new Audio();
sound1.src ="https://freeanimalsounds.org/wp-content/uploads/2017/07/Katze_miaut.mp3";

var sound2 = new Audio();
sound2.src ="https://freeanimalsounds.org/wp-content/uploads/2017/07/Bluthund_jault.mp3";

var sound3 = new Audio();
sound3.src ="https://freeanimalsounds.org/wp-content/uploads/2017/08/finch.mp3";

function stopSound1() {
    sound1.pause();
    sound1.currentTime = 0;
}

function stopSound2() {
    sound2.pause();
    sound2.currentTime = 0;
}

function stopSound3() {
    sound3.pause();
    sound3.currentTime = 0;
}

// end of audio section

