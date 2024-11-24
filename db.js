const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tasks_db",
  password: "What",
  port: 5432,
});

const createTasksTable = async () => {
  const createTableQuery = `
        CREATE TABLE IF NOT EXISTS tasks (
            id SERIAL PRIMARY KEY,
            description VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL DEFAULT 'incomplete'
        );
    `;

  try {
    await pool.query(createTableQuery);
    console.log("Tasks table created successfully");
  } catch (error) {
    console.error("Error creating tasks table:", error);
    throw error;
  }
};

module.exports = { pool, createTasksTable };
