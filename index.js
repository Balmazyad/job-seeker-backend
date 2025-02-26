const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();

// Use CORS Middleware
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Your endpoint is working!');
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});