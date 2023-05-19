// build your `Task` model here
function getTasks() {
    return Promise.resolve('awesome get recources!')
}

function createTasks() {
    return Promise.resolve('great post recources!')
}


module.exports = { getTasks, createTasks };