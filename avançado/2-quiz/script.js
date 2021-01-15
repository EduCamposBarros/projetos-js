const quizData =[
    {
        question: 'Qual a diferença entre o baile e o funk?',
        a: 'nenhuma',
        b: 'um anda bonito e o outro elegante',
        c: 'o preço da agua no bar',
        d: 'não faço ideia do que colocar como quarta alternativa',
        correct: 'b'
    },
    {
        question: 'Como pode um peixe vivo viver fora da agua fria?',
        a: 'nao pode',
        b: 'pode mas com resalvas',
        c: 'pode mas não devia',
        d: 'ainda sem ideias do que colocar ',
        correct: 'a'
    },
    {
        question: 'Qual o melhor Dark Souls?',
        a: 'Dark Souls 1',
        b: 'Dark Souls 2',
        c: 'Dark Souls 3',
        d: 'Todos (resposta correta)',
        correct: 'b'
    },
    {
        question: 'precisa de mais perguntas ainda?',
        a: 'Sim',
        b: 'talvez',
        c: 'não',
        d: 'tanto faz',
        correct: 'c'
    },
    {
        question: 'será essa a última pergunta?',
        a: 'sim',
        b: 'não',
        c: 'se pá',
        d: 'tanto faz mano',
        correct: 'd'
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


};

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer = answerEl.id;
        }
    });
    return answer;

}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //checa a resposta
    const answer =  getSelected();

    console.log(answer);
    
    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>Você respondeu corretamente ${score} de ${quizData.length} questões. </h2> <button onclick="location.reload()">Recarregar</button>`
        }
    }

});