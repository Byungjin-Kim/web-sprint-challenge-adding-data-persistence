const tasks = [
    // CRM for Businesses
    {
        task_description: 'Design Data Model and User Interface.',
        task_notes:
            'Design the database tables or models to store tasks and a user interface that allows users to create, edit, delete, and track tasks.',
        project_id: 1
    },
    {
        task_description: 'Make Task creation and collaboration plan',
        task_notes:
            'Implement the functionality for users to create tasks and assign them to specific team as needed.',
        project_id: 1
    },
    {
        task_description: 'reporting/analysis',
        task_notes:
            'Implement reporting and analysis features for task-related data.',
        project_id: 1
    },

    // Online Classroom App
    {
        task_description: 'Requirement Analysis',
        project_id: 2
    },
    {
        task_description: 'UI/UX Design',
        project_id: 2
    },
    {
        task_description: 'Feature Development',
        project_id: 2
    },
    {
        task_description: 'Database Design',
        project_id: 2
    },

    //Complete Node.js and Express Challenge
    {
        task_description: 'Design and Build API Endpoints',
        task_notes: 'This is where the magic happens!',
        task_completed: true,
        project_id: 3
    },
]

exports.seed = async function (knex) {
    await knex('tasks').insert(tasks);
};