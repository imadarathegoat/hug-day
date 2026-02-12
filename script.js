const startBtn = document.getElementById("startBtn");
const intro = document.querySelector(".intro-screen");
const hugStage = document.querySelector(".hug-stage");
const finalScreen = document.querySelector(".final-screen");
const cards = document.querySelectorAll(".card");
const progressFill = document.querySelector(".progress-fill");
let selectedCount = 0;
startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  hugStage.classList.remove("hidden");
});
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");
      selectedCount++;
      let percent = (selectedCount / cards.length) * 100;
      progressFill.style.width = percent + "%";
      for (let i = 0; i < 5; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
      }
    }
    if (selectedCount === cards.length) {
      setTimeout(() => {
        hugStage.classList.add("hidden");
        finalScreen.classList.remove("hidden");
      }, 1000);
    }
  });
});
