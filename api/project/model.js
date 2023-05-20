// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projects = await db('projects');

    const checkProjects = projects.map(pro => {
        if (pro.project_completed === 1) {
            return { ...pro, project_completed: true };
        } else {
            return { ...pro, project_completed: false };
        }
    });

    return checkProjects;
}

// [GET] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]

// I have a question for this part. Do I have to make the empty array and push the example of response body? I am not sure.


async function createProject(project) {
    const [project_id] = await db('projects').insert(project);
    const newProject = await db('projects').where('project_id', project_id).first();

    if (newProject.project_completed === 1 || newProject.project_completed === true) {
        return { ...newProject, project_completed: true };
    } else {
        return { ...newProject, project_completed: false };
    }
}

// [POST] /api/projects

// Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
// Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}

//  same quiestion.... Do I have to make the empty array and push the example of response body? I am not sure.


module.exports = { getProjects, createProject }