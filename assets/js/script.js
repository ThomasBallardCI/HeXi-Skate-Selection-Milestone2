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
    // return answers-btn.target.value;
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

let answers = [];

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


 // add event listener to submit button
 submitBtn.addEventListener("click", function() {
    // get selected answer
    let selectedAnswer = document.querySelector(".selected").innerHTML;
    // store selected answer in answers array
    answers.push(selectedAnswer);
    // clear selection
    removeSelectClass();
    // move to next question or display results
    if (currentQuestion < questions.length - 1) {
        loadQuestion(currentQuestion + 1);
    } else {
        displayResults();
    }
});
}

function displayResults() {
// display results panel
document.getElementById("panel-2").style.display = "block";
// display user's answers
for (let i = 0; i < answers.length; i++) {
    let answer = document.createElement("p");
    answer.innerHTML = answers[i];
    document.getElementById("user-answers").appendChild(answer);
}
}

// array for keep track of current question to display
let currentQuestion = 0;
let currentImage = 0;
beginQuiz();


//---------------------------------------------------------------

console.log(answers);

    // read selected class log the Value
    // interate to the next question
    // clear the selected class
    // on third question load the results page


