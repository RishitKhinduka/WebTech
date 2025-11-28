// Part 2 - File Selector JS 

const categoryButtons = document.querySelectorAll(".controls button");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const projectContainer = document.querySelector(".project-container");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
let currentCategory = "all"; 
let currentSearch = "";      

function updateDisplay() {
  projectCards.forEach(card => {
    const cardCategory = card.dataset.category;
    const cardTitle = card.dataset.title.toLowerCase();

    const categoryMatch =
      currentCategory === "all" || currentCategory === cardCategory;

    const searchMatch = cardTitle.includes(currentSearch);

    if (categoryMatch && searchMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    updateDisplay();
  });
});
searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value.toLowerCase();
  updateDisplay();
});

sortSelect.addEventListener("change", () => {
  const order = sortSelect.value;
  projectCards.sort((a, b) => {
    const titleA = a.dataset.title.toLowerCase();
    const titleB = b.dataset.title.toLowerCase();

    if (order === "az") {
      return titleA.localeCompare(titleB);
    } else {
      return titleB.localeCompare(titleA);
    }
  });

  projectCards.forEach(card => projectContainer.appendChild(card));
});
