import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".my-element");
  gsap.from(element, { opacity: 0, duration: 1, x: -40 });
});
