//adding typewriter animation
const text = "Bonjour, I am Tushar Garg!";
let index = 1;
function writeText() {
  document.getElementById("greetings").innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }
}

setInterval(writeText, 150);

//navigation
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

