// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(next);
});

router.post('/', async (req, res, next) => {
    const { task_description, project_id } = req.body;

    if (!task_description) {
        res.status(400).json({
            message: 'invaild task description'
        });
    } else if (!project_id) {
        res.status(404).json({
            message: 'invalid project id'
        });
    } else {
        try {
            const newTask = await Tasks.createTasks(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            next(error);
        }
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customerMessage: 'Something went wrong inside the task router',
        message: err.message,
        stack: err.stack,
    });
});


module.exports = router;


