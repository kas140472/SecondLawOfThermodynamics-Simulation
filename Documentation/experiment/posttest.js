
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
      question: "An ideal gas undergoes a process from State 1 (300K, 100kPa) to State 2 (600K, 500kPa). The specific heats of the ideal gas are Cp = 1 kJ/kgK and Cv = 0.7 kJ/kgK. The change in entropy of the ideal gas from State 1 to State 2 is:",
      answers: {
        a: "0.13",
        b: "0.21",
        c: "0.27",
        d: "0.34"
      },
      correctAnswer: "b"
    },
    {
      question: "1 kg of an ideal gas undergoes an irreversible process from State 1 (1 bar, 300 K) to State 2 (2 bar, 300 K). The change in specific entropy (s<sub>2</sub> - s<sub>1</sub>) of the gas in the process is:",
      answers: {
        a: "-199",
        b: "-210",
        c: "-187",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Consider the fluid in subsystem 1 to be butane of mass 1 kg and the fluid in subsystem 2 to be water with mass 1 kg. Let T1 be 200℃ and T2 be 205℃. When the partition is removed, what is the temperature of the mixed fluid at equilibrium?",
      answers: {
        a: "202.5℃"",
        b: "201.6℃",
        c: "203.95℃",
        d: "203.2℃"
      },
      correctAnswer: "d"
    },
    {
      question: "Consider the fluids in both the subsystems to be water with mass 1 kg each. Let T1 be 200℃ and T2 be 205℃. When the partition is removed, what is the change in entropy of the universe?",
      answers: {
        a: "0.012 kJ/kgK",
        b: "0.12 kJ/kgK",
        c: "0.00012 kJ/kgK",
        d: "0.000012 kJ/kgK"
      },
      correctAnswer: "c"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
