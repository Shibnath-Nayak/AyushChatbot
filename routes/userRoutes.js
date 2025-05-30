const express = require('express');
const User = require('./models/User');
const app = express();

app.use(express.json()); // Middleware to parse JSON

app.post('/addUser', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

