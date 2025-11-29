// Part 4 - Car Quiz JS

const questions = [
  {
    text: "The Lexus LFA uses a V10 engine.",
    answer: true
  },
  {
    text: "Ferrari was the first company to ever produce a car.",
    answer: false
  },
  {
    text: "The Bugatti Chiron has a top speed of over 300 mph.",
    answer: true
  },
  {
    text: "Electric cars were invented after gasoline cars.",
    answer: false
  },
  {
    text: "The Porsche 911 has always used a rear-engine layout.",
    answer: true
  }
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit-btn");
const resultEl = document.getElementById("result");
const messageEl = document.getElementById("message");

function loadQuiz() {
  questions.forEach((q, index) => {
    const card = document.createElement("div");
    card.classList.add("question-card");

    card.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${q.text}</p>
      <label>
        <input type="radio" name="q${index}" value="true"> True
      </label><br>
      <label>
        <input type="radio" name="q${index}" value="false"> False
      </label>
    `;

    quizContainer.appendChild(card);
  });
}
loadQuiz();

submitBtn.addEventListener("click", () => {
  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);

    if (selected && selected.value === String(q.answer)) {
      score++;
    }
  });

  resultEl.textContent = `You got ${score}/5 correct!`;

  // Custom message
  if (score === 5) {
    messageEl.textContent = "Expert!";
  } else if (score >= 3) {
    messageEl.textContent = "Car Rookie!";
  } else {
    messageEl.textContent = "Nice try! Better luck next time.";
  }
});
