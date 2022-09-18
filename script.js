const Loading = document.querySelector(".loading");
const StartWeb = document.querySelector(".main");
const Body = document.querySelector("body");
const Search = document.querySelector(".search");
const IconSearch = document.querySelector(".icon-search");
const SearchInput = document.querySelector(".search-input");
const BurgerMenu = document.querySelector(".burger-menu");
const MenuBurger = document.querySelector(".menu-burger");
const ClosePage = document.querySelector(".close-page");
const Line1 = document.querySelector(".line1");
const Line2 = document.querySelector(".line2");
const Line3 = document.querySelector(".line3");
const Items1 = document.querySelector(".items1");
const Items2 = document.querySelector(".items2");
const Items3 = document.querySelector(".items3");
const Items4 = document.querySelector(".items4");
const Nav = document.querySelector(".nav");
const GoTop = document.querySelector(".go-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    Nav.style.position = "fixed";
    Nav.style.opacity = "0.9";
  } else {
    Nav.style.position = "sticky";
  }

  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    GoTop.style.display = "block";
  } else {
    GoTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var BetSearch = 0;
var BetBurgerMenu = 0;
var BetClosePage = false;

function loading() {
  setTimeout(() => {
    Loading.style.display = "none";
    StartWeb.style.display = "block";
    Body.style.backgroundColor = "#171717";
  }, 2500);
}

function closepage() {
  Line1.style.transform = "rotate(0deg)";
  Line2.style.opacity = "1";
  Line3.style.transform = "rotate(0deg)";
  MenuBurger.style.left = "-20rem";
  ClosePage.style.display = "none";
}

IconSearch.addEventListener("click", () => {
  if (BetSearch % 2 == 0) {
    Search.style.width = "13rem";
    IconSearch.style.padding = "0 0.5rem 0 0";
    SearchInput.style.display = "block";
    IconSearch.style.margin = "0";
  }
  if (BetSearch % 2 == 1) {
    Search.style.width = "3rem";
    IconSearch.style.padding = "0";
    SearchInput.style.display = "none";
    setTimeout(() => {
      IconSearch.style.margin = "auto";
    }, 1800);
  }
  BetSearch++;
});

BurgerMenu.addEventListener("click", () => {
  if (BetBurgerMenu % 2 == 0) {
    MenuBurger.style.display = "block";
    ClosePage.style.display = "block";
    setTimeout(() => {
      Line1.style.transform = "rotate(45deg)";
      Line2.style.opacity = "0";
      Line3.style.transform = "rotate(45deg)";
      MenuBurger.style.left = "0";
    }, 100);
  }
  if (BetBurgerMenu % 2 == 1) {
    closepage();
  }
  BetBurgerMenu++;
});

ClosePage.addEventListener("click", () => {
  closepage();
});

Items1.addEventListener("click", () => {
  closepage();
});

Items2.addEventListener("click", () => {
  closepage();
});

Items3.addEventListener("click", () => {
  closepage();
});

Items4.addEventListener("click", () => {
  closepage();
});

window.addEventListener("click", (event) => {
  if (event.target == MenuBurger) {
    closepage();
  }
});
