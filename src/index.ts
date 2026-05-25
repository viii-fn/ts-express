import express from 'express';

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));

app.get('/', (req, res) => {
    res.send('Home Page');
});