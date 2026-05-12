let questions = [
    {
        question: "Cu ce te pot ajuta?",
        options: {
            a: "DA",
            b: "Da"
        },
        correctAnswer: "a",
        correctResponse: "Gresit",
        incorrectResponse: "Corect"
    },
    {
        question: "Care e culoarea mea preferata?",
        options: {
            a: "Rosu",
            b: "Verde"
        },
        correctAnswer: "b",
        correctResponse: "Correct!",
        incorrectResponse: "Gresit, e rosu"
    },
    {
        question: "Is 2 + 2 = 4?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "That's right!",
        incorrectResponse: "Actually it is 4!"
    }
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
displayQuestion();

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}. ${currentQuestion.options[key]}`).join(' ');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question} ${optionsHTML}`;
    chatContainer.appendChild(botResponse);
}

function scrollChatContainerToBottom() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userResponse = userInput.value.toLowerCase();

    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>Tu:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> `;
    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";
    displayQuestion();

    scrollChatContainerToBottom();
});