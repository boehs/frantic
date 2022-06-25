/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    // Primitives
    .createTable('plugin', function(table) {
      table.increments('id')
      table.string('name')
      table
        .string('for')
        .comment("the platform this plugin is for")
      table
        .string("description")
        .comment("more info")
    })
    .createTable('collector',function(table) {
      table.comment('plugins define collectors')
      table.increments('id')
      table
        .string('name',255)
        .notNullable()
      table
        .integer('for')
        .references('plugin.id')
      table
        .string("description")
        .comment("more info")
      table
        .string('icon')
        .comment('icon class (fa)')
    })
    .createTable('collection', function(table) {
      table.comment('collections the user has opted into, instances of a collector')
      table.increments('id')
      table
        .string('name',255)
        .notNullable()
      table
        .integer('instanceOf')
        .references('collector.id')
    })
    // Tags for collections
    .createTable('tag', function(table) {
      table.increments('id')
      table
        .string('key',64)
      table
        .string('value',64)
      .unique(['key','value'])
    })
    .createTable('collectionTag', function(table) {
      table
        .integer('tag')
        .references('tag.id')
      table
        .integer('collection')
        .references('collection.id')
    })
    // Media storage
    .createTable('media', function(table) {
      table.comment("internal bianary file register. Do not modify yourself.")
      table.increments('id')
      table
        .string('hash',64)
        .comment('SHA-256')
        .unique()
      table
        .decimal("size")
        .comment("file size in KB")
    })
    .createTable('mediaLock', function(table) {
      table.comment('Media locks (by collection)')
      table
        .integer('collection')
        .references('collection.id')
      table
        .integer('media')
        .references('media.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
