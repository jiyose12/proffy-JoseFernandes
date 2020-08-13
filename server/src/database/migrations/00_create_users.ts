import Knex from 'knex'

export const up = async (knex: Knex) => {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()

        table.string('name').notNullable()
        table.string('avatar')
        table.string('whatsApp')
        table.string('bio')
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.enum('role', ['professor', 'aluno']).defaultTo('aluno')
    })
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('users')
}