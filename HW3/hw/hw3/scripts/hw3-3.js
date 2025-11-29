// Part 3 - BlackJack JS 

const hitBtn = document.getElementById("hit-btn");
const images = document.querySelectorAll(".cards img");
const result = document.querySelector(".result");

const suits = ["S", "H", "D", "C"];
const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function drawCard() {
  const rank = ranks[Math.floor(Math.random() * ranks.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const filename = `${rank}${suit}.png`;

  let value = rank === "A" ? 1
            : (["J","Q","K"].includes(rank) ? 10
            : parseInt(rank, 10));
  if (isNaN(value)) value = 0;

  return {filename, value};
}

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
    : "Nice! You did Not Busted!";
  result.textContent = `Total: ${total} — ${status}`;
});
