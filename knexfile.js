export default {
  development: {
    client: "postgresql",
    connection: {
      database: "event_attendance",
      user: "postgres",
      password: "postgres",
      host: "localhost",
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
}
