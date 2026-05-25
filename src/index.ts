import express from 'express';
import tasksRouter from './routes/task.route';

const app = express();
app.use(express.json());

const PORT = 8000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));

app.get('/', (req, res) => {
    res.send('Create a new Task');
});

app.use('/task', tasksRouter);