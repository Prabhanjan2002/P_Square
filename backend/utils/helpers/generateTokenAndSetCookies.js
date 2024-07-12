import jwt from "jsonwebtoken";

const generateTokenAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httponly: true, //to make more secure
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days like 15 days 24 hours 60 minutes ...
    sameSite: "strict", //csrf
  });

  return token;
};

export default generateTokenAndSetCookies;
