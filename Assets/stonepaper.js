const Play = document.getElementById("Start");
const gamecontainer = document.getElementById("gamecontainer");

let userScore = 0;
let cpuScore = 0;
let GameRunning = false;

const cpuChoices = [
  { name: "Stone", src: "./Assets/NEW_STONE.png" },
  { name: "Paper", src: "./Assets/NEW_PAPER.png" },
  { name: "Scissor", src: "./Assets/NEW_SCISSOR.png" },
];

Play.addEventListener("click", () => {
  gamecontainer.innerHTML = ""; // Clear previous content

  const icons = document.createElement("div");
  icons.classList.add("icons-container"); // Use the class for icons container directly
  icons.innerHTML = `
    <img src="./Assets/NEW_STONE.png" class="Stoneimage" width="80px" height="80px" alt="Stone"> 
    <img src="./Assets/NEW_PAPER.png" class="Paperimage" width="80px" height="80px" alt="Paper"> 
    <img src="./Assets/NEW_SCISSOR.png" class="Scissorimage" width="80px" height="80px" alt="Scissor">
  `;
  gamecontainer.appendChild(icons);

  // It's better to select elements after they are added to the DOM
  const stoneimage = document.querySelector(".Stoneimage");
  const paperimage = document.querySelector(".Paperimage");
  const scissorimage = document.querySelector(".Scissorimage");

  stoneimage.addEventListener("click", () =>
    handleSelection("Stone", "./Assets/NEW_STONE.png")
  ); // Make sure this matches your image source
  paperimage.addEventListener("click", () =>
    handleSelection("Paper", "./Assets/NEW_PAPER.png")
  ); // Make sure this matches your image source
  scissorimage.addEventListener("click", () =>
    handleSelection("Scissor", "./Assets/NEW_SCISSOR.png")
  ); // Make sure this matches your image source
});

function handleSelection(userChoice, userImg) {
  if (GameRunning) return;
  GameRunning = true;
  const oldResult = document.querySelector(".Wishes");
  if (oldResult) oldResult.remove();

  const oldUser = document.querySelector(".userselection");
  if (oldUser) oldUser.remove();

  const userselection = document.createElement("div");
  userselection.classList.add("userselection");
  userselection.textContent = "You selected: ";
  const userIcon = document.createElement("img");
  userIcon.src = userImg;
  userIcon.width = 80;
  userIcon.height = 80;

  userselection.appendChild(userIcon);
  gamecontainer.appendChild(userselection);

  const oldCpu = document.querySelector(".cpuselection");
  if (oldCpu) oldCpu.remove();

  // Show a "thinking" state or message for Mohit for a better UX
  const thinkingMessage = document.createElement("div");
  thinkingMessage.classList.add("cpuselection"); // Reusing class for styling
  thinkingMessage.textContent = "Mohit is thinking...";
  gamecontainer.appendChild(thinkingMessage);

  setTimeout(() => {
    // Remove the thinking message
    GameRunning = false;
    thinkingMessage.remove();

    const CpuDiv = document.createElement("div");
    CpuDiv.classList.add("cpuselection");
    CpuDiv.textContent = "Mohit selected: ";

    const randomIndex = Math.floor(Math.random() * cpuChoices.length);
    const cpuChoice = cpuChoices[randomIndex];

    const cpuIcon = document.createElement("img");
    cpuIcon.src = cpuChoice.src;
    cpuIcon.width = 80;
    cpuIcon.height = 80;

    CpuDiv.appendChild(cpuIcon);
    gamecontainer.appendChild(CpuDiv);

    showResult(userChoice, cpuChoice.name);
  }, 500);
}

function showResult(user, cpu) {
  const Wishes = document.createElement("div");
  Wishes.classList.add("Wishes");

  if (user === cpu) {
    Wishes.textContent = "Oops.. It's a Draw!";
    Wishes.style.color = "#ffc107";
    Wishes.style.backgroundColor = "#fff9e6";
  } else if (
    (user === "Stone" && cpu === "Scissor") ||
    (user === "Paper" && cpu === "Stone") ||
    (user === "Scissor" && cpu === "Paper")
  ) {
    Wishes.textContent = "You Win!";
    fireCrackers();
    userScore++;
    Wishes.style.color = "#28a745";
    Wishes.style.backgroundColor = "#e6ffed";
  } else {
    Wishes.textContent = "Mohit Wins!";
    cpuScore++;
    Wishes.style.color = "#dc3545";
    Wishes.style.backgroundColor = "#ffe6e6";
  }

  Wishes.style.marginTop = "30px";
  Wishes.style.fontWeight = "bold";
  Wishes.style.fontSize = "2.2rem";

  gamecontainer.appendChild(Wishes);
  updateScoreBoard();
}

