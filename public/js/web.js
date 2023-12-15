document.addEventListener("DOMContentLoaded", function () {
    // Get references to the "proje" and "about" div elements
    var projeSection = document.querySelector(".proje");
    var aboutSection = document.querySelector(".about");

    // Initially show the "proje" section and hide the "about" section
    projeSection.style.display = "block";
    aboutSection.style.display = "none";

    // Function to show the "proje" section and hide the "about" section
    function showProje() {
      projeSection.style.display = "block";
      aboutSection.style.display = "none";
    }

    // Function to show the "about" section and hide the "proje" section
    function showAbout() {
      projeSection.style.display = "none";
      aboutSection.style.display = "block";
    }

    // Attach click event listeners to the "Proje" and "About" links
    var projeLink = document.getElementById("proje-a");
    var aboutLink = document.getElementById("the-a");

    projeLink.addEventListener("click", showProje);
    aboutLink.addEventListener("click", showAbout);
  });