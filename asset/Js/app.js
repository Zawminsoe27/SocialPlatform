const selector = (ele) => document.querySelector(ele);
const allSelector = (ele) => document.querySelectorAll(ele);

const modeSwitcher = selector(".modeSwitcher");
const modIcon = selector(".modIcon");

modeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("darkBg");
  if (modIcon.textContent.trim() == "dark_mode") {
    modIcon.textContent = "light_mode";
  } else {
    modIcon.textContent = "dark_mode";
  }
});

let profileMenu = selector("#profileMenu");
let navProfileImg = selector(".nav-profile-img");
function toggleMenu() {
  profileMenu.classList.toggle("open-menu");

}
navProfileImg.addEventListener("click", () => {
  toggleMenu();
});

async function Posts(){
const data = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-09-19&sortBy=publishedAt&apiKey=4cef352ce4ef418ca514402a84a34591`)
return console.log(data.json())
}
Posts()