// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(next);
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customerMessage: 'Something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;