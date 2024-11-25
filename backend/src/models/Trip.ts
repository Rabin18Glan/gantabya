import mongoose, { Document, Schema } from 'mongoose';

interface ITrip extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    startLocation: string;
    endLocation: string;
    startTime: Date;
    endTime: Date;
    distance: number;
    status: 'ongoing' | 'completed';
}

const tripSchema: Schema = new Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        startLocation: { type: String, required: true },
        endLocation: { type: String, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date },
        distance: { type: Number, required: true },
        status: { type: String, enum: ['ongoing', 'completed'], required: true },
    },
    { timestamps: true }
);

const Trip = mongoose.model<ITrip>('Trip', tripSchema);

export default Trip;
