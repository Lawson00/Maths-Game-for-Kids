let num1 = document.getElementById("num_1");
let num2 = document.getElementById("num_2");
let choiceA = document.getElementById("choice_a");
let choiceB = document.getElementById("choice_b");
let choiceC = document.getElementById("choice_c");
let showScore = document.getElementById("score");
let addList = document.getElementById("add_list");
let subList = document.getElementById("sub_list");
let mulList = document.getElementById("mul_list");
let divList = document.getElementById("mul_list");

let figure1;
let figure2;
let result;
let domeAns1;
let domeAns2;
let workflow;
// const answers = [];
let trials = 0;
let score = 0;

//EVENT LISTENERS FOR OPERATIONS
addList.addEventListener("click", (event) => {
  workflow = "addition";
  document.getElementById("operator_sign").innerHTML = "+";
  reset();
  generateQuestion();
});
subList.addEventListener("click", (event) => {
  workflow = "subtraction";
  document.getElementById("operator_sign").innerHTML = "-";
  reset();
  generateQuestion();
});
mulList.addEventListener("click", (event) => {
  workflow = "multiplication";
  document.getElementById("operator_sign").innerHTML = "*";
  reset();
  generateQuestion();
});

//TO GENERATE RANDOM EQUATIONS
function generateQuestion() {
  figure1 = Math.floor(Math.random() * 10);
  figure2 = Math.floor(Math.random() * 10);
  num1.innerHTML = figure1;
  num2.innerHTML = figure2;

  //DETERMINING THE RESULTS
  if (workflow == "subtraction") {
    result = figure1 - figure2;
  } else if (workflow == "multiplication") {
    result = figure1 * figure2;
  } else {
    result = figure1 + figure2;
  }

  domeAns1 = Math.floor(Math.random() * 50);
  domeAns2 = Math.floor(Math.random() * 50);
  const answers = [domeAns1, domeAns2, result];
  answers.sort(() => Math.random() - 0.5);
  console.log(`this is a reshuffled array ${answers}`);
  choiceA.innerHTML = answers[0];
  choiceB.innerHTML = answers[1];
  choiceC.innerHTML = answers[2];
}
//RESET SCORE VARIABLES
function reset() {
  trials = 0;
  score = 0;
  showScore.innerHTML = 0;
}

//UPDATE VARIABLES WHEN CORRECT
function correctAns() {
  score++;
  showScore.innerHTML = score;
  console.log(`The Score is ${score}`);
  // location.reload();
  generateQuestion();
}
//UPDATE VARIABLES WHEN WROxNG
function wrongAns() {
  score--;
  showScore.innerHTML = score;
  generateQuestion();
  console.log("The score is " + score);
}
/**********************************/
if (trials < 3) {
  choiceA.addEventListener("click", (event) => {
    if (choiceA.innerHTML == result) {
      correctAns();
    } else {
      if (showScore.innerHTML <= 0) {
        alert(`Game Over!, Score less than zero`);
        location.reload();
        //        reset()
      } else {
        wrongAns();
      }
    }
  });
  choiceB.addEventListener("click", (event) => {
    if (choiceB.innerHTML == result) {
      correctAns();
    } else {
      if (showScore.innerHTML <= 0) {
        alert(`Game Over!, Score less than zero`);
        location.reload();
        //        reset()
      } else {
        wrongAns();
      }
    }
  });

  choiceC.addEventListener("click", (event) => {
    if (choiceC.innerHTML == result) {
      correctAns();
    } else {
      wrongAns();
      alert(`Wrong Answer, ${trials} remaining! `);
    }
  });
  trials++;
  console.log(`The trials remain ${trials}`);
} else {
  console.log("trail done");
}

generateQuestion();