function updateScoreBoard() {
  const scoreBoard = document.getElementById("scoreBoard");
  scoreBoard.textContent = ` Your Score: ${userScore} | Mohit's Score: ${cpuScore}`;
}

function fireCrackers() {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  const lettersContainer = document.getElementById("letters-container");
  const word = "SENTI";

  word.split("").forEach((letter, index) => {
    const letterElement = document.createElement("p");
    letterElement.textContent = letter;
    letterElement.setAttribute("data-aos", "fade-up");
    letterElement.setAttribute("data-aos-delay", 700 + index * 100);
    letterElement.setAttribute("data-aos-anchor-placement", "top-bottom");
    lettersContainer.appendChild(letterElement);
  });
});

// const Play = document.getElementById("Start");
// const gamecontainer = document.getElementById("gamecontainer");

// let userScore = 0;
// let cpuScore = 0;

// const cpuChoices = [
//   { name: "Stone", src: "NEW_STONE.png" },
//   { name: "Paper", src: "NEW_PAPER.png" },
//   { name: "Scissor", src: "NEW_SCISSOR.png" },
// ];

// Play.addEventListener("click", () => {
//   gamecontainer.innerHTML = "";

//   const icons = document.createElement("div");
//   icons.classList.add("icons");
//   icons.innerHTML = `
//     <div class="icons-container">
//       <img src="STONE_IMAGE.png" class="Stoneimage" width="80px" height="80px">
//       <img src="PAPER_IMAGE.png" class="Paperimage" width="80px" height="80px">
//       <img src="SCISSOR_IMAGE.jpg" class="Scissorimage" width="80px" height="80px">
//     </div>`;
//   gamecontainer.appendChild(icons);

//   const stoneimage = document.querySelector(".Stoneimage");
//   const paperimage = document.querySelector(".Paperimage");
//   const scissorimage = document.querySelector(".Scissorimage");

//   stoneimage.addEventListener("click", () =>
//     handleSelection("Stone", "NEW_STONE.png")
//   );
//   paperimage.addEventListener("click", () =>
//     handleSelection("Paper", "NEW_PAPER.png")
//   );
//   scissorimage.addEventListener("click", () =>
//     handleSelection("Scissor", "NEW_SCISSOR.png")
//   );
// });

// function handleSelection(userChoice, userImg) {
//   const oldResult = document.querySelector(".Wishes");
//   if (oldResult) oldResult.remove();

//   const oldUser = document.querySelector(".userselection");
//   if (oldUser) oldUser.remove();

//   const userselection = document.createElement("div");
//   userselection.classList.add("userselection");
//   userselection.textContent = "You selected: ";
//   const userIcon = document.createElement("img");
//   userIcon.src = userImg;
//   userIcon.width = 80;
//   userIcon.height = 80;

//   userselection.appendChild(userIcon);
//   gamecontainer.appendChild(userselection);

//   const oldCpu = document.querySelector(".cpuselection");
//   if (oldCpu) oldCpu.remove();

//   setTimeout(() => {
//     const CpuDiv = document.createElement("div");
//     CpuDiv.classList.add("cpuselection");
//     CpuDiv.textContent = "Mohit selected: ";

//     const randomIndex = Math.floor(Math.random() * cpuChoices.length);
//     const cpuChoice = cpuChoices[randomIndex];

//     const cpuIcon = document.createElement("img");
//     cpuIcon.src = cpuChoice.src;
//     cpuIcon.width = 80;
//     cpuIcon.height = 80;

//     CpuDiv.appendChild(cpuIcon);
//     gamecontainer.appendChild(CpuDiv);

//     showResult(userChoice, cpuChoice.name);
//   }, 2000);
// }

// function showResult(user, cpu) {
//   const Wishes = document.createElement("div");
//   Wishes.classList.add("Wishes");

//   if (user === cpu) {
//     Wishes.textContent = "Oops.. It's a Draw!";
//   } else if (
//     (user === "Stone" && cpu === "Scissor") ||
//     (user === "Paper" && cpu === "Stone") ||
//     (user === "Scissor" && cpu === "Paper")
//   ) {
//     Wishes.textContent = "You Win!";
//     userScore++;
//   } else {
//     Wishes.textContent = "Mohit Wins!";
//     cpuScore++;
//   }

//   Wishes.style.marginTop = "10px";
//   Wishes.style.fontWeight = "bold";

//   gamecontainer.appendChild(Wishes);
//   updateScoreBoard();
// }

// function updateScoreBoard() {
//   const scoreBoard = document.getElementById("scoreBoard");
//   scoreBoard.textContent = ` Your Score: ${userScore} | Mohit's Score: ${cpuScore}`;
// }
