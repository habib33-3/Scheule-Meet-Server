import { connectDB } from "./db/db.js";

connectDB().catch((err) => {
    console.error("Error starting express server:", err);
    process.exit(1);
});
