import { connectDB } from "./db/db.js";
import "dotenv/config";

const envVariables = [
    "DB_USER",
    "DB_PASS",
    "ACCESS_TOKEN",
    "CLIENT_DEV",
    "CLIENT_PROD",
    "MAIL_USER",
    "MAIL_PASS",
];

envVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
        console.error(
            `Error: Environment variable ${envVar} is not set. Please refer to the Readme file for details. Exiting...`
        );
        process.exit(1);
    }
});

connectDB().catch((err) => {
    console.error("Error starting express server:", err);
    process.exit(1);
});
