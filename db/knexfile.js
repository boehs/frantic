// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite3"
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true
  }
};
