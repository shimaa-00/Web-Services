import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/usersRoute";
import articlesRoute from "./routes/articlesRoute";
import commentsRoute from "./routes/commentsRoute";
import hateoasRoute from "./routes/hateoasRoute";
import cookieParser from "cookie-parser";
import cors from "cors";
import { get_all_users } from "./controllers/UserController";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected ");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/", hateoasRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/articles", articlesRoute);
app.use("/api/v1/comments", commentsRoute);
app.get("/api/v1/:user_id/comments/", get_all_users);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8888, () => {
  connect();
  console.log("Connected");
});
