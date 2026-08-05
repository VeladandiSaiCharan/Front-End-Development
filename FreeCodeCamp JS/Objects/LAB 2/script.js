const questions = [ {
    category: "Single Player",
    question: "What is the game about?",
    choices: ["Puzzle solving","Strategy", "Action"],
    answer: "Puzzle solving"
},
{
    category: "Multiplayer",
    question: "What is the game about?",
    choices: ["Teamwork", "Competition","Arcade"],
    answer: "Teamwork"
},
{
    category: "Adventure",
    question: "What is the game about?",
    choices: ["Exploration", "Storytelling","Action"],
    answer: "Exploration"
},
{
    category: "Sports",
    question: "What is the game about?",
    choices: ["Physical activity", "Competition", "Teamwork"],
    answer: "Physical activity"
},
{
    category: "Racing",
    question: "What is the game about?",
    choices: ["Speed", "Competition", "Strategy"],
    answer: "Speed"
}
];

function getRandomQuestion(questions) {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    return randomQuestion;
}

function getRandomComputerChoice(choices) {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function getResults(question, computerchoice) {
    if (computerchoice === question.answer) {
        return "The computer's choice is correct!";
    }else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}
