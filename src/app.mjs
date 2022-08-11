import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config({path: './.env'});
const port = process.env.PORT || 5000;
const host = '0.0.0.0';
const app = express();

const githubURL = 'https://api.github.com/users';

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/api/gituser/:username', (req, res) => {
    const githubURL = `https://api.github.com/users/${req.params.username}`;
    axios.get(githubURL).then(response => {
        res.status(200).json(response.data);
    }).catch((err) => {
        console.log(err);
        res.status(404).send('Error');
    });
});

app.listen(port, host, (err) => {
    if(err) console.log(err);
    else {
        console.log('Server listening on port', port);
    }
});

