import express from 'express';
// Imports the route for the tasks
import tasksRouter from './routes/task.route';

const app = express();
app.use(express.json());

const PORT = 8000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));

app.get('/', (req, res) => {
    res.send('Create new task');
});

// Use the task route and assigns it to "/task"
app.use('/task', tasksRouter);