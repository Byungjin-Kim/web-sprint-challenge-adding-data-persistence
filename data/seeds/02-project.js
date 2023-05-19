const projects = [
    {
        project_name: 'CRM for Businesses',
        project_description:
            'The Customer Relationship Management (CRM) solution is a robust software solution that empowers users to effectively manage relationships with customers, ensuring complete satisfaction and accuracy. This solution enables businesses to track customer interactions, manage sales, marketing, and service activities, and strengthen customer relationships while enhancing customer satisfaction.',
        project_completed: false
    },
    {
        project_name: 'Online Classroom App',
        project_description:
            'The Online Classroom App is an application that supports remote education and learning between learners and teachers. This app provides a platform for students to interact in real-time with teachers, share class materials, and create a learning environment.',
        project_completed: false
    },
    {
        project_name: 'Complete Node.js and Express Challenge',
        project_description:
            'Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!',
        project_completed: true
    },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects);
};
