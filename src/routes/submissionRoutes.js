const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { submitQuiz } = require("../controllers/submissionController");

router.post("/:quizId", auth, submitQuiz);

module.exports = router;
