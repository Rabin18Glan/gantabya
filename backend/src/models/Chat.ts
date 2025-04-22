import mongoose, { Schema, Document } from 'mongoose';

// Define the Chat interface
export interface IChat extends Document {
  authorId: string;
  authorName: string;
  message: string;
  createdAt: Date;
}

// Define the Chat Schema
const ChatSchema: Schema = new Schema<IChat>({
  authorId: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the current date and time
  },
});

// Create the Chat model
const Chat = mongoose.model<IChat>('Chat', ChatSchema);

export default Chat;
