const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const requestLogger = require("./midleware/requestLogger");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(requestLogger);
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "LMS backend is running",
  });
});

app.use("/api/auth", authRoutes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, (error) => {
      if (error) {
        const message =
          error.code === "EADDRINUSE"
            ? `Port ${PORT} is already in use. Stop the other backend before starting this one.`
            : error.message;

        console.error("Failed to start server:", message);
        process.exit(1);
      }

      console.log(
        `Server is running at http://localhost:${PORT} (PID ${process.pid})`,
      );
      console.log(
        "Request logging enabled: --> incoming, <-- completed response",
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
