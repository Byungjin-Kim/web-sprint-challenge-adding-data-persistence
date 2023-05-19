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

router.post('/', (req, res, next) => {
    Tasks.createTasks(req.body)
        .then(tasks => {
            res.status(201).json(tasks);
        })
        .catch(next);
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customerMessage: 'Something went wrong inside the task router',
        message: err.message,
        stack: err.stack,
    });
});


module.exports = router;


