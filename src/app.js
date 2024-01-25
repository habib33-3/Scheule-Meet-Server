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
    res.send("server started  ");
});

// import routers

// user routes
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

// blog routes
import blogRouter from "./routes/blog.routes.js";

app.use("/api/v1/blogs", blogRouter);

// meeting routes
import meetingRoutes from "./routes/meeting.routes.js";

app.use("api/v1/meetings", meetingRoutes);

export default app;
