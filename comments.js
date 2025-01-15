// Create web server
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Serve static files
app.use(express.static('public'));

// Import comments from comments.json
const comments = require('./comments.json');