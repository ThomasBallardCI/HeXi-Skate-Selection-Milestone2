const answerBtnA = document.getElementById('a');
const answerBtnB = document.getElementById('b');
const answerBtnC = document.getElementById('c');
const submitBtn = document.getElementById('submit-btn')
const question = document.getElementById('question');
const image = document.getElementsByClassName('picture-area');
const start = document.getElementsByClassName('start-btn');
const selected = document.getElementsByClassName('selected');

// Results panel Hidden
document.getElementById("panel-2").style.display = "none";

//---------------------------------------------------------
// button selection color change
let button = document.getElementsByClassName("answer-btn");
let addSelectedClass = function(){
    removeSelectClass();
    this.classList.add('selected');
};

let removeSelectClass = function (){
    for (let i =0; i < button.length; i++) {
        button[i].classList.remove('selected');
    }
};
for (let i =0; i < button.length; i++) {
    button[i].addEventListener("click", addSelectedClass);
};

// ---------------------------------------------------------
// array of questions
let questions = [
    {
    question: "What would you say your foot width is?",
    imgSrc: "url('/assets/image/footwidthpicture.jpg')",
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
}

// array for keep track of current question to display
let currentQuestion = 0;
let currentImage = 0;
beginQuiz();

//---------------------------------------------------------------
// empty array to store selection responses
let responses = [];

    // read selected class log the Value
    // interate to the next question
    // clear the selected class
    // on third question load the results page


