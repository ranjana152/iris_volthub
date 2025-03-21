import express from 'express';
import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const db = drizzle(process.env.DATABASE_URL!);


app.get("/check-db", async (req, res) => {
    try {
        res.json({ success: true, message: "Database connection is successful" });
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ success: false, message: "Database connection failed", error: error.message });
    }
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});