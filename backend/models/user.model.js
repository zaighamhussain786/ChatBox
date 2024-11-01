import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },

    userName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },

    profilePic: {
      type: String,
      default: "",
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
