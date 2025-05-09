const questions = {
    easy: [
        {
            q: "Hit the sack",
            options: [
                { text: "Punch the pillow", correct: false, feedback: "Aggressive napping?" },
                { text: "Wrestle the blanket", correct: false, feedback: "Uh-Uh" },
                { text: "Go to bed", correct: true, feedback: "Good job buddy!" }
              ]
        },
        {
            q: "Hang in there",
            options: [
                { text: "Keep your chin up", correct: true, feedback: "Correct!" },
                { text: "Hug a cactus", correct: false, feedback: "Painful encouragement" },
                { text: "Scream into a jar", correct: false, feedback: "Don't, jar-chan gonna cry" }
            ]
        },
        {
            q: "Spill the beans",
            options: [
                { text: "Microwave the goldfish", correct: false, feedback: "Let's not. Just… no." },
                {text: "Let the cat out of the bag", correct: true, feedback: "Meowfect!😼" },
                { text: "Throw the salad", correct: false, feedback: "A crime against lunch!" }
            ]
        },
        {
            q: "Pull someone's leg",
            options: [
                { text: "Kid around", correct: true, feedback: "Goat-approved." },
                { text: "Tickle their leg", correct: false, feedback: "Be careful not to get kicked there" },
                { text: "Whisper to their elbow", correct: false, feedback: "Confusing intimacy" }
            ]
        },
        {
            q: "On the ball",
            options: [
                { text: "Slippery as a banana", correct: false, feedback: "Chaos mode" },
                { text: "Bright as a black hole", correct: false, feedback: "Contradictory genius" },
                { text: "Sharp as a tack", correct: true, feedback: "Valid💯" }
]
        }
    ],
    medium: [
        {
            q: "Reveal a secret accidentally",
            options: [
                { text: "Spill the tea", correct: true, feedback: "Gossip time!🍿" },
                { text: "Release the kraken", correct: false, feedback: "Overkill" },
                { text: "Boil the hamster", correct: false, feedback: "Don't you dare" }
            ]
        },
        {
            q: "Bite the bullet",
            options: [
                { text: "Chew the cannonball", correct: false, feedback: "Dentist's nightmare" },
                { text: "Swallow the sword", correct: false, feedback: "Nope." },
                { text: "Grin and bear it", correct: true, feedback: "Smiling through pain" }
              ]
        },
        {
            q: "Costs an arm and a leg",
            options: [
                { text: "Sell your spleen", correct: false, feedback: "Dark☠️" },
                { text: "Break up with your savings", correct: false, feedback: "It's not you, it's your spending habits" },
                { text: "Break the bank", correct: true, feedback: "Smart but broke :)" }
              ]
        },
        {
            q: "Throw in the towel",
            options: [
                { text: "Call it quits", correct: true, feedback: "Elegant surrender" },
                { text: "Choke the napkin", correct: false, feedback: "Angry dining?" },
                { text: "Start a laundry fight", correct: false, feedback: "Fun? Yes. Correct? No." }
            ]
        },
        {
            q: "Go the extra mile",
            options: [
                { text: "Go above and beyond", correct: true, feedback: "Employee of the month, no🧢" },
                { text: "Run into a wall", correct: false, feedback: "Literal" },
                { text: "Hug the boss", correct: false, feedback: "HR warning" }
            ]
        }
    ],
    hard: [
        {
            q: "Once in a blue moon",
            options: [
                { text: "Few and far between", correct: true, feedback: "Like polite internet comments, lol" },
                { text: "When pigs fly", correct: false, feedback: "Now featuring bacon wings!" },
                { text: "When your Wi-Fi works", correct: false, feedback: "A miracle✨" }
            ]
        },
        {
            q: "Get out of hand",
            options: [
                { text: "Become uncontrollable", correct: true, feedback: "Ding ding ding!" },
                { text: "Lose your fingers", correct: false, feedback: "Literal and terrifying." },
                { text: "Misplace your gloves", correct: false, feedback: "Plot twist: The gloves were never real. " }
            ]
        },
        {
            q: "Miss the boat",
            options: [
                { text: "Sail the spreadsheet", correct: false, feedback: "Excel puns won't save you here" },
                { text: "Date the captain", correct: false, feedback: "Plot twist" },
                { text: "Let the ship sail", correct: true, feedback: "Bye-bye, dreams" }
              ]
        },
        {
            q: "Cry over spilled milk",
            options: [
                { text: "Complain about the unchangeable", correct: true, feedback: "Right. And don't forget to clean up your mess." },
                { text: "Blame the cow", correct: false, feedback: "The cow is innocent. You're not." },
                { text: "Wipe the floor quietly", correct: false, feedback: "Practical, but no." }
            ]
        },
        {
            q: "The ball is in your court",
            options: [
                { text: "Throw the clock", correct: false, feedback: "Dong ding din! Congrats, you've invented a new level of wrong." },
                { text: "Blame the referee", correct: false, feedback: "Classic move, but no." },
                { text: "The next move is yours", correct: true, feedback: "Bravo👏" }
              ]
        },
        
        {
          q: "Let sleeping dogs lie",
          options: [
              { text: "Let lazy people rest", correct: false, feedback: "Nice philosophy, wrong canine." },
              { text: "Forget to feed your dog and lie about it", correct: false, feedback: "That's just bad pet parenting AND bad guessing" },
              { text: "Don't stir old trouble", correct: true, feedback: "Thumps up👍" }
            ]
      },
        
      {
        q: "Burn the midnight oil",
        options: [
            { text: "Set your alarm clock on fire", correct: false, feedback: "Wrong." },
            { text: "Stay up late working", correct: true, feedback: "Bingo!" },
            { text: "Nap aggressively at noon", correct: false, feedback: "The dream. Sadly, not the answer." }
          ]
    },
        
    {
      q: "Go the extra mile ",
      options: [
          { text: "Go above and beyond", correct: true, feedback: "Employee of the decade!" },
          { text: "Run into a wall ", correct: false, feedback: "I don't think that's that kind of effort" },
          { text: "Hug the boss ", correct: false, feedback: "HR says hi." }
        ]
  }
    ]
};

