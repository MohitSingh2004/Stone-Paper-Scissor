const Play = document.getElementById("Start");
const gamecontainer = document.getElementById("gamecontainer");
const selection = document.getElementById("userselection");

const choices = ["Stone", "Paper", "Scissor"];

Play.addEventListener("click", (a) => {
  gamecontainer.innerHTML = "";
  console.log("Play button is working", a);
  const icons = document.createElement("div");
  icons.classList.add("icons");
  icons.innerHTML = `
  <div class = "icons-container">
  <img src="Stone.png" class = "Stoneimage" width = 80px height = 80px> 
    <img src="Paper.png" class = "Paperimage" width = 80px height = 80px> 
      <img src="Scissor.png" class = "Scissorimage" width = 80px height = 80px>      
</div>`;
  gamecontainer.appendChild(icons);

  const selectionbox = document.createElement("div");
  selectionbox.classList.add("selectionbox");

  const stoneimage = document.querySelector(".Stoneimage");
  stoneimage.addEventListener("click", stone);
  function stone() {
    const userselection = document.querySelector("#userselection");
    userselection.innerHTML = "";
    const stoneIcon = stoneimage.cloneNode(true);
    userselection.appendChild(stoneIcon);
  }

  const paperimage = document.querySelector(".Paperimage");
  paperimage.addEventListener("click", paper);
  function paper() {
    const userselection = document.querySelector("#userselection");
    userselection.innerHTML = "";
    const paperIcon = paperimage.cloneNode(true);
    userselection.appendChild(paperIcon);
  }

  const scissorimage = document.querySelector(".Scissorimage");
  scissorimage.addEventListener("click", Scissor);
  function Scissor() {
    const userselection = document.querySelector("#userselection");
    userselection.innerHTML = "";
    const scissorIcon = scissorimage.cloneNode(true);
    userselection.appendChild(scissorIcon);

    gamecontainer.appendChild(selectionbox);
    setTimeout(() => {
      const mohitDiv = document.createElement("div");
      const mohitImage = imageElement.cloneNode(true);
      mohitDiv.appendChild(mohitImage);
      gamecontainer.appendChild(mohitDiv);
    }, 500);
  }
});

function stone() {
  alert("stone clicked");
}
function Paper() {
  alert("Paper clicked");
}
function Scissor() {
  alert("Scissor clicked");
}

const mohitDiv = document.createElement("div");
mohitDiv.classList.add("mohitselection");
const mohitImage = stoneimage.cloneNode(true);
mohitDiv.appendChild(mohitImage);
