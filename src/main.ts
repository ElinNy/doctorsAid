const welcomeText = "Welcome";
const welcomeEl = document.querySelector("#welcomeEl");
let drLisa = document.querySelector<HTMLParagraphElement>("#drLisa");
const backgroundStyle = document.querySelector("#backgroundStyle");
const doktor = document.querySelector("doktor");
const bubbleBtn = document.querySelector<HTMLDivElement>("#bubbleBtn");

bubbleBtn?.classList.add("hide");

function welcome() {
  const width = 300; // Bredden på den liggande ovalen
  const height = 50; // Höjden på den liggande ovalen
  const centerX = width / 2; // X-koordinaten för ovalens centrum
  const centerY = height / 2; // Y-koordinaten för ovalens centrum
  const totalChars = welcomeText.length;
  const angleIncrement = Math.PI / totalChars; // Vinkeln mellan varje tecken
  const horizontalRadius = width / 2; // Halva bredden av ovalen
  const verticalRadius = height / 2; // Halva höjden av ovalen
  const startAngle = angleIncrement / 2;
  const endAngle = startAngle + totalChars * angleIncrement;

  for (let i = 0; i < totalChars; i++) {
    const angle = startAngle + angleIncrement * i;
    if (angle <= endAngle) {
      setTimeout(() => {
        const x = centerX + horizontalRadius * 0.8 * Math.cos(angle); // X-koordinat för tecknet
        const y = centerY + verticalRadius * Math.sin(angle); // Y-koordinat för tecknet

        let span = document.createElement("span");
        span.innerHTML = welcomeText[i];
        span.style.right = `${x}px`;
        span.style.bottom = `${y}px`;
        welcomeEl?.appendChild(span);
      }, i * 300);
    }
  }
  setTimeout(() => {
    drLisa!.innerHTML = "To Dr Lisa!";
  }, 3000);
}
welcome();

function hideWelcomeAndAddSpeechBubble() {
  setTimeout(() => {
    welcomeEl?.classList.add("hide");
    drLisa?.classList.add("hide");
    backgroundStyle?.classList.add("hide");
    doktor?.classList.add("hide");
    bubbleBtn?.classList.remove("hide");
  }, 6000);
}

hideWelcomeAndAddSpeechBubble();
