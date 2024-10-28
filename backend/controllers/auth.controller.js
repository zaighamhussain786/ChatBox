import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (fullName.length < 3) {
      return res
        .status(400)
        .json({ error: "Full name must be atleast 3 characters" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "UserName already exists" });
    }

    if (userName.length < 3) {
      return res
        .status(400)
        .json({ error: "Username must be atleast 3 characters" });
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
      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: "Invalid User's Data" });
    }
  } catch (error) {
    console.log("Error In Signup Controller", error.message);

    return res.status(500).json({ error: "Internal Server Error" });
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

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }

    generateTokenAndSetCookie(user._id, res);

    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error In Login Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "You Have Been Logout" });
  } catch (error) {
    console.log("Error In Logout Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
