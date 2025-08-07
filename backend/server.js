import express from 'express';
import { PORT } from './config.js';
import path from 'path';
import users from './MOCK_DATA.json' with { type: 'json' };

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(), '../frontend/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(path.resolve(), '../frontend/pages/login.html'));
});

app.get('/users', (req, res) => {
  const html = users.map(user => `
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

app.route('/users/:id')
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
      // Return HTML for single user:
      const html = `
        <div>
          <h2>${user.first_name} ${user.last_name}</h2>
          <p>Email: ${user.email}</p>
          <p>City: ${user.city}</p>
          <p>Country: ${user.country}</p>
        </div>
      `;
      res.send(html);
    } else {
      res.status(404).send('<h1>User not found</h1>');
    }
  })
  .post((req, res) => {
    res.send('pending post request');
  })
  .patch((req, res) => {
    res.send('pending patch request');
  })
  .delete((req, res) => {
    res.send('pending delete request');
  });
 
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.route('/api/users/:id')
.get((req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === parseInt(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
})
.post((req,res) => {
  res.send('pending post request');
})
.patch((req,res) => {
  res.send('pending patch request');
})
.delete((req,res) => {
  res.send('pending delete request');
})

app.listen(PORT);
console.log(`Express server running at http://localhost:${PORT}/`); 