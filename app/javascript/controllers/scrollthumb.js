import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
  const scrollThumb = document.getElementById("scrollThumb");
  let hideTimeoutRef;

  function updateThumbPosition() {
    const progress = ScrollTrigger.getById("thumbTrigger").progress;
    const thumbTop = progress * (window.innerHeight - scrollThumb.clientHeight);
    const timeout = 3000;
    gsap.to(scrollThumb, { top: thumbTop, opacity: 1 });

    clearTimeout(hideTimeoutRef);
    hideTimeoutRef = setTimeout(() => {
      gsap.to(scrollThumb, { opacity: 0 });
    }, timeout);
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    id: "thumbTrigger",
    start: "top top",
    end: "bottom bottom",
    onUpdate: updateThumbPosition,
    onEnter: () => {
      gsap.to(scrollThumb, { opacity: 1 });
    },
    onLeaveBack: () => {
      gsap.to(scrollThumb, { opacity: 0 });
    },
  });

  scrollThumb.addEventListener("mouseover", () => {
    clearTimeout(hideTimeoutRef);
  });

  scrollThumb.addEventListener("touchstart", () => {
    clearTimeout(hideTimeoutRef);
  });
});
