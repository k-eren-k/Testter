require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs').promises;
const axios = require('axios');

const app = express();
const port = 3000;

// ...

app.get('/', async (req, res) => {
  const defaultUsername = process.env.DEFAULT_USERNAME || 'DalgaGamePlay';

  try {
    const response = await axios.get(`https://api.github.com/users/${defaultUsername}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    });

    // ... (rest of the code remains the same)
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    res.render('index', { repositories: null, defaultUsername });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
