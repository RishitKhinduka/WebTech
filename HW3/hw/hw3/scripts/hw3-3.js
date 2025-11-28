// hw3-3.js (simplified)

// DOM elements
const hitBtn = document.getElementById("hit-btn");
const images = document.querySelectorAll(".cards img");
const result = document.querySelector(".result");

// card pools
const suits = ["S", "H", "D", "C"];
const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

// Draw one random card and return its filename and numeric value
function drawCard() {
  const rank = ranks[Math.floor(Math.random() * ranks.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const filename = `${rank}${suit}.png`;

  // value rules: A=1, J/Q/K=10, 2-10 = number
  let value = rank === "A" ? 1
            : (["J","Q","K"].includes(rank) ? 10
            : parseInt(rank, 10));
  if (isNaN(value)) value = 0;

  return { filename, value };
}

// When Hit is clicked: draw 3 cards, update images, compute total, show message
hitBtn.addEventListener("click", () => {
  let total = 0;

  images.forEach(img => {
    const card = drawCard();
    img.src = `images/cards/${card.filename}`;
    img.alt = card.filename.replace(".png", "");
    total += card.value;
  });

  const status = total > 21
    ? "Unfortunately, you are Busted!"
    : "Nice! You are Not Busted!";

  result.textContent = `Total: ${total} — ${status}`;
});
