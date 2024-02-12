import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3002;
const app = express();

app.use(cors());

app.post('/', (req, res) => {
    res.send("HELLO");
});

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
