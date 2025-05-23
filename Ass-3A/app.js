// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start server
app.listen(port, () => {
  console.log(`Static website running at http://localhost:$port}`);
});
