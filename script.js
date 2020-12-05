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
question: "Arrays in JavaScript can be used to store __________.",
choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
correctAnswer: 'all of the above',
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
     
];


 //======List of all variables required from index.html file========//
var i = 0;
var questionsSection = document.querySelector('#startWindow');
var timerEl = document.querySelector('#timer');
var startButtonEl = document.querySelector('#startButton');
var scoreRecordedEl = document.querySelector('#scoresLink');
var titleEl = document.querySelector('#title');
var instructionsEl = document.querySelector('#instructions');



    
// ========================List of Global Variables==================//
var timer = 60;
var score = 0;
var currentQuestion = '';
var questionIndex = 0;



//============== Counter starts when start button is clicked===============//
startButtonEl.addEventListener('click', function () {
    var questionAsked = true;
    var timeInterval = setInterval(function() {
        timerEl.textContent = timer + " seconds remaining";
        timer--;
        
        if (timer === -1) {
            clearInterval(timeInterval);
        }
    
      }, 1000);
    // nextQuestion();

    });
    
// -----Removes quiz title, instructions and start quiz-------------------//
      startButtonEl.addEventListener('click', function(){
        // titleEl.style.display = 'none';
        // Startbutton disappears
        startButtonEl.style.display = 'none';

        // Instructions disappear
        instructionsEl.style.display = 'none';
      

        // Buttos that contain the answer choices appear
        // answerButtonSDivEl.style.display = 'block'; 
 // ----------------------------------------------------------------------//

// ==================Generates questioins and answer choices==============//
    function generateQuestion(){
            var currentQuestion = questionsList[questionIndex];
            
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
            generateQuestion()

        });
          
        function renderQuestion(){
        node.addEventListener(function(){
            generateQuestion(questionIndex++);

        });

    }

    // ------------------------Validates answers--------------------------//
    function validateAnswer(event) {
       
        var answerClicked = event.target.value;
        var currentQuestion = questionsList[questionIndex];
        var  correctSelection = currentQuestion.correctAnswer;
        
    
            if (answerClicked === correctSelection) {
             var  correctChoice = document.getElementById('AnswerSelect');
             correctChoice.textContent = 'Correct!';
             console.log(correctAnswer);
            

            } else {
             var incorrectChoice = document.getElementById('AnswerSelect');
             incorrectChoice.textContent = 'Incorrect';
          
             
    }



}
