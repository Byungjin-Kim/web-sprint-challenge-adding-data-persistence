const resources = [
    {
        resource_name: 'U.S. News & World Report',
        resource_description:
            'U.S. News & World Report is a widely recognized American media company that provides news, analysis, and rankings across various sectors, including education, healthcare, business, and more.'
    },
    {
        resource_name: 'Europass Teacher Academy',
        resource_description:
            'Europass Teacher Academy is an education and professional development program specifically designed for teachers.',
    },
    {
        resource_name: 'ChatGPT',
        resource_description:
            'ChatGPT is a natural language processing model developed by OpenAI. It is based on a pre-trained transformer model.',
    },
    {
        resource_name: 'Bloomtech',
        resource_description:
            'Best online coding bootcamp',
    },
]

exports.seed = async function (knex) {
    await knex('resources').insert(resources);
};