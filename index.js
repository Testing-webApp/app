const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

// Create an instance of Express
const app = express();

// Set the port
const port = process.env.PORT;

// Enable CORS middleware
app.use(cors());

// Define a route for POST requests
app.post('/brat', (req, res) => {
    res.send("HELLO");
});

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

