exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("npo_id").notNullable();

    table
      .foreign("npo_id")
      .references("id")
      .inTable("npos");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
