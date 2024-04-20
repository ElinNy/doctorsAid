interface MemoryCard {
  id: number;
  value: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
  element?: HTMLDivElement;
}
const memoryCards: MemoryCard[] = [
  { id: 1, value: "A", image: "/love.png", isFlipped: false, isMatched: false },
  { id: 2, value: "A", image: "/love.png", isFlipped: false, isMatched: false },
  {
    id: 3,
    value: "B",
    image: "/washing-hands.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 4,
    value: "B",
    image: "/washing-hands.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 5,
    value: "C",
    image: "/runny-nose.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 6,
    value: "C",
    image: "/runny-nose.png",
    isFlipped: false,
    isMatched: false,
  },
  { id: 7, value: "D", image: "/sick.png", isFlipped: false, isMatched: false },
  { id: 8, value: "D", image: "/sick.png", isFlipped: false, isMatched: false },
  {
    id: 9,
    value: "E",
    image: "/sneezing.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 10,
    value: "E",
    image: "/sneezing.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 11,
    value: "F",
    image: "/tea-cup.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 12,
    value: "F",
    image: "/tea-cup.png",
    isFlipped: false,
    isMatched: false,
  },
];

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(memoryCards);

const memoryBoard = document.querySelector(".memoryBoard") as HTMLDivElement;
let flippedCards: MemoryCard[] = [];
let cardElement: HTMLDivElement;
let matchedCount = 0;

export function exportMemory() {
  memoryCards.forEach((card) => {
    cardElement = document.createElement("div");
    cardElement.classList.add("memory-card");
    cardElement.classList.add("flip-card");
    cardElement.addEventListener("click", () => handleClickedCard(card));
    card.element = cardElement;
    memoryBoard.appendChild(cardElement);
  });

  function handleClickedCard(clickedCard: MemoryCard): void {
    if (!clickedCard.isFlipped && flippedCards.length < 2) {
      flipCard(clickedCard);
      flippedCards.push(clickedCard);

      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;

        if (card1.id !== card2.id && card1.value === card2.value) {
          matchedCount++;
          console.log(matchedCount);

          if (matchedCount === 6) {
            setTimeout(() => {
              memoryBoard.classList.add("hide");
              const playAgain = document.querySelector("#playAgain");
              playAgain?.classList.remove("hide");
            }, 3000);
          }
          setTimeout(() => {
            card1.isMatched = true;
            card2.isMatched = true;
            card1.element!.style.backgroundImage = `url("/SVG/star.svg")`;
            card2.element!.style.backgroundImage = `url("/SVG/star.svg")`;
            card1.element!.removeEventListener("click", () =>
              handleClickedCard(card1)
            );
            card2.element!.removeEventListener("click", () =>
              handleClickedCard(card2)
            );

            flippedCards = [];
          }, 1000);
        } else {
          setTimeout(() => {
            flipCard(card1);
            flipCard(card2);
            flippedCards = [];
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
    if (card.isMatched) {
      card.element!.style.backgroundImage = `url("/SVG/star.svg")`;
    }
  }
}
