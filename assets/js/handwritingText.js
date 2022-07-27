const textHandwriting = document.querySelectorAll(".textHandwriting");
textHandwriting.forEach((element) => {
  element.style.strokeDasharray = element.getTotalLength();
  element.style.strokeDashoffset = element.getTotalLength();
});
