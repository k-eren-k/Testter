<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <link rel="stylesheet" href="/css/main.css" />
  <link rel="stylesheet" href="/css/bar.css" />
  <link rel="stylesheet" href="/css/about.css" />
  <link rel="stylesheet" href="/css/proje.css" />
  <link rel="stylesheet" href="/css/right-scroll.css" />
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />

</head>

<body>
  <div class="bar" id="bar"><%- include('pages/bar.ejs') %></div>

  <img alt="Picture of the author" fetchpriority="high" loading="eager" width="600" height="600" decoding="async"
    data-nimg="1" class="flex justify-center items-center select-none fixed z--10 opacity-100"
    style="color: transparent; max-width: 100%; height: auto" src="https://www.sametcc.me/blobanimation.svg" />

  <p id="dynamicText">This is a centered paragraph on top of the image.</p>
  <div class="text-container" id="textContainer">
    <span class="text-container-span">I'm a Web Developer from Turkey</span>
    <a id="translateButton" onclick="translateText()">
      <span class="material-symbols-outlined" id="translateIcon">translate</span>
    </a>
  </div>
  <style>
    .fade-in-out {
      transition: opacity 1s;
    }
  </style>


  <div class="button-container">
    <button><i class="fa-brands fa-discord"></i></button>
    <button><i class="fa-brands fa-github"></i></button>
    <button><i class="fa-solid fa-envelope"></i></button>
  </div>


  <div class="proje"><%- include('pages/proje.ejs') %></div>
  <div class="about"><%- include('pages/about.ejs') %></div>
  <script src="/js/hello.js"></script>
  <script src="/js/date.js"></script>
  <script src="/js/scroll.js"></script>
  <script src="/js/bar.js"></script>
  <script src="/js/web.js"></script>
  <script src="/js/right-scroll.js"></script>
  <script src="/js/translate.js"></script>

  <script></script>
</body>
<div id="navigate-button" class="navigate-button">
  <i class="fa-light fa-chevron-up"></i>
</div>

</html>
