const quizQuestions = [
    {
        question: 'What is the capital of Italy?',
        a: 'Roma',
        b: 'Milano',
        c: 'Paris',
        d: 'London',
        correct: 'a'
    }, {
        question: 'What is the smallest country in the world?',
        a: 'Vatican City',
        b: 'Kosova',
        c: 'Luxembourg',
        d: 'Mali',
        correct: 'a'
    }, {
        question: 'What is the hottest continent on Earth?',
        a: 'Asia',
        b: 'Europe',
        c: 'Africa',
        d: 'Australia',
        correct: 'c'
    }, {
        question: 'What is the largest country in the world?',
        a: 'Russia',
        b: 'London',
        c: 'Kenya',
        d: 'Canada',
        correct: 'a'
    }
];

const question_el = document.getElementById('question');
const answer_els = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currectQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizQuestions[currectQuiz];

    question_el.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answer_els.forEach(answer_el => {
        if(answer_el.checked) {
            answer = answer_el.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answer_els.forEach(answer_el => {
        answer_el.checked = false;
    });
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizQuestions[currectQuiz].correct) {
            score++;
        } 

        currectQuiz++;
        if(currectQuiz < quizQuestions.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h3> You answered correctly at ${score}/${quizQuestions.length} questions. </h3> <button class="btn" onclick="location.reload()">Reload</button>`;
        }
    }
});