const database = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(database)

module.exports = {
    getAll(){
        return knex.select().from('g95')
    },
    getById(id){
        return knex('g95')
          .where('id', id)
       },
    create(newPost){
        return knex('g95')
        .insert(newPost)
    }
}