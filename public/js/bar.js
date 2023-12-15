document.addEventListener("DOMContentLoaded", function () {
  var bar = document.querySelector(".bar");
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      bar.classList.add("scrolled");
    } else {
      bar.classList.remove("scrolled");
    }

    lastScrollTop = scrollTop;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var barLinks = document.querySelectorAll(".bar a");

  barLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      barLinks.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
});
