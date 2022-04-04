/*
let quote1 = document.getElementById('quote1');
let quote2 = document.getElementById('quote2');
let quote3 = document.getElementById('quote3');
let quote4 = document.getElementById('quote4');
let quote5 = document.getElementById('quote5');

let quoteArr = [quote1, quote2, quote3, quote4, quote5];
*/



function newStyle() {
  let newColor = '';
  let newFont = ''; 
  let x = Math.floor(Math.random()*7); 
  switch (x){
    case 0:
      newColor = 'red';
      newFont = 'Times New Roman'; 
      break;
    case 1: 
      newColor = 'blue';
      newFont = 'Florence, cursive'; 
      break;
    case 2:
      newColor = 'yellow';
      newFont = 'Verdana';
      break; 
    case 3:
      newColor= 'purple';
      newFont = 'Courier New';
      break
    case 4:
      newColor = 'cyan';
      newFont = 'Georgia'; 
      break;
    case 5:
        newColor = 'maroon';
        newFont = 'Palatino';
        break;
    case 6: 
        newColor = 'lime';
        newFont = 'Impact';
        break;
  }
  var elem = document.getElementById('thetitle');
  elem.style.color = newColor;
  elem.style.fontFamily = newFont; 
}

/////////////////////////break


function arrGen() {


let arr = ['"The cleaner and nicer the program, the faster it\'s going to run. And if it doesn\'t, it\'ll be easy to make it fast." - joshua Bloch', '"Computer programs are the most intricate, delicately balanced and finely interwoven of all the products of human industry to date. They are machines with far more moving parts than any engine: the parts don\'t wear out, but they interact and rub up against one another in ways the programmers themselves cannot predict." - James Gleick', '"Applications programming is a race between software engineers, who strive to produce idiot-proof programs, and the universe which strives to produce bigger idiots. So far the Universe is winning." - Rick Cook', '"The effective exploitation of his powers of abstraction must be regarded as one of the most vital activities of a competent programmer." - Edsger W. Dijkstra', '“If the rise of an all-powerful artificial intelligence is inevitable, well it stands to reason that when they take power, our digital overlords will punish those of us who did not help them get there. Ergo, I would like to be a helpful idiot. Like yourself.” - Bertram Gilfoyle', '"In the end, it all comes down to 0 and 1" - Vineet Goel', '"People who aren\'t steeped in software often have an unrealistically non-horrified view of software quality." - Matt Blaze', '"I have so much information stored up inside my brain that to add more I need to clean out my mind\'s cache once in awhile." - James Hauenstein', '"Being a young programmer today must be awful—you can choose 20 different programming languages, dozens of framework and operating systemsand you’re paralyzed by choice. There was no paralysis of choice then. You just start doing it because the decision as to which language and things is just made — there\'s no thinking about what you should do, you just go and do it." - Joe Armstrong'];

    
    let rando = Math.floor(Math.random() * arr.length)

    for (let i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) === rando){
            return arr[i]
          }
          let eleme = document.getElementById('the-quote');
          eleme = document.getElementById('the-quote').innerHTML = arr[i];
      }
   
}




//let arrQuotes = ['"The cleaner and nicer the program, the faster it\'s going to run. And if it doesn\'t, it\'ll be easy to make it fast." - joshua Bloch', '"Computer programs are the most intricate, delicately balanced and finely interwoven of all the products of human industry to date. They are machines with far more moving parts than any engine: the parts don\'t wear out, but they interact and rub up against one another in ways the programmers themselves cannot predict." - James Gleick', '"Applications programming is a race between software engineers, who strive to produce idiot-proof programs, and the universe which strives to produce bigger idiots. So far the Universe is winning." - Rick Cook', '"The effective exploitation of his powers of abstraction must be regarded as one of the most vital activities of a competent programmer." - Edsger W. Dijkstra', '“If the rise of an all-powerful artificial intelligence is inevitable, well it stands to reason that when they take power, our digital overlords will punish those of us who did not help them get there. Ergo, I would like to be a helpful idiot. Like yourself.” - Bertram Gilfoyle']

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

// end palindrome ababa

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


let leafImage1 = document.getElementById('leaf1');
let leafImage2 = document.getElementById('leaf2');
let leafImage3 = document.getElementById('leaf3');
let goblinPath = 'https://freesvg.org/img/goblin-chibi-1.png';
let fairyPath = 'https://freesvg.org/img/pink-fairy.png';
let gnomePath = 'https://freesvg.org/img/1494705645.png';
let ladyBugPath = 'https://freesvg.org/img/ladybug_white_eyes.png';
let names = ['Goblin', 'Fairy', 'Gnome', 'Ladybug'];
let numLeaves = 3;
let leaf1; 
let leaf2;
let leaf3;
let leafPath = 'https://freesvg.org/img/leaf_01.png';
const startButton = document.getElementById('start');
let currentlyPlaying = true;

const isGoblin = (leaf) => {
  if(leaf.src === goblinPath){
    return true
  }else{
    return false
  }
}

const isClicked = (leaf) => {
  if(leaf.src === leafPath){
    return false
  }else{ 
    return true
    }
}

