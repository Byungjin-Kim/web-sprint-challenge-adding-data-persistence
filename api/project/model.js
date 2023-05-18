// build your `Project` model here
function getProjects() {
    return Promise.resolve('awesome get project!')
}

// [GET] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]


// createProject
function createProject() {
    return Promise.resolve('great post project!')
}

// [POST] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}


module.exports = { getProjects, createProject }