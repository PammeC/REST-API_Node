const express = require('express');
const app = express();
app.use(express.json());

// REST Endpoints
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Janee' }
    ];
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const newUser = req.body;
    // Add user to database logic here
    res.status(201).json(newUser);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
