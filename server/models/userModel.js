import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    is2FAEnabled: {
      type: Boolean,
      default: false,
    },
    twoFASecret: {
      type: String,
      default: null,
    },
  },
  {
    timeStamps: true,
  },
);

const User = mongoose.model("user", userSchema);
export default User;
