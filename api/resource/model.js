// build your `Resource` model here

function getResources() {
    return Promise.resolve('awesome get recources!')
}

function createResources() {
    return Promise.resolve('great post recources!')
}


module.exports = { getResources, createResources }