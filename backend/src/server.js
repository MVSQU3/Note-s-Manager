import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes.js";
// import rateLimiter from "./middleware/Ratelimit.js";
import connectDB from "./config/db/mongodb.js";
import path from "path";
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

connectDB();

dotenv.config();
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());
// app.use(rateLimiter);
app.use(router);

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "..", "client", "frontend", "dist"))
  );
    app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "..", "client", "frontend", "dist", "index.html")
    );
  });
}

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
