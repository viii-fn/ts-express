import express from 'express';

// Importing all DTOs
import { CreateTaskDto, UpdateTaskDto, DeleteTaskDto } from '../dto/task.dto';

// Importing the Task shape interface
import Task from '../models/task.model';

// Imports the router to signify that this is a route
const router = express.Router();

// Specifies the type of array that the "tasks" is made in
let tasks: Task[] = [];

router.get('/', (req, res) => {
    res.status(200).send(tasks);
});

// The post route for creating a task
router.post('/', (req, res) => {
    const { title } = req.body as CreateTaskDto;
    const newTask = new Task(title);
    tasks.push(newTask);
    res.status(201).send(newTask);
});

// The patch route for updating a task
router.patch('/', (req, res) => {
    const { id, title, isCompleted } = req.body as UpdateTaskDto;
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.title = title;
        task.isCompleted = isCompleted;
        return res.status(200).send.apply(task);
    }
    else {
        res.status(404).send('Task not found');
    }
});

// The delete route for deleting a task
router.delete('/', (req, res) => {
    const { id } = req.body as DeleteTaskDto;

    const taskToDelete = tasks.find(task => task.id === id);
    if (!taskToDelete) {
        return res.status(404).send('Task not found');
    }

    tasks = tasks.filter(task => task.id !== id);
    res.status(200).send('Task deleted');
})

// The default export for exporting the router
export default router;