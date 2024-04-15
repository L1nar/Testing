// Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какой язык программирования вы изучаете?",
        options: ['JavaScript', 'Python', 'PHP', 'C++'],
        correctAnswer: 'JavaScript',
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ['JavaScript', 'Python', 'PHP', 'C++'],
        correctAnswer: 'JavaScript',
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ['JavaScript', 'Python', 'PHP', 'C++'],
        correctAnswer: 'JavaScript',
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ['JavaScript', 'Python', 'PHP', 'C++'],
        correctAnswer: 'JavaScript',
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ['JavaScript', 'Python', 'PHP', 'C++'],
        correctAnswer: 'JavaScript',
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ['JavaScript', 'Python', 'PHP', 'C++'],
        correctAnswer: 'JavaScript',
    },
]

let currentQuestion = 0; // Текущий вопрос
let correctAnswers = 0; // Кол-во правильных ответов

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
    }, {once: true});
}

// Функция для перехода к следующему вопросу
function nextQuestion(answer) {
    // Если ответ равен корректному то
    if(answer === questions[currentQuestion].correctAnswer) {
        // Увеличиваем на единицу количество верных ответов
        correctAnswers++; 
    }
    currentQuestion++; // Переход к следующему вопросу
    // Если номер текущего вопроса меньше количества вопросов то отображаем следующий вопрос
    if(currentQuestion < questions.length) {
        displayQuestion(); // Отображаем следующий вопрос
    } else {
        displayResult();    
    }
}

// Функция отображенитя результата теста
function displayResult() {
    const questionElem = document.getElementById('question');
    const optionsElem = document.getElementById('options');
    const resultElem = document.getElementById('result');
    const container = document.getElementById('container');
    questionElem.style.display = 'none';
    container.style.display = 'none';
    optionsElem.style.display = 'none';
    resultElem.textContent = `Правильных ответов: ${correctAnswers} из ${questions.length}`;
}

displayQuestion();