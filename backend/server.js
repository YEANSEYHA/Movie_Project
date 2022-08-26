import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import auth from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";
/* import errorHandler from "./middleware/error.js"; */

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Cookie parser
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", auth);

//Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT} `)
);
