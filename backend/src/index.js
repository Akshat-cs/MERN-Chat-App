import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import authRouter from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import messageRouter from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

const PORT = process.env.PORT;

// middlewares
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// routes
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  connectDB();
});