const playLeaf = (leaf) => {
  numLeaves--;
  //nameIt();
  if(numLeaves === 0 && leaf3 != goblinPath){
    gameOver('win');
  }else if (isGoblin(leaf)){
    gameOver('lose');
  }
} 
/*
const randomLeafGenerator = () => {
  let rando = Math.floor(Math.random() * 4);
  if (rando === 0){
    leaf1 = goblinPath;
    leaf2 = fairyPath; 
    leaf3 = gnomePath;  
  }else if(rando === 1){
    leaf2 = goblinPath;
    leaf3 = ladyBugPath;
    leaf1 = fairyPath;
  }else if(rando === 2){
    leaf3 = goblinPath;
    leaf2 = ladyBugPath;
    leaf1 = gnomePath;
  } else if(rando === 3){
    leaf1 = ladyBugPath;
    leaf2 = gnomePath;
    leaf3 = fairyPath;
  } 
}
*/
const randomLeafGenerator = () => {
  let rando = Math.floor(Math.random() * 24);
  switch(rando){
    case 0:
      leaf1 = goblinPath
      leaf2 = fairyPath
      leaf3 = gnomePath
      break;
    case 1:
      leaf1 = goblinPath
      leaf2 = fairyPath
      leaf3 = ladyBugPath
      break;
    case 2:
      leaf1 = goblinPath
      leaf2 = gnomePath
      leaf3 = fairyPath
      break;
    case 3:
      leaf1 = goblinPath
      leaf2 = gnomePath
      leaf3 = ladyBugPath
      break;
    case 4:
      leaf1 = goblinPath
      leaf2 = ladyBugPath
      leaf3 = fairyPath
      break;
    case 5:
      leaf1 = goblinPath
      leaf2 = ladyBugPath
      leaf3 = gnomePath
      break;
    case 6:
      leaf1 = fairyPath
      leaf2 = goblinPath
      leaf3 = gnomePath
      break;
    case 7:
      leaf1 = fairyPath
      leaf2 = goblinPath
      leaf3 = ladyBugPath
      break;
    case 8:
      leaf1 = fairyPath
      leaf2 = gnomePath
      leaf3 = goblinPath
      break;
    case 9:
      leaf1 = fairyPath
      leaf2 = gnomePath
      leaf3 = ladyBugPath
      break;
    case 10:
      leaf1 = fairyPath
      leaf2 = ladyBugPath
      leaf3 = goblinPath
      break;
    case 11:
      leaf1 = fairyPath
      leaf2 = ladyBugPath
      leaf3 =  gnomePath
      break;
      case 12:
        leaf1 = gnomePath
        leaf2 = goblinPath
        leaf3 = fairyPath
        break;
      case 13:
        leaf1 = gnomePath
        leaf2 = goblinPath
        leaf3 = ladyBugPath
        break;
      case 14:
        leaf1 = gnomePath
        leaf2 = fairyPath
        leaf3 = goblinPath
        break;
      case 15:
        leaf1 = gnomePath
        leaf2 = fairyPath
        leaf3 = ladyBugPath
        break;
      case 16:
        leaf1 = gnomePath
        leaf2 = ladyBugPath
        leaf3 = goblinPath
        break;
      case 17:
        leaf1 = gnomePath
        leaf2 = ladyBugPath
        leaf3 = fairyPath
        break;
      case 18:
        leaf1 = ladyBugPath
        leaf2 = goblinPath
        leaf3 = fairyPath
        break;
      case 19:
        leaf1 = ladyBugPath
        leaf2 = goblinPath
        leaf3 = gnomePath
        break;
      case 20:
        leaf1 = ladyBugPath
        leaf2 = fairyPath
        leaf3 = goblinPath
        break;
      case 21:
        leaf1 = ladyBugPath
        leaf2 = fairyPath
        leaf3 = gnomePath
        break;
      case 22:
        leaf1 = ladyBugPath
        leaf2 = gnomePath
        leaf3 = goblinPath
        break;
      case 23:
        leaf1 = ladyBugPath
        leaf2 = gnomePath
        leaf3 = fairyPath
        break;
      default:
          console.log('Invalid item');
          break;
  }
}


function nameIt(leaf){
    if(leaf === goblinPath){
      document.getElementById('name-of').innerHTML = names[0]
      document.getElementById('name-of').style.color = 'red';
    }
    if(leaf === fairyPath){
      document.getElementById('name-of').innerHTML = names[1]
    }
    if(leaf === gnomePath){
      document.getElementById('name-of').innerHTML = names[2]
    }
    if(leaf === ladyBugPath){
      document.getElementById('name-of').innerHTML = names[3]
    }
  
}


leafImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(leafImage1)) {
  leafImage1.src = leaf1;
  playLeaf(leafImage1);
  nameIt(leaf1)
  }
}

leafImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(leafImage2)) {
  leafImage2.src = leaf2;
  playLeaf(leafImage2);
  nameIt(leaf2);
  }
}

leafImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(leafImage3)) {
  leafImage3.src = leaf3;
  playLeaf(leafImage3);
  nameIt(leaf3);
}
}

startButton.onclick = () => {
  if(!currentlyPlaying) {
  startRound();
  }
}

const startRound = () => {
  numLeaves = 3;
  document.getElementById('name-of').innerHTML = '';
  document.getElementById('name-of').style.color = 'black';
  leafImage1.src = leafPath;
  leafImage2.src = leafPath;
  leafImage3.src = leafPath;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomLeafGenerator();
}

const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }else{
  startButton.innerHTML = 'Game over! Play again?';
}
  currentlyPlaying = false;
}

startRound();





