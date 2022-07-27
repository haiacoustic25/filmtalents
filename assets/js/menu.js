const menuBtn = document.querySelector(".menu-btn");
const listsMenu = document.querySelector(".lists__menu");
const textList = document.querySelectorAll(".revealUp");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    listsMenu.classList.add("open");
    textList.forEach((element) => {
      element.classList.add("open");
    });
    menuOpen = true;
  } else {
    let time = setTimeout(() => {
      menuBtn.classList.remove("open");
      listsMenu.classList.remove("open");
      textList.forEach((element) => {
        element.classList.remove("close");
      });
    }, 1200);
    textList.forEach((element) => {
      element.classList.remove("open");
      element.classList.add("close");
    });

    menuOpen = false;
  }
});
