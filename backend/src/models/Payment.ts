import mongoose, { Document, Schema } from 'mongoose';

interface IPayment extends Document {
    tripId: mongoose.Schema.Types.ObjectId;
    amount: number;
    paymentStatus: 'pending' | 'completed';
    paymentMethod: string;
    transactionDate: Date;
}

const paymentSchema: Schema = new Schema(
    {
        tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
        amount: { type: Number, required: true },
        paymentStatus: { type: String, enum: ['pending', 'completed'], required: true },
        paymentMethod: { type: String, required: true },
        transactionDate: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Payment = mongoose.model<IPayment>('Payment', paymentSchema);

export default Payment;
