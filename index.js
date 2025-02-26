const express = require('express');
const app = express();

// Use Render's dynamic port OR default to 3000 for local development
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Your endpoint is working!');
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
