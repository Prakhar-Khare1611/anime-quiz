let score = 0;
let currentQuestionIndex = 0;
let correctAnswers = 0;

const questions = [
    {
        question: "Who is the main character of One Piece?",
        options: ["Luffy", "Zoro", "Sanji", "Nami"],
        correctOption: 1, // Luffy
        description: "Monkey D. Luffy is the main protagonist of One Piece, aiming to become the Pirate King."
    },
    {
        question: "Who is known as the 'Reaper' in Death Note?",
        options: ["Light Yagami", "L", "Ryuk", "Misa Amane"],
        correctOption: 3, // Ryuk
        description: "Ryuk is the Shinigami who drops the Death Note into the human world, setting the story in motion."
    },
    {
        question: "Who is the 'Certified Otaku' in Naruto?",
        options: ["Naruto Uzumaki", "Sasuke Uchiha", "Kakashi Hatake", "Rock Lee"],
        correctOption: 1, // Naruto Uzumaki
        description: "Naruto Uzumaki is the main character who dreams of becoming Hokage to gain the village's respect."
    },
    {
        question: "Which anime features the character 'Goku'?",
        options: ["Dragon Ball Z", "Naruto", "One Piece", "Attack on Titan"],
        correctOption: 1, // Dragon Ball Z
        description: "Goku is the main character in Dragon Ball Z, known for his immense strength and love for fighting."
    },
    {
        question: "Who is the protagonist of My Hero Academia?",
        options: ["Izuku Midoriya", "Katsuki Bakugo", "Shoto Todoroki", "All Might"],
        correctOption: 1, // Izuku Midoriya
        description: "Izuku Midoriya is a Quirkless boy who dreams of becoming the world's greatest hero."
    },
    {
        question: "Who is the captain of the Straw Hat Pirates?",
        options: ["Luffy", "Zoro", "Nami", "Usopp"],
        correctOption: 1, // Luffy
        description: "Luffy is the captain of the Straw Hat Pirates, determined to find the One Piece and become the Pirate King."
    },
    {
        question: "Which anime character has the power of 'Rinnegan'?",
        options: ["Sasuke Uchiha", "Naruto Uzumaki", "Madara Uchiha", "Itachi Uchiha"],
        correctOption: 1, // Sasuke Uchiha
        description: "Sasuke Uchiha obtains the Rinnegan, a powerful Dojutsu, in his quest for revenge and peace."
    },
    {
        question: "In which anime does the character 'Kagome' appear?",
        options: ["Inuyasha", "Naruto", "Bleach", "Fairy Tail"],
        correctOption: 1, // Inuyasha
        description: "Kagome Higurashi is the protagonist of Inuyasha, who travels to the past to help the half-demon, Inuyasha."
    },
    {
        question: "Which anime character is known for saying 'Bankai'?",
        options: ["Ichigo Kurosaki", "Naruto Uzumaki", "Luffy", "Kenshin Himura"],
        correctOption: 1, // Ichigo Kurosaki
        description: "Ichigo Kurosaki is the main character of Bleach, who uses 'Bankai' to activate his sword's full power."
    },
    {
        question: "Who is the strongest fighter in Dragon Ball Z?",
        options: ["Goku", "Vegeta", "Frieza", "Cell"],
        correctOption: 1, // Goku
        description: "Goku is the strongest fighter in Dragon Ball Z, known for his Saiyan strength and his ability to break limits."
    },
    // Add more questions up to 30-40...
];

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    
    for (let i = 1; i <= 4; i++) {
        document.getElementById('option' + i).innerText = currentQuestion.options[i - 1];
    }

    document.getElementById('message').innerText = "";
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.correctOption) {
        score += 1;
        document.getElementById('score').innerText = "Score: " + score;
        document.getElementById('message').innerText = "Correct Answer!";
        document.getElementById('option' + selectedOption).classList.add("correct");
    } else {
        score -= 0.5;
        document.getElementById('score').innerText = "Score: " + score;
        document.getElementById('message').innerText = "Better luck next time!";
        document.getElementById('option' + selectedOption).classList.add("incorrect");
    }

    setTimeout(nextQuestion, 2000);  // Delay of 2 seconds before moving to the next question
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('message').innerText = "You finished the quiz!";
        document.getElementById('score').innerText = "Final Score: " + score;
        document.querySelector('.options-container').style.display = "none";  // Hide options
    }
}

// Initialize the game
loadQuestion();
