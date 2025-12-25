const Question = require("../models/question");
const asyncHandler = require("../utils/asyncHandler");

exports.addQuestion = asyncHandler(async (req, res) => {
  const question = await Question.create(req.body);
  res.status(201).json(question);
});
