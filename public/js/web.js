document.addEventListener("DOMContentLoaded", function () {
  var projeSection = document.querySelector(".proje");
  var aboutSection = document.querySelector(".about");

  projeSection.style.display = "block";
  aboutSection.style.display = "none";

  function showProje() {
    projeSection.style.display = "block";
    aboutSection.style.display = "none";
  }

  function showAbout() {
    projeSection.style.display = "none";
    aboutSection.style.display = "block";
  }

  var projeLink = document.getElementById("proje-a");
  var aboutLink = document.getElementById("the-a");

  projeLink.addEventListener("click", showProje);
  aboutLink.addEventListener("click", showAbout);
});
