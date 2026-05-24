import express from 'express';

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});