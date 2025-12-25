const Answer = require("../models/answer");
const asyncHandler = require("../utils/asyncHandler");

exports.addAnswer = asyncHandler(async (req, res) => {
  const answer = await Answer.create(req.body);
  res.status(201).json(answer);
});
