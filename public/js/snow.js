  document.addEventListener('DOMContentLoaded', function () {
    const snowflakesContainer = document.body;
    let snowfallInterval = 5000; // Initial interval between snowfalls in milliseconds

    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      const size = Math.random() * 5 + 5; // Random size between 5 and 10 pixels
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
      snowflake.style.top = `-${Math.random() * window.innerHeight}px`; // Start above the viewport
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random falling speed

      snowflakesContainer.appendChild(snowflake);

      snowflake.addEventListener('animationiteration', () => {
        snowflake.remove(); // Remove the snowflake when it reaches the bottom
        createSnowflake(); // Create a new snowflake
      });
    }

    function increaseSnowfall() {
      createSnowflake();
      snowfallInterval -= 100; // Decrease the interval for more frequent snowfall
      setTimeout(increaseSnowfall, snowfallInterval);
    }

    // Create initial snowflakes
    for (let i = 0; i < 20; i++) {
      createSnowflake();
    }

    // Start increasing snowfall after 5 seconds
    setTimeout(increaseSnowfall, 5000);
  });
