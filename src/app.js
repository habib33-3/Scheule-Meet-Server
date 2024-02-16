import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: [process.env.CLIENT_DEV, process.env.CLIENT_PROD],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("server started");
});



// import routers
export default app;
