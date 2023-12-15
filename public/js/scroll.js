document.addEventListener("DOMContentLoaded", function () {
  var projeSection = document.querySelector(".proje");
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      projeSection.classList.add("show");
    } else {
      projeSection.classList.remove("show");
    }

    lastScrollTop = scrollTop;
  });
});
