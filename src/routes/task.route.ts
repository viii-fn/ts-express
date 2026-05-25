import express from 'express';
import { CreateTaskDto, UpdateTaskDto, DeleteTaskDto } from '../dto/task.dto';
import Task from '../models/task.model';

const router = express.Router();
let tasks: Task[] = [];

router.get('/', (req, res) => {
    res.status(200).send(tasks);
});

router.post('/', (req, res) => {
    const { title } = req.body as CreateTaskDto;
    const newTask = new Task(title);
    tasks.push(newTask);
    res.status(201).send(newTask);
});

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

router.delete('/', (req, res) => {
    const { id } = req.body as DeleteTaskDto;

    const taskToDelete = tasks.find(task => task.id === id);
    if (!taskToDelete) {
        return res.status(404).send('Task not found');
    }

    tasks = tasks.filter(task => task.id !== id);
    res.status(200).send('Task deleted');
})

export default router;