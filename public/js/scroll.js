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
  document.addEventListener("DOMContentLoaded", function() {
    var scrollSpeed = 30; // Ayarlanabilir hız değeri

    function scrollStep() {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      }
      window.scrollBy(0, -scrollSpeed);
    }

    function slowScroll() {
      scrollInterval = setInterval(scrollStep, 15);
    }

    document.addEventListener("mousewheel", slowScroll, false);
  });
