/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = async function (knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name', 200)
                .notNullable()
            table.text('project_description', 500)
            table.boolean('project_completed')
                .defaultTo(false)
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name', 200)
                .notNullable()
                .unique();
            table.text('resource_description');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema


        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
