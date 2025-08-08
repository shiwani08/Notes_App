import express from 'express';
import mongoose from 'mongoose';
import { MONGOURL, PORT } from './config.js';
import path from 'path';
import User from './models/users.models.js'; //

const app = express();

// Middlewares
app.use(express.json());

// inbuilt 
app.use(express.urlencoded({ extended: false }));

// Custom header middleware
app.use((req, res, next) => {
  res.setHeader('X-Custom-Header', 'Shiwani is awesome');
  next();
});

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(), '../frontend/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(path.resolve(), '../frontend/pages/login.html'));
});

// HTML view of mock data (static)
app.get('/users', (req, res) => {
  const html = usersData.map(user => `
    <div>
      <h2>${user.first_name} ${user.last_name}</h2>
      <p>Email: ${user.email}</p>
      <p>City: ${user.city}</p>
      <p>Country: ${user.country}</p>
    </div>
  `).join('');

  res.send(`
    <html>
      <head><title>Users List</title></head>
      <body>
        ${html}
      </body>
    </html>
  `);
});

// // HTML for single mock user (static)
app.route('/users/:id')
  .get((req, res) => {
    const id = req.params.id;
    const user = usersData.find(user => user.id === parseInt(id));
    if (user) {
      res.send(`
        <div>
          <h2>${user.first_name} ${user.last_name}</h2>
          <p>Email: ${user.email}</p>
          <p>City: ${user.city}</p>
          <p>Country: ${user.country}</p>
        </div>
      `);
    } else {
      res.status(404).send('<h1>User not found</h1>');
    }
  })
  .post((req, res) => res.send('pending post request'))
  .patch((req, res) => res.send('pending patch request'))
  .delete((req, res) => res.send('pending delete request'));

// Get all users from DB
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch from MongoDB
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Get a single user from DB
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // find by MongoDB _id
    if (user) res.json(user);
    else res.status(404).json({ error: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});

// Add a new user to DB (Dynamic data)
app.post('/api/users', async (req, res) => {
  try {
    // req.body should now have the JSON or form fields
    const newUser = new User(req.body);

    await newUser.save();
    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });

  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Update user in DB
app.patch('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedUser) res.json(updatedUser);
    else res.status(404).json({ error: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// Delete user from DB
app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) res.json({ message: 'User deleted successfully' });
    else res.status(404).json({ error: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
});