const difficultyOrder = ['easy', 'medium', 'hard'];
let currentLevel = 'easy';
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let missedQuestions = []; 

function startLevel(level) {
    currentLevel = level;
    currentLevelIndex = difficultyOrder.indexOf(level);
    currentQuestionIndex = 0;
    score = 0;
    missedQuestions = [];
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('quiz-page').classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentLevel][currentQuestionIndex];
    const quizPage = document.getElementById('quiz-page');
    quizPage.innerHTML = `
        <div class="quiz-container">
            <h1>${capitalize(currentLevel)} Idioms Quiz</h1>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(currentQuestionIndex / questions[currentLevel].length) * 100}%"></div>
                </div>
                <span class="progress-text">${currentQuestionIndex + 1}/${questions[currentLevel].length}</span>
            </div>
            <div class="question-container">
                <h2 id="question-text">${question.q}</h2>
                <div class="options-container" id="options-container"></div>
            </div>
            <div id="notification" class="hidden notification"></div>
            <button id="next-button" class="next-button hidden">Next Question</button>
        </div>
    `;

    const optionsContainer = document.getElementById('options-container');
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option.text;
        button.addEventListener('click', () => selectAnswer(option, button));
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-button').addEventListener('click', nextQuestion);
}

function selectAnswer(option, button) {
    const notification = document.getElementById('notification');
    const nextButton = document.getElementById('next-button');

    notification.textContent = option.feedback;
    notification.classList.remove('hidden', 'correct', 'incorrect');
    notification.classList.add(option.correct ? 'correct' : 'incorrect');

    document.querySelectorAll('.option').forEach(btn => btn.disabled = true);

    let tryAgainBtn = document.getElementById('try-again-button');
    if (tryAgainBtn) tryAgainBtn.remove();

    if (option.correct) {
        button.classList.add('correct');
        score++;
        nextButton.classList.remove('hidden');
    } else {
        button.classList.add('incorrect');
        nextButton.classList.add('hidden');

        const question = questions[currentLevel][currentQuestionIndex];
        if (!missedQuestions.some(q => q.q === question.q)) {
            missedQuestions.push({
                q: question.q,
                correct: question.options.find(opt => opt.correct).text
            });
        }

        tryAgainBtn = document.createElement('button');
        tryAgainBtn.id = 'try-again-button';
        tryAgainBtn.className = 'next-button';
        tryAgainBtn.textContent = 'Try Again';
        notification.after(tryAgainBtn);

        tryAgainBtn.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('incorrect');
            });
            notification.classList.add('hidden');
            tryAgainBtn.remove();
        });
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentLevel].length) {
        loadQuestion();
    } else {
        showLevelResults();
    }
}

function showLevelResults() {
    const quizPage = document.getElementById('quiz-page');
    let missedHtml = '';
    if (missedQuestions.length > 0) {
        missedHtml = `
            <h2>Questions you missed:</h2>
            <ul>
                ${missedQuestions.map(q => `<li><strong>${q.q}</strong><br>Correct answer: <em>${q.correct}</em></li>`).join('')}
            </ul>
        `;
    } else {
        missedHtml = `<p>Perfect! You didn't miss any questions in this level.</p>`;
    }

    let nextLevelBtn = '';
    if (currentLevelIndex < difficultyOrder.length - 1) {
        nextLevelBtn = `<button id="next-level-btn" class="next-button">Next Level</button>`;
    } else {
        nextLevelBtn = `<button id="show-final-results-btn" class="next-button">Show Final Results</button>`;
    }

    quizPage.innerHTML = `
        <div class="results-container">
            <h1>Level Complete!</h1>
            ${missedHtml}
            ${nextLevelBtn}
            <button onclick="returnHome()">Back to Home</button>
        </div>
    `;

    if (currentLevelIndex < difficultyOrder.length - 1) {
        document.getElementById('next-level-btn').addEventListener('click', () => {
            currentLevelIndex++;
            currentLevel = difficultyOrder[currentLevelIndex];
            currentQuestionIndex = 0;
            score = 0;
            missedQuestions = [];
            loadQuestion();
        });
    } else {
        document.getElementById('show-final-results-btn').addEventListener('click', showFinalResults);
    }
}

function showFinalResults() {
    const quizPage = document.getElementById('quiz-page');
    quizPage.innerHTML = `
        <div class="results-container">
            <h1>Quiz Complete!</h1>
            <p>Congratulations! You finished all levels.</p>
        </div>
    `;
}

function returnHome() {
    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('quiz-page').innerHTML = '';
    document.getElementById('home-page').classList.add('active');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', function() {
    const quizPage = document.getElementById('quiz-page');
    if (quizPage) quizPage.classList.remove('active');
});
document.getElementById('quiz-page').classList.remove('active');