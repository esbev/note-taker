const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))
app.use(require(path.join(__dirname, 'routes/notes.js')))

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen( PORT, () => {
  console.log(`Server running...`);
}).catch((err) => {
  console.log(err);
});