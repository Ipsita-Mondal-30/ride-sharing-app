import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("⚠️ MongoDB URI is missing in .env file");
}

let isConnected = false; 
export const connectDB = async () => {
  if (isConnected) {
    console.log("🟢 Using existing MongoDB connection");
    return;
  }
  
  try {
    const connection = await mongoose.connect(MONGO_URI, {
      dbName: "RideShare", 
      useUnifiedTopology: true,
    } as any);

    isConnected = connection.connection.readyState === 1;
    console.log("✅ MongoDB Connected to:", connection.connection.name);
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("Database connection failed!");
  }
};
