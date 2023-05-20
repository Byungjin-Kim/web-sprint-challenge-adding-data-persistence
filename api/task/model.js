// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTasks() {
    const tasks = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')


    const checkTasks = tasks.map(task => {
        if (task.task_completed === 1) {
            return { ...task, task_completed: true };
        } else {
            return { ...task, task_completed: false };
        }
    });

    return checkTasks;
}

async function createTasks(task) {
    const [task_id] = await db('tasks').insert(task);
    const newTask = await db('tasks').where('task_id', task_id).first();

    if (newTask.task_completed === 1 || newTask.task_completed === true) {
        return { ...newTask, task_completed: true };
    } else {
        return { ...newTask, task_completed: false };
    }
}

module.exports = { getTasks, createTasks };