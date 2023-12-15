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
    // Get all anchor elements in the bar
    var barLinks = document.querySelectorAll('.bar a');

    // Add click event listeners to each anchor
    barLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Remove the 'active' class from all links
        barLinks.forEach(function (otherLink) {
          otherLink.classList.remove('active');
        });

        // Add the 'active' class to the clicked link
        link.classList.add('active');
      });
    });
  });