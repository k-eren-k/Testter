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
    let isTurkish = false;

    function translateText() {
        const textContainerText = document.getElementById("textContainer");
        const translateIcon = document.getElementById("translateIcon");

        textContainerText.classList.add("fade-in-out");
        textContainerText.innerHTML = "Çeviri Yapılıyor Lütfen Bekle <span id='loadingDots'></span>";
        animateDots();

        setTimeout(() => {
            if (isTurkish) {
                textContainerText.innerText = "I'm a Web Developer from Turkey";
                translateIcon.innerText = "translate";
            } else {
                textContainerText.innerText = "Türkiye'den Web Geliştiricisiyim";
                translateIcon.innerText = "A";
            }

            textContainerText.classList.remove("fade-in-out");

            isTurkish = !isTurkish;
        }, 2200); 
    }

    function animateDots() {
        const dotsElement = document.getElementById('loadingDots');
        let dots = 0;
        setInterval(() => {
            dots = (dots + 1) % 4;
            dotsElement.innerHTML = ".".repeat(dots);
        }, 300); 
    }

  const originalText = document.getElementById('abouttextSpan').textContent;

  function toggleTranslation() {
    const abouttextSpan = document.getElementById('abouttextSpan');
    if (isTurkish) {
      abouttextSpan.textContent = originalText;
    } else {
      abouttextSpan.textContent = "Merhaba, Ben Eren. 14 yaşındayım, lise birinci sınıfta okuyorum ve web alanında ilerleyip yazılım mühendisi olmayı hedefliyorum. Node.js'i programlama dil olarak kullanıyorum ve Express'i bir çerçeve olarak kullanıyorum. Ayrıca zaman zaman React kullanıyorum. Daha fazla bilgi için sosyal medya hesaplarıma göz atabilirsiniz.";
    }

    isTurkish = !isTurkish;
  }
