const jsonwebtoken = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  const token = req.header("authorization").split(" ")[1];

  if (!token) {
    return res.json({ message: "Not token" });
  }

  const decodeToken = jsonwebtoken.verify(token, process.env.privateKey);

  req.user = decodeToken;

  next();
};
