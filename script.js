const flashcards = [
  { term: "HTML", definition: "HyperText Markup Language" },
  { term: "CSS", definition: "Cascading Style Sheets" },
  { term: "JavaScript", definition: "Programming language of the web" },
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
  let currCard = flashcards[currentIndex];
  let cardContent = document.getElementById("card-content");
  if (showingTerm) {
    cardContent.innerText = currCard.term;
  } else {
    cardContent.innerText = currCard.definition;
  }
}

// The rest of the code you will write is apart of event listeners
document.getElementById("flashcard").addEventListener("click", function () {
  showingTerm = !showingTerm;
  displayCard();
});

document.getElementById("next-btn").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showingTerm = true;
  displayCard();
});

document.getElementById("prev-btn").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showingTerm = true;
  displayCard();
});

document.getElementById("add-card-btn").addEventListener("click", function () {
  let newTerm = document.getElementById("new-term").value.trim();
  let newDefinition = document.getElementById("new-definition").value.trim();
  flashcards.push({ term: newTerm, definition: newDefinition });
  currentIndex = flashcards.length - 1;
  showingTerm = true;
  displayCard();
  document.getElementById("new-term").value = "";
  document.getElementById("new-definition").value = "";
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
