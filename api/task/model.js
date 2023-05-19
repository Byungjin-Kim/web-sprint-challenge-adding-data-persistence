// build your `Task` model here
function getTasks() {
    return Promise.resolve('awesome get task!')
}

function createTasks() {
    return Promise.resolve('great post task!')
}


module.exports = { getTasks, createTasks };