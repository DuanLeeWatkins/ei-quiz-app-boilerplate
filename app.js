/**
 * Example store structure
 */

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

function render(html) {
  $("main").html(html);
}

const renderMainPage = () => {
  html = `
    <div class="container">
      <div id="main-page-container">
        <p>
          Welcome to the Millennial Quiz! This quiz was created to test how
          Millennial you are. There are five mulitple choice question to
          answer. Each question is worth 20 points.
        </p>
        <p>
          If you are up to the challenge, click on the start quiz button to
          begin.
          </p>
        <div class="controls">
          <button id="start-btn" class="start-btn btn">Start Quiz</button>
        </div>

      </div>
  </div>
  `;

  render(html);
  $("main").on("click", "#start-btn", (event) => {
    renderQuestionPage();
  });
};

const renderQuestionPage = () => {
  let questions = store.questions[store.questionNumber];

  html = `
    <div class="container">
      <p id="score">Score:${store.score}</p>
      <p>${questions.question}</p>
      <div class="question-answers-container">
        <form id="js-quiz-question-anwser-form">
          <p>
            <label for="answer0">${questions.answers[0]}</label>
            <input type="radio" name="answers" id="answer0" value="${questions.answers[0]}">
          </p>
          <p>
            <label for="answer1">${questions.answers[1]}</label>
            <input type="radio" name="answers" id="answer1" value="${questions.answers[1]}"><br>
          </p>
          <p>
            <label for="answer2">${questions.answers[2]}</label>
            <input type="radio" name="answers" id="answer2" value="${questions.answers[2]}"><br>
          </p>
          <p>
            <label for="answer3">${questions.answers[3]}</label>
            <input type="radio" name="answers" id="answer3" value="${questions.answers[3]}"><br>
          </p>
          <p>
            <button id="btn-submit" type="submit">Submit</button>
            <button id="btn-next">Next</button>
            <button id="btn-finish">Finish</button>
          </p>
        </form>
      </div>
    </div>`;

  render(html);
  $("#btn-next, #btn-finish").hide();
  $("#js-quiz-question-anwser-form").submit((event) => {
    // - [x] Checking if the answer is correct
    // - [x] Hiding the Submit button
    // - [ ] Showing the Next button (if not on last question)
    // - [ ] Showing the Finish button (if on last question)

    event.preventDefault();
    const userAnswer = $("input[type=radio]:checked").val();
    const correctAnswer = store.questions[0].correctAnswer;
    $("#btn-submit").hide();
    $("#btn-next").show();

    if (userAnswer === correctAnswer) {
      // - [ ] Display a success message
      // - [ ] Update the user score (+20)
      alert("Correct answer!");
    } else {
      // - [ ] Display wrong message with correct answer
      alert("Wrong answer");
    }
    // - We need an if statement to compare the correct answer in the object
    //   to the user's input

    console.log("Form has been submitted!");
  });
};

function startQuiz() {
  jQuery("#btn-next").addClass("hide");
}

function handleQuestionNumber() {}

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
$(renderMainPage);
