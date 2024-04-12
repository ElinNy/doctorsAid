/* Lägga två bilder i ett object med ett id och om båda har samma id, så är det en match. 
samt slumpa ut det, tänker på movie quizet och använda liknande funktionalitet */
interface MemoryCard {
  id: number;
  value: string;
  image: string;
  isFlipped: boolean;
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
    // cardElement.textContent = card.isFlipped ? card.value : "";
    cardElement.addEventListener("click", () => flipCard(card, cardElement));
    memoryBoard.appendChild(cardElement);
  });

  let firstCard: MemoryCard | null = null;
  let secondCard: MemoryCard | null = null;

  function flipCard(card: MemoryCard, cardElement: HTMLDivElement) {
    cardElement.textContent = card.value;
    cardElement.style.backgroundImage = `url(${card.image})`;
    console.log(card, card.image);
  }
}
