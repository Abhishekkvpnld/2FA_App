import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: "user not found" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) return done(null, user);
      else return done(null, false, { message: "invalid credentials" });
    } catch (err) {
      return done(err);
    }
  }),
);


passport.serializeUser((user,done)=>{
    console.log("Serializing user:", user);
    done(null,user._id);
})

passport.deserializeUser(async (_id, done) => {
  try {
    console.log("Deserializing user with ID:", _id);
    const user = await User.findById(_id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});