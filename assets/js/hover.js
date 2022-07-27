let animation__hover = document.querySelectorAll(".animation__hover");

animation__hover.forEach((element) => {
  let animation_one = element.querySelector(".animation__hover--one");
  let animation_two = element.querySelector(".animation__hover--two");
  let animation_three = element.querySelector(".animation__hover--three");
  let animation_four = element.querySelector(".animation__hover--four");
  let next = 0;

  element.addEventListener("mouseenter", (event) => {
    if (animation_one) {
      next = event.offsetX;
      const dist = next - element.offsetWidth / 2;

      if (Math.abs(dist) > element.offsetWidth / 5) {
        return;
      }
      return (animation_one.style.transform = `translate(${dist}px,8px)`);
    }

    if (animation_two) {
      return (animation_two.style.left = `${element.offsetWidth * 0.75}px`);
    }

    if (animation_three) {
      next = event.offsetX;
      const dist = next - element.offsetWidth / 2;

      if (Math.abs(dist) > element.offsetWidth / 5) {
        return;
      }
      return (animation_three.style.transform = `translateX(${dist}px)`);
    }

    if (animation_four) {
      return (animation_four.style.left = `${element.offsetWidth / 2}px`);
    }
  });

  element.addEventListener("mousemove", (event) => {
    if (animation_one) {
      next = event.offsetX;
      const dist = next - element.offsetWidth / 2;
      if (Math.abs(dist) > element.offsetWidth / 5) {
        return;
      }
      return (animation_one.style.transform = `translate(${dist}px,8px)`);
    }

    if (animation_two) {
      let dist = event.offsetX - element.offsetWidth * 0.75;
      if (Math.abs(dist) > element.offsetWidth / 5) {
        return;
      }
      return (animation_two.style.transform = `translateX(${dist}px)`);
    }

    if (animation_three) {
      next = event.offsetX;
      const dist = next - element.offsetWidth / 2;

      if (Math.abs(dist) > element.offsetWidth / 5) {
        return;
      }
      return (animation_three.style.transform = `translateX(${dist}px)`);
    }

    if (animation_four) {
      let dist = event.offsetX - element.offsetWidth / 2;
      if (Math.abs(dist) > element.offsetWidth / 5) {
        return;
      }
      animation_four.style.transform = `translateX(${dist}px) rotate(90deg)`;
      // animation_three.style.transform = "rotate(90deg)";
    }
  });
});
