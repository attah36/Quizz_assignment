const Quiz = require("../models/quiz");
const asyncHandler = require("../utils/asyncHandler");

exports.createQuiz = asyncHandler(async (req, res) => {
  const quiz = await Quiz.create({ ...req.body, owner: req.user.id });
  res.status(201).json(quiz);
});

exports.getMyQuizzes = asyncHandler(async (req, res) => {
  res.json(await Quiz.find({ owner: req.user.id }));
});

exports.getQuiz = asyncHandler(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) throw { status: 404, message: "Quiz not found" };
  res.json(quiz);
});
