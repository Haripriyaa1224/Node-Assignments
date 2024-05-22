const express = require('express');

//setup express
const app = express();
const port = 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Check for validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  // Default to 500 Internal Server Error
  res.status(500).json({ error: 'Internal Server Error' });
});

// User registration route
app.post('/register', (req, res, next) => {
  const { firstName, lastName, password, email, phone } = req.body;
  
  // Validate first name
  if (!/^[A-Z][a-z]+$/.test(firstName)) {
    return next(new Error('First name must start with a capital letter'));
  }
  
  // Validate last name  
  if (!/^[A-Z][a-z]+$/.test(lastName)) {
    return next(new Error('Last name must start with a capital letter'));
  }
  
  // Validate password
  if (!/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password) || password.length < 8) {
    return next(new Error('Password must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long'));
  }
  
  // Validate email
  if (!/\S+@\S+\.\S+/.test(email)) {
    return next(new Error('Invalid email address'));
  }
  
  // Validate phone number
  if (phone.length < 10) {
    return next(new Error('Phone number must be at least 10 digits long'));
  }
  
  // If all validations pass, send a success response
  res.status(201).json({ message: 'User registered successfully', data: req.body });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});