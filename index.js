
const express = require('express');
const cors = require('cors');
const dotenv = require ('dotenv');
const path = require('path')
dotenv.config();

// Get the directory name of the current module


const port = process.env.PORT || 3002;
const app = express();

app.use(cors());

app.post('/', (req, res) => {
    res.send("HELLO");
});

// Serve static files from the client build directory
app.use(express.static('./client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
