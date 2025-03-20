import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
  destination: String,
  departureDate: Date,
  returnDate: Date,
  availableSeats: Number,
  costSharing: String,
  specialConditions: String,
});

const Ride = mongoose.models.Ride || mongoose.model("Ride", RideSchema, "rides"); // 👈 Collection name: "rides"

export default Ride;
