import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function checkConnection() {
  try {
    // Run a simple query to check the connection
    const result = await pool.query("SELECT 1+1 AS result");

    console.log("✅ Database connection successful!", result.rows);
  } catch (error) {
    console.error("❌ Database connection failed!", error);
  } finally {
    await pool.end(); // Close the connection pool
  }
}

// Execute connection check
// checkConnection();
export default checkConnection;
