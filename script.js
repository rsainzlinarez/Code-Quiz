var questionsList = [
    {
title: "Commonuly used data types DO NOT include:",
choices: ['strings', 'booleans', 'alerts', 'numbers'],
answer: 'alerts',
    },
       {
title: "The condition in an if/ese is enclosed within__________.",
choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
answer: 'curly brackets',
    },
       {
title: "Arrays in JavaScript can be used to store __________.",
choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
answer: 'all of the above',
    },
       {
title: "String values must be recorded within __________when being assigned to variables.",
choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
answer: 'quotes',
    },
       {
title: "A very useful tool during development and debugging for printing content to the debugger is:",
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
var answerButtonA= document.querySelector(".choiceA");
var answerButtonB = document.querySelector('.choiceB');
var answerButtonC = document.querySelector('.choiceC');
var answerButtonD = document.querySelector('.choiceD');


var timer = 60;
var score = 0;
var currentQuestion = 0;

// Counter starts when start button is clicked
startButtonEl.addEventListener('click', function () {
    
    var timeInterval = setInterval(function() {
        timerEl.textContent = timer + " seconds remaining";
        timer--;
    
        if (timer === -1) {
            clearInterval(timeInterval);
            
        }
    
      }, 1000);
    nextQuestion();

    });



      startButtonEl.addEventListener('click', function(){
        // Startbutton disappears
        startButtonEl.style.display = 'none';

        // Instructions disappear
        instructionsEl.style.display = 'none';

        // Buttos that contain the answer choices appear
        answerButtonA.style.display = 'block'; 
        answerButtonB.style.display = 'block'; 
        answerButtonC.style.display = 'block'; 
        answerButtonD.style.display = 'block'; 

        ;


     
});
// First Questions appears
startButtonEl.addEventListener('click', function(){
    titleEl.innerHTML= (questionsList[0].title);

    answerButtonA.innerHTML= (questionsList[0].choices[0]);
    answerButtonB.innerHTML= (questionsList[0].choices[1]);
    answerButtonC.innerHTML= (questionsList[0].choices[2]);
    answerButtonD.innerHTML= (questionsList[0].choices[3]);

   
   
});
// Second question appears
answerButtonC.addEventListener('click', function(){
    titleEl.innerHTML= (questionsList[1].title);

    answerButtonA.innerHTML = (questionsList[1].choices[0]);
    answerButtonB.innerHTML = (questionsList[1].choices[1]);
    answerButtonC.innerHTML = (questionsList[1].choices[2]);
    answerButtonD.innerHTML = (questionsList[1].choices[3]);

   
   
});
answerButtonD.addEventListener('click', function(){
    titleEl.innerHTML= (questionsList[2].title);

    answerButtonA.innerHTML = (questionsList[2].choices[0]);
    answerButtonB.innerHTML = (questionsList[2].choices[1]);
    answerButtonC.innerHTML = (questionsList[2].choices[2]);
    answerButtonD.innerHTML = (questionsList[2].choices[3]);

   
   
});

answerButtonA.addEventListener('click', function(){
    titleEl.innerHTML= (questionsList[3].title);

    answerButtonA.innerHTML = (questionsList[3].choices[0]);
    answerButtonB.innerHTML = (questionsList[3].choices[1]);
    answerButtonC.innerHTML = (questionsList[3].choices[2]);
    answerButtonD.innerHTML = (questionsList[3].choices[3]);

   
   
});
answerButtonB.addEventListener('click', function(){
    titleEl.innerHTML= (questionsList[4].title);

    answerButtonA.innerHTML = (questionsList[4].choices[0]);
    answerButtonB.innerHTML = (questionsList[4].choices[1]);
    answerButtonC.innerHTML = (questionsList[4].choices[2]);
    answerButtonD.innerHTML = (questionsList[4].choices[3]);

   
   
});



