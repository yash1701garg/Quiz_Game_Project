(function() {
    const myQuestions = [
      {
        question: "1.In which of the following language is funcyion overloading is not possible?",
        answers: {
          a: "java",
          b: "C++",
          c: "C",
          d: "python"
         },
        correctAnswer: "c" 
      
      },
      {
        question: "2.which of the following are correct file operning mode in c",
        answers: {
          a: "r",
          b: "rb",
          c: "w",
          d: "all of above"
        },
        correctAnswer: "d"
      },
      {
        question: "3.Which of the following is return type of fopen() function in C?",
        answers: {
          a: "pointer to a file project",
          b: "pointer to an integer",
          c: "an integer",
         d: "an flaot"
        },
        correctAnswer: "b"
      },
      {
        question: "4.Which of the following is not a storage class specifier in C?",
        answers: {
          a: "volatile",
          b: "extern",
          c: "typedef",
          d: "static"
         
        },
        correctAnswer: "a"
      },
       {
        question: "5.which of the following will occur if we call the free() function on null pointer?",
        answers: {
          a: "compilation errror",
          b: "runtime error",
          c: "undefined behaviour",
         d: "the program will excute normally"
        },
        correctAnswer: "d"
      },
       {
        question: "6.which data structure is used to handle recursion in c?",
        answers: {
          a: "stack",
          b: "queue",
          c: "graph",
          d: "tree"
         
        },
        correctAnswer: "a"
      },
       {
        question: "7.Which of the following is not true about structure in c",
        answers: {
          a: "not data hiding",
          b: "function ara allowed inside structs",
          c: "constructors are not allowed inside structs",
         d: "cannot have static member in the struct body"
        },
        correctAnswer: "b"
      },
       {
        question: "8.What is full form of CSS?",
        answers: {
          a: "Computer security system",
          b: "computer signed system",
          c: "cascading style sheet",
          d: "computer sexxy system"
         
        },
        correctAnswer: "a b"
      },
       {
        question: "9.Which off the following is a linear data structure?",
        answers: {
          a: "Array",
          b: "AVL trees",
          c: "Binary Tree",
         d: "Graphs"
        },
        correctAnswer: "a"
      },
       {
        question: "10.Which of the following is not a type of queue?",
        answers: {
          a: "Priority queue",
          b: "single ended queue",
          c: "circular queue",
         d: "ordinary queue"
        },
        correctAnswer: "b"
      },
    ];
  
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
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
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
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  
          
          
     
      
      
      
      
          
  
      