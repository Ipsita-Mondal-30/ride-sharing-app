import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../lib/mongodb";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
    res.status(200).json({ message: "🟢 MongoDB Connected Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "❌ MongoDB Connection Failed", error });
  }
}
