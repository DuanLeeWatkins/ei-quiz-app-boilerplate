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

const HomePage = (data) => {
  return `
    <header>
      <h1>${data.quizName}</h1>
    </header>
    <main></main>
  `;
};

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
