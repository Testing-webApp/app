const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const login = require('./routes/login.js');


dotenv.config();
const { token_verification } = require('./common_functions.js');

// Create an instance of Express
const app = express();

// Set the port
const port = process.env.PORT || 3002;

app.use(express.json())
app.use(cors())

/*
app.use(cors( {origin: 'http://localhost:3001',
  credentials: true,
  secure: true}));




app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  next();
});
*/

// Define a route for POST requests
app.post('/bla', (req, res) => {
    console.log(req.body)
    res.send(port);
});



app.use('/login', login);

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Define a catch-all route to serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});

