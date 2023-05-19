// build your `Project` model here
function getProjects() {
    return Promise.resolve('awesome get project!')
}

// [GET] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]

// I have a question for this part. Do I have to make the empty array and push the example of response body? I am not sure.


// createProject
function createProject() {
    return Promise.resolve('great post project!')
}

// [POST] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}

//  same quiestion.... Do I have to make the empty array and push the example of response body? I am not sure.


module.exports = { getProjects, createProject }