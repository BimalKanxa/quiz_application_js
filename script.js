var questions = 
  [
      {
        "question": "What is the scientific name of a butterfly?",
        "answers": [
          "Apis",
          "Coleoptera",
          "Formicidae",
          "Rhopalocera"
        ],
        "correctIndex": 3
      },
      {
        "question": "How hot is the surface of the sun?",
        "answers": [
          "1,233 K",
          "5,778 K",
          "12,130 K",
          "101,300 K"
        ],
        "correctIndex": 1
      },
      {
        "question": "Who are the actors in The Internship?",
        "answers": [
          "Ben Stiller, Jonah Hill",
          "Courteney Cox, Matt LeBlanc",
          "Kaley Cuoco, Jim Parsons",
          "Vince Vaughn, Owen Wilson"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the capital of Spain?",
        "answers": [
          "Berlin",
          "Buenos Aires",
          "Madrid",
          "San Juan"
        ],
        "correctIndex": 2
      },
      {
        "question": "What are the school colors of the University of Texas at Austin?",
        "answers": [
          "Black, Red",
          "Blue, Orange",
          "White, Burnt Orange",
          "White, Old gold, Gold"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 70 degrees Fahrenheit in Celsius?",
        "answers": [
          "18.8889",
          "20",
          "21.1111",
          "158"
        ],
        "correctIndex": 2
      },
      {
        "question": "When was Mahatma Gandhi born?",
        "answers": [
          "October 2, 1869",
          "December 15, 1872",
          "July 18, 1918",
          "January 15, 1929"
        ],
        "correctIndex": 0
      },
      {
        "question": "How far is the moon from Earth?",
        "answers": [
          "7,918 miles (12,742 km)",
          "86,881 miles (139,822 km)",
          "238,400 miles (384,400 km)",
          "35,980,000 miles (57,910,000 km)"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 65 times 52?",
        "answers": [
          "117",
          "3120",
          "3380",
          "3520"
        ],
        "correctIndex": 2
      },
      {
        "question": "How tall is Mount Everest?",
        "answers": [
          "6,683 ft (2,037 m)",
          "7,918 ft (2,413 m)",
          "19,341 ft (5,895 m)",
          "29,029 ft (8,847 m)"
        ],
        "correctIndex": 3
      },
      {
        "question": "When did The Avengers come out?",
        "answers": [
          "May 2, 2008",
          "May 4, 2012",
          "May 3, 2013",
          "April 4, 2014"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 48,879 in hexidecimal?",
        "answers": [
          "0x18C1",
          "0xBEEF",
          "0xDEAD",
          "0x12D591"
        ],
        "correctIndex": 1
      }
    ];


      const questionElement = document.getElementById("question");
      const answerButton = document.getElementById("answer-buttons");
      const nextButton = document.getElementById("next-btn");
      const correct_answer = document.getElementById("check_answer")
      
      let currentIndex = 0;
      
      function startQuiz() {
        currentIndex = 0;
        showQuestion();
      }
      
      function showQuestion() {
        resetState();
        let currentQuestion = questions[currentIndex];
        let questionNo = currentIndex + 1;
        questionElement.textContent = questionNo + ". " + currentQuestion.question;
        currentQuestion.answers.forEach((answer, index) => {
          const button = document.createElement("button");
          button.textContent = answer;
          button.classList.add("btn");
          button.dataset.answerIndex = index;
          answerButton.appendChild(button);
          button.addEventListener('click', selectAnswer);
        });
      }
      
      function resetState() {
        while (answerButton.firstChild) {
          answerButton.removeChild(answerButton.firstChild);
        }
        nextButton.style.display = "none";
      }
      
      function selectAnswer(e) {
        const selectedBtn = e.target;
        const selectedAnswerIndex = parseInt(selectedBtn.dataset.answerIndex);
        const currentQuestion = questions[currentIndex];
        const correctAnswerIndex = currentQuestion.correctIndex;
      
        if (selectedAnswerIndex === correctAnswerIndex) {
          selectedBtn.classList.add("correct");
          document.getElementById("check_answer").innerHTML = "Correct Answer !!";
        } else {
          selectedBtn.classList.add("incorrect");
          document.getElementById("check_answer").innerHTML = "Incorrect Answer !!";

          const answerButtons = document.querySelectorAll(".btn");
          answerButtons.forEach((button) => {
         if (button.innerHTML === currentQuestion.answers[correctAnswerIndex]) {
          button.classList.add("correct");
    }
  });
          
        }
        nextButton.addEventListener("click", function() {
          // Clear the inner HTML of the check_answer element
          correct_answer.innerHTML = "";
        });
    

        const answerButtons = document.querySelectorAll(".btn");
        answerButtons.forEach(button => {
          button.disabled = true;
        });
      
        nextButton.style.display = "block";
        nextButton.addEventListener('click', nextQuestion);
      }
      
      function nextQuestion() {
        currentIndex++;
        if (currentIndex < questions.length) {
          showQuestion();
        } else {
          console.log("quiz completed"); // You can perform further actions when the quiz is completed
        }
      }
      
      startQuiz();
      

  

  