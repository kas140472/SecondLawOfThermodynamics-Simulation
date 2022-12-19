
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "The second law of thermodynamics states that the change in entropy of the universe can never be:",
    answers: {
      a: "Positive",
      b: "Negative",
      c: "Constant"
    },
    correctAnswer: "b"
  },
  {
    question: "The two subsystems with the fluids are kept in a _______ enclosure.",
    answers: {
      a: "Isothermal",
      b: "Adiabatic",
      c: "Isentropic",
      d: "None of the above"
    },
    correctAnswer: "b"
  },
  {
    question: "The final temperature of the fluids after mixing when it is at equilibrium is given by the formula:",
    answers: {
      a: "tf = m<sub>1</sub>C<sub>1</sub>T<sub>1</sub>/m<sub>2</sub>C<sub>2</sub>",
      b: "tf = m<sub>2</sub>C<sub>2</sub>T<sub>2</sub>/m<sub>1</sub>C<sub>1</sub>",
      c: "tf = (m<sub>1</sub>C<sub>1</sub>T<sub>1</sub> + m<sub>2</sub>C<sub>2</sub>T<sub>2</sub>)/(m<sub>1</sub>C<sub>1</sub> + m<sub>2</sub>C<sub>2</sub>)",
      d: "tf = (m<sub>1</sub>C<sub>1</sub>T<sub>2</sub> + m<sub>2</sub>C<sub>2</sub>T<sub>1</sub>)/(m<sub>1</sub>C<sub>1</sub> + m<sub>2</sub>C<sub>2</sub>)"
    },
    correctAnswer: "c"
  },
  {
    question: "Change in the entropy of the universe is given by the formula:",
    answers: {
      a: "ΔS<sub>universe</sub> = ΔS<sub>1</sub> + ΔS<sub>2</sub>",
      b: "ΔS<sub>universe</sub> = ΔS<sub>1</sub> - ΔS<sub>2</sub>",
      c: "ΔS<sub>universe</sub> = ΔS<sub>2</sub> - ΔS<sub>1</sub>",
      d: "None of the above"
    },
    correctAnswer: "a"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
