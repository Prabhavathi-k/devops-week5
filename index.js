const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
 // res.send('Hello, Docker from Jenkins!');
  res.send('Hello, this is update1 of file from Jenkins!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
