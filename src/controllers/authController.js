const User = require("../models/user");
const generateToken = require("../utils/generateToken");
const asyncHandler = require("../utils/asyncHandler");

exports.register = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    token: generateToken(user._id)
  });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ error: true, message: "Invalid credentials" });

  res.json({ token: generateToken(user._id) });
});
