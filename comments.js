// Create web server and listen
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/comments', (req, res) => {
  const { body } = req;
  const { comment } = body;
  console.log(`Received comment: ${comment}`);

  res.send('Comment received!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


