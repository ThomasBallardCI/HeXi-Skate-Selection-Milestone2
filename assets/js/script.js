const answerBtnA = document.getElementById('a');
const answerBtnB = document.getElementById('b');
const answerBtnC = document.getElementById('c');
const submitBtn = document.getElementById('submit-btn')
const question = document.getElementById('question');
const image = document.getElementsByClassName('picture-area');
const start = document.getElementsByClassName('start-btn');

// Results panel Hidden
document.getElementById("panel-2").style.display = "none";

//---------------------------------------------------------
// button selection color change
var button = document.getElementsByClassName("answer-btn");
var addSelectedClass = function(){
    removeSelectClass();
    this.classList.add('selected');
};

var removeSelectClass = function (){
    for (var i =0; i < button.length; i++) {
        button[i].classList.remove('selected');
    }
};
for (var i =0; i < button.length; i++) {
    button[i].addEventListener("click", addSelectedClass);
};

// ---------------------------------------------------------
// array of questions
let questions = [
    {
    question: "What would you say your foot width is?",
    answers: ["Narrow", "Regular", "Wide"]
    },
    {
    question: "What is your prefered price point?",
    answers: ["£100-£250", "£250-£400", "£400+"]     
    },
    {
    question: "What style of skating do you want to do?",
    answers: ["Stunts", "Fitness", "Urban"]
    }
];

//-----------------------------------------------------------
let questionImages = [
    {
    image: 'url("/assets/images/PriceRange.png")'
    }
]

// function to start quizz (to be called)
function beginQuiz(){
    loadQuestion(0);
}

// function to load question data
function loadQuestion(currentQuestion) {
    question.innerHTML = questions[currentQuestion].question;
    answerBtnA.innerHTML = questions[currentQuestion].answers[0];
    answerBtnB.innerHTML = questions[currentQuestion].answers[1];
    answerBtnC.innerHTML = questions[currentQuestion].answers[2];
    image.style.backgroundImage = questionImages[currentImage].image;
}

// array for keep track of current question to display
let currentQuestion = 0;
let currentImage = 0;
beginQuiz();

//---------------------------------------------------------------
// empty array to store selection responses
let responses = [];




