document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".content");
  const customScrollThumb = document.getElementById("custom-scroll-thumb");
  let hideTimeout;

  // Show the custom scroll thumb when scrolling starts
  content.addEventListener("scroll", function () {
    customScrollThumb.style.opacity = "1";
    clearTimeout(hideTimeout);

    // Hide the custom scroll thumb after 1.5 seconds of inactivity
    hideTimeout = setTimeout(() => {
      customScrollThumb.style.opacity = "0";
    }, 1500);
  });

  // Update the position of the custom scroll thumb based on content scroll
  content.addEventListener("scroll", function () {
    const scrollPercentage =
      (content.scrollTop / (content.scrollHeight - content.clientHeight)) * 100;
    const thumbPosition =
      (content.clientHeight - customScrollThumb.clientHeight) *
      (scrollPercentage / 100);
    customScrollThumb.style.top = thumbPosition + "px";
  });

  // Smooth scroll to the clicked position on the content
  customScrollThumb.addEventListener("click", function (e) {
    const clickPosition = e.clientY - customScrollThumb.clientHeight / 2;
    const scrollPercentage =
      (clickPosition /
        (content.clientHeight - customScrollThumb.clientHeight)) *
      100;
    const scrollTo =
      (scrollPercentage / 100) * (content.scrollHeight - content.clientHeight);
    content.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  });
});
