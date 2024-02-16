import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import "dotenv/config";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: [process.env.CLIENT_DEV, process.env.CLIENT_PROD],
        credentials: true,
    })
);

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

app.use("/api/v1/meetings", meetingRoutes);

// meeting routes
import eventRoutes from "./routes/event.routes.js";

app.use("/api/v1/events", eventRoutes);

// service routes
import serviceRoutes from "./routes/service.routes.js";

app.use("/api/v1/services", serviceRoutes);

// admin routes
import adminRoutes from "./routes/admin.routes.js";

app.use("/api/v1/admin", adminRoutes);

// ban routes
import banRoutes from "./routes/bannedUser.routes.js";

app.use("/api/v1/ban", banRoutes);

// report routes
import reportRoutes from "./routes/report.routes.js";

app.use("/api/v1/reports", reportRoutes);

// invite routes

import interviewRoutes from "./routes/invite.routes.js";

app.use("/api/v1/invites", interviewRoutes);

// ad routes
import adRoutes from "./routes/advertise.routes.js";

app.use("/api/v1/ad", adRoutes);

// testimonial routes
import testimonialRoutes from "./routes/testimonial.routes.js";

app.use("/api/v1/testimonials", testimonialRoutes);

export default app;
