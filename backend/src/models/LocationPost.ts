import mongoose, { Schema, Document } from 'mongoose';

// Define the LngLat interface
interface LngLat {
  lng: number;
  lat: number;
}

// Define the ILocationPost interface
export interface ILocationPost extends Document {
  authorId: string;
  state: string;
  stateType: "concerts" | "events" | "traffics" | "accidents" | "disaster";
  location: LngLat;
  postExpireOn: Date; // Now required
  createdAt: Date;
}

// Define the LocationPost Schema
const LocationPostSchema: Schema<ILocationPost> = new Schema({
  authorId: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  stateType: {
    type: String,
    enum: ["concerts", "events", "traffics", "accidents", "disaster"],
    required: true,
  },
  location: {
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
  },
  postExpireOn: {
    type: Date,
    required: true, // Set as required
    index: { expires: 0 }, // TTL Index for automatic deletion
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save Hook for Default Expiry Logic (Optional)
LocationPostSchema.pre('save', function (next) {
  if (!this.postExpireOn) {
    // Default expiry logic: e.g., set to 7 days from creation
    this.postExpireOn = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  }
  next();
});

// Create the LocationPost model
const LocationPost = mongoose.model<ILocationPost>('LocationPost', LocationPostSchema);

export default LocationPost;
