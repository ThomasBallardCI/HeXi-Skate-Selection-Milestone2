const answerBtnA = document.getElementById('a');
const answerBtnB = document.getElementById('b');
const answerBtnC = document.getElementById('c');
const submitBtn = document.getElementById('submit-btn')
const question = document.getElementById('question');
const image = document.getElementsByClassName('picture-area');

// empty array to store selection responses
let responses = [];

// array for keep track of current question to display
let currentQuestion = 0;

// array of questions
let questions = [{
    question: "What would you say your foot width is?",
    answers: [
        {option:"Narrow", answer:a},
        {option:"Regular", answer:b},
        {option:"Wide", answer:c}
    ]
}];

// function to start quizz (to be called)
function beginQuiz(){
    currentQuestion = 0;
    question.innerHTML = questions[currentQuestion].question;
    answerBtnA.innerHTML = questions[currentQuestion].answers[0].option;
    answerBtnB.innerHTML = questions[currentQuestion].answers[1].option;
    answerBtnC.innerHTML = questions[currentQuestion].answers[2].option;
}

beginQuiz();
console.log(questions);
