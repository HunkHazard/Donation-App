const jwt = require("jsonwebtoken");

function verifyToken(req) {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    // res.status(401).json({ message: "ERROR: No Token" });
    console.log("ERROR: No Token");
    throw new Error("ERROR: No Token");
  } else {
    try {
      const email = jwt.verify(token, "my_key").email;
      // return email of logged in user
      return email;
    } catch (err) {
      //   res.status(401).json({ message: "ERROR: Invalid Token" });
      console.log("ERROR: Invalid Token");
      throw new Error("ERROR: Invalid Token");
    }
  }
}

module.exports = verifyToken;
