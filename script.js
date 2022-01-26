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





