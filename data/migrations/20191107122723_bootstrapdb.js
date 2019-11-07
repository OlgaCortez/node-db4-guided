exports.up = function(knex) {
  return knex.schema 
    .createTable('species', tbl => {
        //The type of Primary Key is : integer without negative values, also called unsigned.
        tbl.increments();

        tbl.string('name', 255).notNullable();
    })
    .createTable('animals', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();

        //define our Foreign key
        tbl
        .integer('species_id')
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT') //about deleteing the record from the primary key table. values could be 'RESTRICT', 'DO ACTION', 'SET NULL', 'CASCADE'
        .onUpdate('CASCADE'); // about changing the value of the primary key.
    })
    .createTable('zoos', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
        tbl.string('address',255);
    })
    .createTable('animal_zoos', tbl => {
        tbl.increments();

        tbl.date('from').notNullable();
        tbl.date('to');

        tbl
        .integer('zoo_id')
        .unsigned()
        .references('id')
        .inTable('zoo')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE');

        tbl
        .integer('animal_id')
        .unsigned()
        .references('id')
        .inTable('animal')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE');

    });
};

exports.down = function(knex) {
  
};

//knex... command not found: knex -> npm knex ... or install knex globally with npm i -g knex
