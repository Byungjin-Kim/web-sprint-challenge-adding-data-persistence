/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id');
            table.string('project_name', 200)
                .notNullable();
            table.text('project_description', 500)
            table.boolean('project_completed')
                .defaultTo(false);
        })
        .createTable('resources', table => {
            table.increments('resource_id');
            table.string('resource_name', 200)
                .notNullable()
                .unique();
            table.text('resource_description', 500);
        })
        .createTable('tasks', table => {
            table.increments('task_id');
            table.string('task_description')
                .notNullable();
            table.text('task_notes', 500);
            table.boolean('task_completed')
                .defaultTo(false);
            table.integer('project_id')
                .notNullable()
                .unsigned()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
        })
        .createTable('project_resources', table => {
            table.increments('project_resources_id');
            table.integer('project_id')
                .notNullable()
                .unsigned()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
            table.integer('resource_id')
                .notNullable()
                .unsigned()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
        });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
}
