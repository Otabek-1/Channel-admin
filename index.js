const express = require('express');
require("dotenv").config()
const app = express();
const cors = require('cors');
const { readings } = require('./data');

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// /mock-reading endpoint: returns a random reading
app.get('/mock-reading', (req, res) => {
  if (!readings || readings.length === 0) {
    return res.status(404).json({ error: 'No readings found' });
  }
  const randomReading = readings[Math.floor(Math.random() * readings.length)];
  res.json(randomReading);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});