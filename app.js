/**
 * Example store structure
 */

let counter = 0;
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: "What is Limewire?",
      answers: [
        "Video game",
        "Social Media Platform",
        "Smoothie Shop",
        "Torrent manager for downloading media",
      ],
      correctAnswer: "Torrent manager for downloading media",
    },
    {
      question:
        "Which of these video game consoles was not around in the 2000s?",
      answers: ["PS2", "Wii", "Nintendo Switch", "Xbox 360"],
      correctAnswer: "Nintendo Switch",
    },
    {
      question: "What were shoes with wheels called in the 2000s?",
      answers: ["Roller Skates", "Wheelies", "Heelys", "Wheel Kicks"],
      correctAnswer: "Heelys",
    },
    {
      question: "What was the most popular vampire movie in the 2000s?",
      answers: ["Vampire in Brooklyn", "Little Vampire", "Twilight", "Blade"],
      correctAnswer: "Twilight",
    },
    {
      question: "What does YOLO mean?",
      answers: [
        "You Only Love Once",
        "You Only Live Once",
        "You Only Learn Once",
        "Young Open-minded Learners Outreach",
      ],
      correctAnswer: "You Only Live Once",
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};
// - Replaces the main tag with whatever it stores.
function render(html) {
  $("main").html(html);
}
// - Displays the main page of the quiz.
const renderMainPage = () => {
  html = `
    <div class="container">
      <div id="main-page-container">
        <div class="main-page-paragraph"
          <p>
            Welcome to the Millennial Quiz! This quiz was created to test how
            Millennial you are. There are five mulitple choice question to
            answer. Each question is worth 20 points.
          </p>
          <p>
            If you are up to the challenge, click on the start quiz button to
            begin.
          </p>
        </div>
        <div class="controls">
          <button id="start-btn" class="start-btn btn">Start Quiz</button>
        </div>

      </div>
  </div>
  `;

  render(html);
  $("main").on("click", "#start-btn", (event) => {
    renderQuestionPage();
    //$("#btn-next, #btn-finish").hide();
    store.quizStarted = true;
  });
};
// - Displays the question page.
const renderQuestionPage = () => {
  if (counter < 5) {
    let currentQuestion = store.questions[store.questionNumber];
    html = `
    <div class="container">
      <h3>Question ${store.questionNumber + 1}/5</h3>
      <p class="question">${currentQuestion.question}</p>
      <div class="question-answers-container">
        <form id="js-quiz-question-anwser-form">
          <p>
            <input type="radio" name="answers" id="answer0" value="${
              currentQuestion.answers[0]
            }" required>
            <label for="answer0">${currentQuestion.answers[0]}</label>
            
          </p>
          <p>
            <input type="radio" name="answers" id="answer1" value="${
              currentQuestion.answers[1]
            }"><label for="answer2">${currentQuestion.answers[2]}</label>
            <label for="answer1">${currentQuestion.answers[1]}</label>
          </p>
          <p>
            <input type="radio" name="answers" id="answer2" value="${
              currentQuestion.answers[2]
            }">
            <label for="answer2">${currentQuestion.answers[2]}</label>
          </p>
          <p>
            <input type="radio" name="answers" id="answer3" value="${
              currentQuestion.answers[3]
            }">
            <label for="answer3">${currentQuestion.answers[3]}</label>
          </p>
          <p>
            ${renderButtons()}
          </p>
        </form>
      </div>
    </div>`;
  }
  render(html);
};
// - Displays the finish and submit buttons based on what questionNumber
// is loaded.
function renderButtons() {
  if (store.questionNumber === store.questions.length - 1) {
    return '<button id="btn-finish">Finish</button>';
  }
  return '<button id="btn-submit" type="submit">Submit</button>';
}
// - Handles the submit button.
function handleSubmit() {
  // $("#btn-next, #btn-finish").hide();
  $("main").on("submit", "#js-quiz-question-anwser-form", (event) => {
    event.preventDefault();
    checkAnswer();
  });
}
// - Handles next button
function handleNext() {
  $("main").on("click", "#btn-next", () => {
    store.questionNumber++;
    if (store.questionNumber < store.questions.length) {
      renderQuestionPage();
    } else {
      renderFinalPage();
    }
  });
}
// - Checks if the users' answer is correct
function checkAnswer() {
  const userAnswer = $("input[type=radio]:checked").val();
  const correctAnswer = store.questions[store.questionNumber].correctAnswer;

  let html;
  if (userAnswer === correctAnswer) {
    store.score += 20;
    // - [X] Display a success message
    // - [X] Update the user score (+20)
    // return $("main").html(
    html = `
      <h2>Correct</h2>
      <p id="score-text">Score: ${store.score}</p>
      <button id="btn-next">Next</button>
    `;
    // );
  } else {
    // - [ ] Display wrong message with correct answer
    // alert("Wrong answer");
    // return $("main").html(
    html = `
      <h2>Wrong Answer</h2>
      <p id="wrong-answer-message">The correct answer is ${correctAnswer}</p>
      <p id="current-score">Current Score is ${store.score}</p>
      <button id="btn-next">Next</button>
    `;
    // );
  }
  render(html);
  // - We need an if statement to compare the correct answer in the object
  //   to the user's input
}
// - Displays the final page and tryAgain button
// - Reloads back to the mainPage
function renderFinalPage() {
  $("main").html(
    `<h2>You have completed the quiz</h2>
    <h3>${store.score}/100 <button type="button" id='tryAgain'>Try Again</button>`
  );
  $("#tryAgain").on("click", function () {
    document.location.reload();
  });
}

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
$(renderMainPage(), handleSubmit(), handleNext());
