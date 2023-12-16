        document.addEventListener("DOMContentLoaded", function () {
            const navigateButton = document.getElementById("navigate-button");
    
            navigateButton.addEventListener("click", function () {
                scrollToTop();
            });
    
            window.addEventListener("scroll", function () {
                if (window.scrollY > 150) {
                    navigateButton.classList.add("clicked");
                } else {
                    navigateButton.classList.remove("clicked");
                }
            });
        });

        function scrollToTop() {
            const scrollToTop = window.setInterval(function() {
                const yOffset = window.pageYOffset;
                if (yOffset > 0) {
                    window.scrollTo(0, yOffset - 25);
                } else {
                    window.clearInterval(scrollToTop);
                }
            }, 10);
        }
