const { Pool } = require("pg"); // Import the Pool class from the pg

const pool = new Pool({
  // Create a new Pool instance
  user: "postgres",
  host: "localhost",
  database: "tasks_db",
  password: "What",
  port: 5432,
});

const createTasksTable = async () => {
  // Define an async function to create the tasks table
  const createTableQuery = `
        CREATE TABLE IF NOT EXISTS tasks (
            id SERIAL PRIMARY KEY,
            description VARCHAR(255) NOT NULL,
            status VARCHAR(50) NOT NULL DEFAULT 'incomplete'
        );
    `;

  try {
    // Try to create the tasks table
    await pool.query(createTableQuery); // Execute the create table query
    console.log("Tasks table created successfully"); // Log a success message
  } catch (error) {
    // Handle errors
    console.error("Error creating tasks table:", error); // Log any errors to the console
    throw error; // Throw the error
  }
};

module.exports = { pool, createTasksTable }; // Export the pool and createTasksTable function
