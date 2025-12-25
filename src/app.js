const express = require("express");
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/submissions", submissionRoutes);

app.use(errorHandler);
module.exports = app;
