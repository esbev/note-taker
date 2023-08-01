const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(require(path.join(__dirname, 'routes/notes.js')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.use( (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.listen( PORT, () => {
  console.log(`Server running...`);
});