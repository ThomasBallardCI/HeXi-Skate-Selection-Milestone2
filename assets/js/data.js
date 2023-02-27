const answerBtnA = document.getElementById('a');
const answerBtnB = document.getElementById('b');
const answerBtnC = document.getElementById('c');
const submitBtn = document.getElementById('submit-btn')
const question = document.getElementById('question');
const image = document.getElementsByClassName('picture-area');
const start = document.getElementsByClassName('start-btn');
const selected = document.getElementsByClassName('selected');

// Results panel Hidden
const resultsPanel = document.getElementById("panel-2");
resultsPanel.style.display = "none";

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
        imgSrc: "url('assets/images/footwidthpicture.jpg')",
        answers: [
            {id: "a", text: "Narrow"},
            {id: "b", text: "Regular"},
            {id: "c", text: "Wide"}
        ]
    },
    {
        question: "What is your preferred price point?",
        imgSrc: "url('assets/images/PriceRange.png')",
        answers: [
            {id: "a", text: "£100-£250"},
            {id: "b", text: "£250-£400"},
            {id: "c", text: "£400+"}
        ]
    },
    {
        question: "What style of skating do you want to do?",
        answers: [
            {id: "a", text: "Stunts"},
            {id: "b", text: "Fitness"},
            {id: "c", text: "Urban"}
        ]
    }
];


// variable to keep track of current question
let currentQuestion = 0; 

// function to start quiz (to be called)
function beginQuiz(){
    loadQuestion(currentQuestion);
}

let selectedResults = [];

// function to load question data
function loadQuestion(questionIndex) {
    question.innerHTML = questions[questionIndex].question;
    answerBtnA.innerHTML = questions[questionIndex].answers[0].text;
    answerBtnB.innerHTML = questions[questionIndex].answers[1].text;
    answerBtnC.innerHTML = questions[questionIndex].answers[2].text;
    image[0].style.backgroundImage = questions[currentQuestion].imgSrc;
    
    // add event listener to submit button
    submitBtn.addEventListener("click", function() {
        // get selected answer
        let selectedAnswer = document.querySelector(".selected");
        // check if answer is selected
        if (selectedAnswer) {
            // log selected answer
            selectedResults.push(selectedAnswer.id); // add selected answer to array
            console.log(selectedResults);
            // move to next question
            currentQuestion++;
            // clear selection
            removeSelectClass();
            // check if there are more questions
            if (currentQuestion < questions.length) {
                loadQuestion(currentQuestion);
            } else {
                    // hide quiz panel
                    document.getElementById("panel-1").style.display = "none";
                    // show results panel
                    resultsPanel.style.display = "grid";
                    console.log(resultsPanel);
            }
        }
    });
}

// call beginQuiz to start the quiz
beginQuiz();