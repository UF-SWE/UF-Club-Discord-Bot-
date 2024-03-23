// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Perform authentication logic here
  console.log('Login with:', email, password);
  // Send response
  res.json({ message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});