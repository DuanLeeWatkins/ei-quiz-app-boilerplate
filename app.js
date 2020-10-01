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

function html() {
  $("main").html(html);
}

const mainPage = () => {
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
  $("main").html(html);
};

const QuestionAndAnwers = () => {
  html = `
    <div class="container">
      <p>${questions.question[0]}</p>
      <div class="question-answers-container">
        <form id="js-quiz-question-anwser-form">
          <label for= "answer[0]">${questions.answers[0]}</label>
          <input type="radio" name=Answers id="answer1" value="${questions.answers[0]}"><br>
          <label for= "answer[1]">${questions.answers[1]}</label>
          <input type="radio" name=Answers id="answer2" value="${questions.answers[1]}"><br>
          <label for= "answer[2]">${questions.answers[2]}</label>
          <input type="radio" name=Answers id="answer3" value="${questions.answers[2]}"><br>
          <label for= "answer[3]">${questions.answers[3]}</label>
          <input type="radio" name=Answers id="answer4" value="${questions.answers[3]}"><br>
          <button type="submit">Submit</button>
       
        </form>
      </div>
    </div>`;
  $("main").html(html);
};

function startQuizButton() {
  $("main").on("click", "#start-btn", (event) => {
    console.log("start");
  });
}

function handleQuestionNumber() {}

function renderQuestionAndAnswers() {}
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
$(mainPage(), startQuizButton());
