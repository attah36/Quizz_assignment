const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { createQuiz, getMyQuizzes, getQuiz } = require("../controllers/quizController");

router.post("/", auth, createQuiz);
router.get("/", auth, getMyQuizzes);
router.get("/:id", auth, getQuiz);

module.exports = router;
