const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs').promises;
const axios = require('axios'); // Import axios for making HTTP requests
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({
  auth: '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', // Replace with your GitHub personal access token
});

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'lib', 'contact-links.json'), 'utf-8');
    const contactLinks = JSON.parse(data);
    res.locals.contactLinks = contactLinks; // Make contactLinks available in EJS templates
    next();
  } catch (error) {
    console.error('Error loading contact links:', error);
    res.locals.contactLinks = {};
    next();
  }
});

app.get('/', async (req, res) => {
  const defaultUsername = 'DalgaGamePlay';

  try {
    const response = await axios.get(`https://api.github.com/users/${defaultUsername}/repos`, {
      headers: {
        Authorization: `Bearer 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`,
      },
    });
    const repositories = response.data.map(repo => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stargazersCount: repo.stargazers_count,
      forksCount: repo.forks_count,
      homepage: repo.homepage,
    }));
    res.render('index', { repositories, defaultUsername });
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    res.render('index', { repositories: null, defaultUsername });
  }
});



app.listen(port, () => {
  console.log(`Sunucu ${port} portunda dinleniyor`);
});
