var questionsList = [
    {
question: "Commonuly used data types DO NOT include:",
choices: ['strings', 'booleans', 'alerts', 'numbers'],
correctAnswer: 'alerts',
    },
       {
question: "The condition in an if/ese is enclosed within__________.",
choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
correctAnswer: 'curly brackets',
    }, 
       {
question: "String values must be recorded within __________when being assigned to variables.",
choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
correctAnswer: 'quotes',
    },
       {
question: "A very useful tool during development and debugging for printing content to the debugger is:",
choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
correctAnswer: 'console.log',
    },
    {
question: "Arrays in JavaScript can be used to store __________.",
choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
correctAnswer: 'all of the above',
            },
     
];


 //======List of all variables required from index.html file========//
var i = 0;
var questionsSection = document.querySelector('#startWindow');
var timerEl = document.querySelector('#timer');
var startButtonEl = document.querySelector('#startButton');
var scoreRecordedEl = document.querySelector('#scoresLink');
var titleEl = document.querySelector('#title');
var instructionsEl = document.querySelector('#instructions');
var scoreSectionEl = document.querySelector('#endWindow');

    
// ========================List of Global Variables==================//
var timer = 60;
var score = 0;
// var currentQuestion = '';
var questionIndex = 0;





//============== Counter starts when start button is clicked===============//
startButtonEl.addEventListener('click', function () {
    var questionAsked = true;
    var timeInterval = setInterval(function() {
        timerEl.textContent = timer + " seconds remaining";
        timer--;
        
        if (timer < 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time is up!"
            
          
        }
        
      }, 1000);
   
    // -----Removes quiz title, instructions and start quiz------//

    // Startbutton  and instructions disappears
    startButtonEl.style.display = 'none';
    instructionsEl.style.display = 'none';
    
    generateNextQuestion();
    });
   


// ==================Generates questioins and answer choices==============//
function generateNextQuestion(){
   
   
   
    var currentQuestion = questionsList[questionIndex];
    if (!currentQuestion) {
        timer = 0;
        // Makes question disappear
        questionsSection.style.display = "none";
        // Makes score section appear
      scoreSectionEl.style.display = "block";

    }
    
            
    titleEl.textContent = currentQuestion.question;
            
    document.getElementById('choices').innerHTML = '';

    currentQuestion.choices.forEach(function(options) {
        console.log(options);
        var node = document.createElement('button');
        var textnode = document.createTextNode(options);
        node.appendChild(textnode);
        var answerButton = document.getElementById('choices').appendChild(node);
        answerButton.setAttribute('value', options);
            
            
    node.addEventListener('click', function(event) {
            validateAnswer(event);
            
    });
    });

   
}

// ==================validates Answers===================================//
    function validateAnswer(event) {
       
        var answerClicked = event.target.value;
        var currentQuestion = questionsList[questionIndex];
        var  correctSelection = currentQuestion.correctAnswer;
        
    
            if (answerClicked === correctSelection) {
             var  correctChoice = document.getElementById('AnswerSelect');
             correctChoice.textContent = 'Correct!';
            //  var addPoints = score += 10;
            //  userScoreEl.textContent = 'Score: ' + addToUserScore;

            } else {
             var incorrectChoice = document.getElementById('AnswerSelect');
             incorrectChoice.textContent = 'Incorrect';
            //   addPoints = score -= 10;
            //  userScoreEl.textContent = 'Score: ' + addToUserScore;
             timer -= 5;      
            
    }
// ------------------Moves to next question after designated time-----------//
    setTimeout(function(){
     generateNextQuestion(questionIndex++); 
    
   }, 500);
 
allDone();
}


// ======================================================================//

