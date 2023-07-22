const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const db = require('./config/mongoose');



// app.use(bodyParser.json()); // For parsing JSON data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes'));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
