// bar.js
document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    scrollToTopBtn.addEventListener('click', function () {
      scrollToTopSmoothly();
    });
  
    function scrollToTopSmoothly() {
      var currentPosition = window.scrollY;
      var scrollInterval = setInterval(function () {
        if (currentPosition > 0) {
          window.scrollBy(0, -50);
          currentPosition -= 50;
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  });
  