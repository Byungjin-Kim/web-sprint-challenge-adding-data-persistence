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
                .unique()
            table.text('project_description', 500)
            table.boolean('project_completed')
                .defaultTo(false)
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema



        .dropTableIfExists('projects')
};
