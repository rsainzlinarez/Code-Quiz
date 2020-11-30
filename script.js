var questions = [
    {
question1: "Commonuly used data types DO NOT include:",
choices: ['strings', 'booleans', 'alerts', 'numbers'],
answer: 'alerts',
    },
       {
question2: "The condition in an if/ese is enclosed within__________.",
choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
answer: 'alerts',
    },
       {
question3: "Arrays in JavaScript can be used to store __________.",
choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
answer: 'all of the above',
    },
       {
question4: "String values must be recorded within __________when being assigned to variables.",
choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
answer: 'quotes',
    },
       {
question5: "A very useful tool during development and debugging for printing content to the debugger is:",
choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
answer: 'console.log',
    },
     
];

 
var i = 0;
var questionsSection = document.querySelector('startWindow');
var timerEl = document.querySelector('#timer');
var startButtonEl = document.querySelector('#startButton');
var scoreRecordedEl = document.querySelector('#scoresLink');


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

    

