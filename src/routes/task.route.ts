import express from 'express';
import { CreateTaskDto } from '../dto/task.dto';
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

export default router;