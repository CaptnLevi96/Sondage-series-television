const questions = [
    {
        question: "Quelle est votre série préférée?",
        options: ["Breaking Bad", "Game of Thrones", "Friends", "Succession"],
        
    },
    {
        question: "Quel genre de séries préférez-vous?",
        options: ["Drame", "Comédie", "Action", "Science-fiction"]
    },
    {
        question: "Combien d'heures par semaine regardez-vous des séries?",
        options: ["Moins de 5 heures", "5-10 heures", "10-20 heures", "Plus de 20 heures"]
    },
    {
        question: "Quelle est votre série préféré des années 80?",
        options: ["Star Trek: The Next Generation", "Seinfeld", "Full House", "The Cosby Show"]
    },
    {
        question: "Quel acteur ou actrice est votre préféré?",
        options: ["Denzel Washington", "Julia Roberts", "Tom Cruise", "Sandra Bullock"]
    },
    {
        question: "Quelle série recommanderiez-vous à un ami?",
        options: ["The Sopranos", "Squid Game", "Stranger Things", "House"]
    },
    {
        question: "Quel service de streaming utilisez-vous le plus?",
        options: ["Netflix", "Amazon Prime", "Disney+", "Hulu"]
    },
    {
        question: "Regardez-vous des séries en langue étrangère?",
        options: ["Souvent", "Parfois", "Rarement", "Jamais"]
    },
    {
        question: "Préférez-vous les séries terminées ou en cours?",
        options: ["Terminées", "En cours"]
    },
    {
        question: "Quelle série attendez-vous le plus en 2025?",
        options: ["Ironheart", "Andor (Saison 2)", "Wednesday (Saison 2)", "Daredevil: Born Again"]
    }
];




let currentQuestionIndex = 0;

document.getElementById("startButton").addEventListener("click", function() {
    const quizContainer = document.getElementById("quizContainer");
    const startButton = document.getElementById("startButton");

    if (currentQuestionIndex > 0) {
        const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex - 1}"]:checked`);
        if (!selectedOption) {
            alert("Vous devez répondre à la question avant de pouvoir continuer le sondage.");
            return;
        }
    }

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        
        let optionsHtml = '';
        currentQuestion.options.forEach((option, index) => {
            optionsHtml += `
                <label class="options"><input type="radio" name="question${currentQuestionIndex}" value="option${index + 1}"> ${option}</label>
            `;
        });

        quizContainer.innerHTML = `
            <p class="question">${currentQuestion.question}</p>
            ${optionsHtml}
        `;
        currentQuestionIndex++;

        if (currentQuestionIndex === 1) {
            startButton.textContent = "Suivant";
            startButton.classList.add("quiz-started"); 
        }

        if (currentQuestionIndex === questions.length) {
            startButton.textContent = "Terminer le sondage";
        }
    } else {
        quizContainer.innerHTML = "<p> <p class='message-de-fin'>Merci d'avoir complété le sondage!</p>";
        startButton.style.display = "none";
    }
});

quizContainer.innerHTML = `
            <p class="question">${currentQuestion.question}</p>
            ${currentQuestion.image ? `<img class="question-image" src="${currentQuestion.image}">` : ''}
            ${optionsHtml}
        `;