
exports.up = function(knex, Promise) {
    return knex.schema.createTable('g95', (student) => {
        student.increments('id')
        student.string('first')
        student.string('last')
        student.string('lat')
        student.string('long')
        student.string('favAnimal')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('g95')
};
