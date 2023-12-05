const questions =[
    {
        question:"What is the capital city of Japan?",
        answers:[
            {text:'Beijing',correct:false},
            {text:'Tokyo',correct:true},
            {text:'Seoul',correct:false},
            {text:'Bangkok',correct:false},
        ]
    },
    {
        question:"Which planet is known as the 'Red Planet'?",
        answers:[
            {text:'Venus',correct:false},
            {text:'Mars',correct:true},
            {text:'Jupiter',correct:false},
            {text:'Saturn',correct:false},
        ]
    },
    {
        question:" Who wrote the play 'Romeo and Juliet'?",
        answers:[
            {text:'William Shakespeare',correct:false},
            {text:'Jane Austen',correct:true},
            {text:'Charles Dickens',correct:false},
            {text:'Scott Fitzgerald',correct:false},
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
          { text: 'Atlantic Ocean', correct: false },
          { text: 'Indian Ocean', correct: false },
          { text: 'Southern Ocean', correct: false },
          { text: 'Pacific Ocean', correct: true },
        ]
      },
      
      {
        question: "In which year did the United States declare its independence?",
        answers: [
          { text: '1676', correct: false },
          { text: '1776', correct: true },
          { text: '1876', correct: false },
          { text: '1976', correct: false },
        ]
      },
      
      {
        question: "What is the chemical symbol for gold?",
        answers: [
          { text: 'Ag', correct: false },
          { text: 'Au', correct: true },
          { text: 'Fe', correct: false },
          { text: 'Hg', correct: false },
        ]
      },
      
      {
        question: "Who painted the Mona Lisa?",
        answers: [
          { text: 'Vincent van Gogh', correct: false },
          { text: 'Pablo Picasso', correct: false },
          { text: 'Leonardo da Vinci', correct: true },
          { text: 'Michelangelo', correct: false },
        ]
      },
      
      {
        question: "What is the currency of Germany?",
        answers: [
          { text: 'Euro', correct: true },
          { text: 'Pound Sterling', correct: false },
          { text: 'Yen', correct: false },
          { text: 'Dollar', correct: false },
        ]
      },
      
      {
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
          { text: 'Oxygen', correct: false },
          { text: 'Carbon Dioxide', correct: true },
          { text: 'Nitrogen', correct: false },
          { text: 'Hydrogen', correct: false },
        ]
      },
      
      {
        question: "Who is known as the 'Father of Computer Science'?",
        answers: [
          { text: 'Alan Turing', correct: true },
          { text: 'Bill Gates', correct: false },
          { text: 'Steve Jobs', correct: false },
          { text: 'Mark Zuckerberg', correct: false },
        ]
      }
];



const questionElement = document.getElementById('question');
const answersButton = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach((answers) => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('btn');
        answersButton.appendChild(button);
        if (answers.correct) {
          button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
      });
    }

function resetState() {
    nextButton.style.display = 'none';
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    console.log(answersButton.children);
    Array.from(answersButton.children).forEach((button) => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score: ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz()
