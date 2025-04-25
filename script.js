let currentScore = 0;
let currentQuestionIndex = 0;
let difficultyLevel = '';
let quizQuestions = [];

const startGame = () => {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('difficulty-selection').style.display = 'block';
};

const startQuiz = (difficulty) => {
    difficultyLevel = difficulty;
    // Load questions based on difficulty
    loadQuestions(difficultyLevel);
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion(currentQuestionIndex);
};

const loadQuestions = (difficulty) => {
    // Placeholder data (replace with actual question set for each difficulty)
    const easyQuestions = [
        {
            question: "This green-haired boy was born quirkless but inherits the power of the greatest hero.",
            options: ["Deku", "Luffy", "Naruto", "Ichigo"],
            answer: "Deku"
        },
        {
            question: "This guy wears a straw hat, loves meat, and wants to become the King of the Pirates.",
            options: ["Luffy", "Zoro", "Kakashi", "Natsu"],
            answer: "Luffy"
        }
    ];

    const mediumQuestions = [
        {
            question: "This silver-haired samurai is lazy, loves sweets, and always finds himself in ridiculous situations.",
            options: ["Gintoki", "Kakashi", "Todoroki", "Natsu"],
            answer: "Gintoki"
        }
    ];

    const hardQuestions = [
        {
            question: "This young assassin is a genius, skilled in electricity, and has a killer instinct.",
            options: ["Killua", "Goku", "Saitama", "Kamina"],
            answer: "Killua"
        }
    ];

    if (difficulty === 'easy') {
        quizQuestions = easyQuestions;
    } else if (difficulty === 'medium') {
        quizQuestions = mediumQuestions;
    } else {
        quizQuestions = hardQuestions;
    }
};

const showQuestion = (index) => {
    const question = quizQuestions[index];
    document.getElementById('quiz-question').textContent = question.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option) => {
        const optionBtn = document.createElement('button');
        optionBtn.textContent = option;
        optionBtn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionBtn);
    });
};

const checkAnswer = (selectedOption) => {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        currentScore += 1;
    } else {
        currentScore -= 0.5;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        endGame();
    }
};

const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(currentQuestionIndex);
    }
};

const endGame = () => {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score').textContent = currentScore;
    if (currentScore >= 20) {
        document.getElementById('certification').textContent = 'Certified Otaku!';
    } else {
        document.getElementById('certification').textContent = 'Better luck next time!';
    }
};

const restartGame = () => {
    currentScore = 0;
    currentQuestionIndex = 0;
    document.getElementById('score-container').style.display = 'none';
    document.getElementById('start-btn').style.display = 'block';
};
