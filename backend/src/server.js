import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes.js";
import rateLimiter from "./middleware/Ratelimit.js";
import connectDB from "./config/db/mongodb.js";
const app = express();
const PORT = process.env.PORT || 5001;

connectDB();


dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(rateLimiter);
app.use(router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
