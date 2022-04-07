const startButton =  document.getElementById('startBtn');
const quiz_card = document.getElementById('quizCard');
const start_card = document.getElementById('startCard');
// const answerButtonA =  document.getElementById('answerBtnA');
// const answerButtonB =  document.getElementById('answerBtnB');
// const answerButtonC =  document.getElementById('answerBtnC');
// const answerButtonD =  document.getElementById('answerBtnD');
// const countDown =  document.getElementById('timer');

startButton.addEventListener('click', startQuiz)


function startQuiz(event) {
    event.preventDefault();
    console.log("quiz started!");
    startButton.classList.add("hide");
    // countDown.classList.remove("hide");
    quiz_card.classList.remove("hide");
    start_card.classList.add("hide");
    nextQuestionHandle();
    // answerButtonB.classList.remove("hide");
    // answerButtonC.classList.remove("hide");
    // answerButtonD.classList.remove("hide");
}

// const startQuiz = async (event) => {
//     event.preventDefault();
//     console.log("quiz started!");
//     startButton.classList.add("hide");
//     answerButton.classList.remove("hide");
//     countDown.classList.remove("hide");
// }

const quiz = document.querySelector('.quiz');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question-container')
const score = document.querySelector('.score');
const submitScore = document.querySelector('.submit-score');

let result = 0;
let currentQuestion =1;

const quizSubmitHandle = async () => {


    const answerIdArray = [];
    const wrongAnswerIdArray = [];
    

    answers.forEach(answer => {
        if (answer.checked) answerIdArray.push(answer.dataset.id);
    });

   const promises = answerIdArray.map(async id => {
        const response = await fetch(`/api/game/answer/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              },
        })
        const data = await response.json();

        if (data.correct_yn) {
            result++;
        } else {
            wrongAnswerIdArray.push(id);
        }
    });
    await Promise.all(promises)
    submitScore.classList.remove('hide');
};

const submitScoreHandle = async () => {

    const quiz_id = quiz.dataset.id
    const questions_answered = questions.length;
    const wrong_answers = questions_answered - result;
    const game_score = result * 10;


    const response = await fetch('/api/game', {
        method: 'POST',
        body: JSON.stringify({
            quiz_id: quiz_id,
            questions_answered: questions_answered,
            correct_answers: result,
            wrong_answers: wrong_answers,
            game_score: game_score,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('unable to submit score');
    }
};

const nextQuestionHandle = () => {
    questions.forEach(question => {
        if (question.dataset.id != currentQuestion)
        question.classList.add('hide');
        else question.classList.remove('hide');
    })
    currentQuestion++;
    if (currentQuestion === 12)
    quizEndHandle();
};

const quizEndHandle = async () => {
    await quizSubmitHandle();
    await submitScoreHandle(); 
}

answers.forEach(answer => {
   answer.addEventListener('click', nextQuestionHandle)
});


document
    .querySelector('.quiz')
    .addEventListener('submit', quizSubmitHandle);

document
    .querySelector('.submit-score')
    .addEventListener('click', submitScoreHandle);
