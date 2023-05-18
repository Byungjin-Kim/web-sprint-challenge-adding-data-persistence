// build your `/api/projects` router here
const express = require('express');
// const Project = require('./model');

const router = express.Router();


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customerMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    });
});


module.exports = router;