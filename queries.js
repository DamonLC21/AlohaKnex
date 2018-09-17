const database = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(database)

module.exports = {
    getAll() {
        return knex.select().from('g95').orderBy('id', 'ascend')
    },
    getById(id) {
        return knex('g95')
            .where('id', id)
    },
    create(newPost) {
        return knex('g95')
            .insert(newPost)
    },
    updateStudent(id, student) {
        return knex('g95')
            .where('id', id)
            .update(student)
    },
    delete(id) {
        return knex('g95')
            .where('id', id)
            .delete()
    }
}