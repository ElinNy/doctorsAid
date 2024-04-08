const firstSlide = document.querySelector("#slideText");
const firstSlideH1 = document.getElementById("slideH1");
const firstSlideImg = document.getElementById("slideImg");
const firstSlideNumber = document.querySelector(".numbertext");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;

const h1Array = [
  "What is a cold?",
  "How do you get a cold?",
  "Symptoms of a cold",
  "Duration of a cold",
  "Preventing colds",
  "Treatment for a cold",
  "When to see a doctor",
  "Colds vs. flu",
  "Importance of rest",
  "Spread kindness, not germs",
];
const textArray = [
  "A cold is a common viral infection affecting the nose and throat.",
  "Colds are spread by tiny droplets in the air when someone with a cold coughs, sneezes, or talks.",
  "Common symptoms include a runny or stuffy nose, sneezing, coughing, sore throat, and sometimes a low-grade fever.",
  "Most colds last about a week, but some may linger for up to two weeks.",
  "Wash your hands frequently, avoid close contact with sick people, and keep your hands away from your face to prevent spreading or catching a cold.",
  "There is no cure for the common cold, but over-the-counter medications can help alleviate symptoms. Rest, staying hydrated, and drinking warm fluids like soup or tea can also provide relief.",
  "Seek medical attention if symptoms worsen or persist for more than 10 days, if you develop a high fever, or if you have difficulty breathing.",
  "Colds are usually milder than the flu and don't typically cause serious health problems. However, both are caused by viruses and can have similar symptoms.",
  "Resting when you have a cold helps your body fight off the infection more effectively and can speed up recovery.",
  "Encourage good hygiene habits like covering your mouth when you cough or sneeze, and disposing of used tissues properly to prevent the spread of cold viruses.",
];
const imgArray = [
  "/SVG/snyt.svg",
  "/sneezing.png",
  "/runny-nose.png",
  "/week.png",
  "/washing-hands.png",
  "/tea-cup.png",
  "/sick.png",
  "/coronavirus.png",
  "/sleep.png",
  "/love.png",
];

export function exportSlide() {
  showSlide(currentIndex);
  function showSlide(index: number) {
    console.log(h1Array[index]);
    firstSlide!.textContent = textArray[index];
    firstSlideH1!.textContent = h1Array[index];
    firstSlideNumber!.textContent = `${currentIndex + 1}`;
    firstSlideImg!.setAttribute("src", imgArray[index]);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % imgArray.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    showSlide(currentIndex);
  }
  prev?.addEventListener("click", () => {
    prevSlide();
    showSlide(currentIndex);
  });
  next?.addEventListener("click", () => {
    nextSlide();
    showSlide(currentIndex);
  });
}
