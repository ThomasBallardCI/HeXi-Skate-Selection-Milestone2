const answerBtnA = document.getElementById('a');
const answerBtnB = document.getElementById('b');
const answerBtnC = document.getElementById('c');
const submitBtn = document.getElementById('submit-btn')
const question = document.getElementById('question');
const image = document.getElementsByClassName('picture-area');
const start = document.getElementsByClassName('start-btn');

document.getElementById("panel-2").style.display = "none";

// button selection color change
var button = document.getElementsByClassName("btn");
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


// empty array to store selection responses
let responses = [];

// array for keep track of current question to display
let currentQuestion = 0;

// array of questions
let questions = [
    {
    question: "What would you say your foot width is?",
    answers: ["Narrow", "Regular", "Wide"]
    },
    {
    question: "What is your prefered price point?",
    answers: ["100-250", ""]     
    }
];

// function to start quizz (to be called)
function beginQuiz(){
    loadQuestion(0);

}

function loadQuestion(currentQuestion) {
    question.innerHTML = questions[currentQuestion].question;
    answerBtnA.innerHTML = questions[currentQuestion].answers[0];
    answerBtnB.innerHTML = questions[currentQuestion].answers[1];
    answerBtnC.innerHTML = questions[currentQuestion].answers[2];
}

// start Quiz from click of index.html start buton
start.addEventListener("click", beginQuiz());

beginQuiz();
console.log(questions);
