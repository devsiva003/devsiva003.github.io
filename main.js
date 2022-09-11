const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const backToTopBtn = document.querySelector("#backToTopBtn");
const floatingProfilesBar = document.querySelector("#floatingProfilesBar");
const scrollIndicator = document.querySelector(".scroll-indicator");
const mainMenu = document.querySelector("#main-menu");
const mainMenuTrigger = document.querySelector("#main-menu-trigger");
const mainMenuTriggerIcon = mainMenuTrigger.querySelector("i");
const intialScrollY = window.scrollY;

let prevScrollY = window.scrollY;

const triggerMainMenu = () => {
  mainMenuTriggerIcon.classList.toggle("fa-bars");
  mainMenuTriggerIcon.classList.toggle("fa-times");
  document.body.classList.toggle("has-menu-opened");
};

if (intialScrollY > 80) backToTopBtn.classList.add("is-visible");

window.addEventListener("scroll", () => {
  let curScrollY = this.scrollY;
  let scrollPerc =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  scrollPerc *= 100;
  scrollIndicator.style.width = `${scrollPerc}%`;
  floatingProfilesBar.classList.toggle("is-hidden", scrollPerc > 95);
  
  // To prevent header hide from browser automatic scroll
  if (curScrollY === intialScrollY) return;
  
  // console.log(curScrollY);
  backToTopBtn.classList.toggle("is-visible", curScrollY > 80);
  if (header.offsetTop < footer.offsetTop - header.offsetHeight) {
    header.classList.toggle(
      "is-scrolling",
      curScrollY > header.offsetTop + header.offsetHeight
    );
    header.classList.toggle(
      "is-visible",
      curScrollY < prevScrollY ||
        document.body.classList.contains("has-menu-opened")
    );
  }
  prevScrollY = curScrollY;
});

mainMenuTrigger.addEventListener("click", triggerMainMenu);

mainMenu.addEventListener("click", (e) => {
  if (e.target.tagName !== "A" || window.innerWidth>480) return;
  triggerMainMenu();
});
