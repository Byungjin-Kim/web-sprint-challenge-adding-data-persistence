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

async function createProject(project) {
    const [project_id] = await db('projects').insert(project);
    const newProject = await db('projects').where('project_id', project_id).first();

    if (newProject.project_completed === 1 || newProject.project_completed === true) {
        return { ...newProject, project_completed: true };
    } else {
        return { ...newProject, project_completed: false };
    }
}

module.exports = { getProjects, createProject }