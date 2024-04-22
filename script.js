// Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Сколько всего независимых государств в мире?",
        options: ['193', '256', '195', '206'],
        correctAnswer: '193',
    },
    {
        question: "Какой основной язык в Бразилии?",
        options: ['Португальский', 'Английский', 'Турецкий', 'Немецкий'],
        correctAnswer: 'Португальский',
    },
    {
        question: "Сколько будет: 9 + (9 ÷ 9) + (9 × 9) – 9?",
        options: ['67', '82', '87', '99'],
        correctAnswer: '82',
    },
    {
        question: "Сколько лет длилась столетняя война?",
        options: ['111', '100', '121', '116'],
        correctAnswer: '116',
    },
    {
        question: "Кто доказал существование электромагнитных волн?",
        options: ['И. Ньютон', 'А. Эйнштейн', 'Г. Р. Герц', 'Д. К. Максвелл'],
        correctAnswer: 'Г. Р. Герц',
    },
    {
        question: "Какого языка программирования не существует?",
        options: ['SQL', 'С#', 'CH+', 'C++'],
        correctAnswer: 'CH+',
    },
]

let wrongAnswers = [];

const restart = document.getElementById('restart-btn');
let currentQuestion = 0; // Текущий вопрос
let correctAnswers = 0; // Кол-во правильных ответов
restart.style.display = 'none';

function displayQuestion() {
    let questionElem = document.getElementById('question'); // Получить блоке куда размещать вопрос
    questionElem.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    // Получим блоки кнопок
    let optionsElem = document.getElementById('options');
    // Очистим блок с кнопками
    optionsElem.innerHTML = ''; // Свойство innerHTML позволяет получить и изменить HTML код элемента.

    // Массив ответов
    let optionArr = questions[currentQuestion].options;
    // Создаем кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionArr.forEach((option) => {
        let button = document.createElement('button')
        optionsElem.append(button);
        button.textContent = option;
        button.classList.add('btn');
    });
    // При клике на блок с кнопками
    optionsElem.addEventListener('click', (event) => {
        // Получаем в переменную кнопку, на которую кликнули
        let target = event.target;
        console.log(target.textContent);
        // Вызовем функцию проверки ответов и перехода к следующему вопросу
        nextQuestion(target.textContent);
    }, { once: true });
}

// Функция для перехода к следующему вопросу
function nextQuestion(answer) {
    // Если ответ равен корректному то
    if (answer === questions[currentQuestion].correctAnswer) {
        // Увеличиваем на единицу количество верных ответов
        correctAnswers++;
    } else {
        wrongAnswers.push(questions[currentQuestion]);
    }
    currentQuestion++; // Переход к следующему вопросу
    // Если номер текущего вопроса меньше количества вопросов то отображаем следующий вопрос
    if (currentQuestion < questions.length) {
        displayQuestion(); // Отображаем следующий вопрос
    } else {
        displayResult();
    }
}

// Функция отображенитя результата теста
function displayResult() {
    console.log(nextQuestion);
    const questionElem = document.getElementById('question');
    const optionsElem = document.getElementById('options');
    const resultElem = document.getElementById('result');
    const container = document.getElementById('container');
    const gradeElem = document.getElementById('grade');
    questionElem.style.display = 'none';
    container.style.display = 'none';
    optionsElem.style.display = 'none';
    restart.style.display = 'block';
    resultElem.textContent = `${input.value}, у вас правильных ответов: ${correctAnswers} из ${questions.length}`
    if (correctAnswers == 0) {
        gradeElem.textContent = 'Ваша оценка 2 (0%)'
    }
    if (correctAnswers == 1) {
        gradeElem.textContent = 'Ваша оценка 2 (16.67%)'
    }
    if (correctAnswers == 2) {
        gradeElem.textContent = 'Ваша оценка 2 (33.33%)'
    }
    if (correctAnswers == 3) {
        gradeElem.textContent = 'Ваша оценка 3 (50%)'
    }
    if (correctAnswers == 4) {
        gradeElem.textContent = 'Ваша оценка 3 (66.67%)'
    }
    if (correctAnswers == 5) {
        gradeElem.textContent = 'Ваша оценка 4 (83.33%)'
    }
    if (correctAnswers == 6) {
        gradeElem.textContent = 'Ваша оценка 5 (100%)'
    }
}

function refresh() {
    window.location.reload();
}
restart.addEventListener("click", refresh);

const reg = document.getElementById('reg');
const start = document.getElementById('start');
const input = document.getElementById('input');
start.addEventListener('click', (e) => {
    if (input.value === '') {
        e.preventDefault();
    } else {
        reg.style.display = 'none';
        container.style.display = 'block';
    }
})

displayQuestion();