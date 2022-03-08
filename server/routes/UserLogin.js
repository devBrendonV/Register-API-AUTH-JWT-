const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { validateDataLogin } = require("../validateData");

router.post("/", async (req, res) => {
  const { error } = validateDataLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email not found");

  const verificarSenha = await bcrypt.compare(req.body.senha, user.senha);
  if (!verificarSenha) return res.status(400).send("Wrong password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.header("auth-token", token).send(token); 
});

module.exports = router;
