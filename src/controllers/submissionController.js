const Question = require("../models/question");
const Answer = require("../models/answer");
const grade = require("../utils/grading");
const asyncHandler = require("../utils/asyncHandler");

exports.submitQuiz = asyncHandler(async (req, res) => {
  const questions = await Question.find({ quiz: req.params.quizId });
  let correct = 0;

  for (const q of questions) {
    const correctAnswers = await Answer.find({ question: q._id, isCorrect: true });
    const submitted = req.body.answers[q._id] || [];
    if (JSON.stringify(correctAnswers.map(a => a._id)) === JSON.stringify(submitted))
      correct++;
  }

  const percent = (correct / questions.length) * 100;
  res.json({
    correct_answers: correct,
    total_questions: questions.length,
    score_percentage: percent,
    grade: grade(percent)
  });
});
