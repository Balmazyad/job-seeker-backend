const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();

// Use CORS Middleware
app.use(cors());

// Use JSON Middleware to handle POST requests
app.use(express.json());

const port = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Your endpoint is working!');
});

// New API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is sample data from the API' });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});