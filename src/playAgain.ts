import { clearMemoryBoard, exportMemory, resetAndShuffleCards } from "./memory";

const playAgainP = document.querySelector<HTMLDivElement>("#playAgainP");
const talkingPlayAgainId = document.querySelector<HTMLDivElement>(
  "#talkingPlayAgainId"
);
const playAgainBtn = document.querySelector<HTMLButtonElement>("#playAgainBtn");
const memory = document.querySelector(".memoryBoard");
const playAgain = document.querySelector("#playAgain");
let textHej = "";
playAgainP!.innerHTML = `<span id="goodJob">Good job!</span><br>`;
export function playAgainFunction() {
  textHej = `You matched all the cards! Do you want to play again?`;
  talkingPlayAgainId?.classList.remove("hide");
  playAgain?.classList.remove("hide");
  talkingPlayAgainId?.classList.remove("talking");
  function talkingText(element: HTMLElement, text: string) {
    talkingPlayAgainId?.classList.add("talking");
    let i = 0;
    const interval = setInterval(() => {
      if (i < textHej.length) {
        element.innerHTML += text[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }
  setTimeout(() => {
    talkingText(playAgainP!, textHej);
  }, 2000);

  setTimeout(() => {
    talkingPlayAgainId?.classList.remove("talking");
    playAgainBtn?.classList.remove("hide");
  }, 9000);

  playAgainBtn?.addEventListener("click", () => {
    playAgainBtn.classList.add("hide");
    playAgain?.classList.add("hide");
    memory?.classList.remove("hide");
    playAgainP!.innerHTML = "";
    clearMemoryBoard();
    resetAndShuffleCards();
    exportMemory();
  });
}
