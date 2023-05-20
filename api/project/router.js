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

router.post('/', async (req, res, next) => {
    const { project_name } = req.body;

    if (!project_name) {
        res.status(400).json({
            message: 'invaild project name'
        });
    } else {
        try {
            const newProject = await Project.createProject(req.body);
            res.status(201).json(newProject);
        } catch (error) {
            next(error);
        }
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customerMessage: 'Something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = router;