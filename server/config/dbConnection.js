import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("database connected successfully...")
  } catch (err) {
    console.log("Error connecting to database", err);
    process.exit(1);
  }
};

export default dbConnect;
