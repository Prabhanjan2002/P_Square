import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/helpers/generateTokenAndSetCookies.js";

const signupUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      username,
      password: hashedpassword,
    });
    await newUser.save();
    if (newUser) {
      generateTokenAndSetCookies(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
      });
    } else {
      res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error in signup: ", error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    ); ////user?.password it means if user not found then it will return false then in the end empty string means if no user founf=d the password is compared with null string

    if (!user || !isPasswordCorrect)
      return res.status(400).json({ message: "Invalid username or password" });
    generateTokenAndSetCookies(user._id, res);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error in loginUser", error.message);
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxlen: 1 });
    res.status(200).json({ message: "user logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in logout", error.message);
  }
};

export { signupUser, loginUser, logoutUser };
