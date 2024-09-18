import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "UserName already exists" });
    }

    // HASHING PASSWORD BY USING BCRYPTJS

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // AVTARS
    // https://robohash.org/${...}
    const userProfilePic = `https://robohash.org/${userName}`;

    // CREATING NEW USER

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: userProfilePic,
    });

    if (newUser) {
      // SAVING USER
      await newUser.save();
      // GENERATE TOKEN
      generateTokenAndSetCookie(newUser._id, res);
      // GIVING RESPONSE TO BROWSER
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid User's Data" });
    }
  } catch (error) {
    console.log("Error In Signup Controller", error.message);

    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!userName || !password) {
      res.status(400).json({ error: "Invalid Username or Password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error In Login Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({message: "You Have Been Logout"})
  } catch (error) {
    console.log("Error In Logout Controller", error.message);
    res.status(500).json({error: "Internal Server Error"})
    
  }
};
