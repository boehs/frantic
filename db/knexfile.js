import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const settings = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, 'db.sqlite3')
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, 'db.sqlite3')
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true
  }
};

export default settings