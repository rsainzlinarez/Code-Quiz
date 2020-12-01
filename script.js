var questionsList = [
    {
question: "Commonuly used data types DO NOT include:",
choices: ['strings', 'booleans', 'alerts', 'numbers'],
answer: 'alerts',
    },
       {
question: "The condition in an if/ese is enclosed within__________.",
choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
answer: 'alerts',
    },
       {
question: "Arrays in JavaScript can be used to store __________.",
choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
answer: 'all of the above',
    },
       {
question: "String values must be recorded within __________when being assigned to variables.",
choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
answer: 'quotes',
    },
       {
question: "A very useful tool during development and debugging for printing content to the debugger is:",
choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
answer: 'console.log',
    },
     
];

 //List of all variables required from index.html file
var i = 0;
var questionsSection = document.querySelector('#startWindow');
var timerEl = document.querySelector('#timer');
var startButtonEl = document.querySelector('#startButton');
var scoreRecordedEl = document.querySelector('#scoresLink');
var titleEl = document.querySelector('#title');
var instructionsEl = document.querySelector('#instructions');
var answerButtonA = document.querySelector('.choiceA');
var answerButtonB = document.querySelector('.choiceB');
var answerButtonC = document.querySelector('.choiceC');
var answerButtonD = document.querySelector('.choiceD');



// List of variables needed for the questions section
// var questionsSectionEL = document.querySelector('.questionsSectionEl');
// var answerA = querySelector('.a');
// var answerB = querySelector('.b');
// var answerC = querySelector('.c');
// var answerD = querySelector('.d');

// Counter starts when start button is clicked
startButtonEl.addEventListener('click', function () {
    var timeLeft = 2;
    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
    
        if (timeLeft === -1) {
            clearInterval(timeInterval);
            
        }
    
      }, 1000);
    

    });
// When start button is clicked, start button disappear and choice answers appear
    startButtonEl.addEventListener('click', function(){
       
        startButtonEl.style.display = 'none';

        answerButtonA.style.display = 'block'; 
        answerButtonB.style.display = 'block'; 
        answerButtonC.style.display = 'block'; 
        answerButtonD.style.display = 'block'; 


});

// First questions appears when counter is clicked
    startButtonEl.addEventListener('click', function(){
       
            titleEl.innerHTML= (questionsList[0].question);
            
            answerButtonA.innerHTML= (questionsList[0].choices[0]);
            answerButtonB.innerHTML= (questionsList[0].choices[1]);
            answerButtonC.innerHTML= (questionsList[0].choices[1]);
            answerButtonD.innerHTML= (questionsList[0].choices[1]);
   
    });
    

