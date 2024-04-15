/* Lägga två bilder i ett object med ett id och om båda har samma id, så är det en match. 
samt slumpa ut det, tänker på movie quizet och använda liknande funktionalitet */
interface MemoryCard {
  id: number;
  value: string;
  image: string;
  isFlipped: boolean;
  element?: HTMLDivElement;
}
const memoryCards: MemoryCard[] = [
  { id: 1, value: "A", image: "/love.png", isFlipped: false },
  { id: 2, value: "A", image: "/love.png", isFlipped: false },
  { id: 3, value: "B", image: "/washing-hands.png", isFlipped: false },
  { id: 4, value: "B", image: "/washing-hands.png", isFlipped: false },
  { id: 5, value: "C", image: "/runny-nose.png", isFlipped: false },
  { id: 6, value: "C", image: "/runny-nose.png", isFlipped: false },
  { id: 7, value: "D", image: "/sick.png", isFlipped: false },
  { id: 8, value: "D", image: "/sick.png", isFlipped: false },
  { id: 9, value: "E", image: "/sneezing.png", isFlipped: false },
  { id: 10, value: "E", image: "/sneezing.png", isFlipped: false },
  { id: 11, value: "F", image: "/tea-cup.png", isFlipped: false },
  { id: 12, value: "F", image: "/tea-cup.png", isFlipped: false },
];

const memoryBoard = document.querySelector(".memoryBoard") as HTMLDivElement;

export function exportMemory() {
  memoryCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("memory-card");
    cardElement.addEventListener("click", () => handleClickedCard(card));
    card.element = cardElement;
    memoryBoard.appendChild(cardElement);
  });

  function handleClickedCard(clickedCard: MemoryCard): void {
    console.log("klickat kort", clickedCard);
    if (!clickedCard.isFlipped) {
      flipCard(clickedCard);
      let flippedCards = memoryCards.filter((card) => card.isFlipped);
      console.log("Vända kort:", flippedCards);
      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.value === card2.value) {
          console.log("match!");
          flippedCards = [];
          setTimeout(() => {
            handleClickedCard(clickedCard);
          }, 1000);
        } else {
          console.log("no match");
          setTimeout(() => {
            flipCard(card1);
            flipCard(card2);
          }, 1000);
        }
      }
    }
  }

  function flipCard(card: MemoryCard): void {
    card.isFlipped = !card.isFlipped;
    if (card.element) {
      card.element.style.backgroundImage = card.isFlipped
        ? `url(${card.image})`
        : `url("/SVG/backgroundFlowers.svg")`;
    }
    console.log(card, card.image);
  }
}

function shuffleArray(memoryCards: MemoryCard[]) {
  for (let i = memoryCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [memoryCards[i], memoryCards[j]] = [memoryCards[j], memoryCards[i]];
  }
}
shuffleArray(memoryCards);

console.log(memoryCards);
