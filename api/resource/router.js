// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');

const router = express.Router();


router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(next);
});

router.post('/', async (req, res, next) => {
    const { resource_name } = req.body;

    if (!resource_name) {
        res.status(400).json({
            message: 'invaild resourece name'
        });
    } else {
        try {
            const newResource = await Resources.insert(req.body);
            res.status(201).json(newResource);
        } catch (error) {
            next(error);
        }
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customerMessage: 'Something went wrong inside the resource router',
        message: err.message,
        stack: err.stack,
    });
});


module.exports = router;