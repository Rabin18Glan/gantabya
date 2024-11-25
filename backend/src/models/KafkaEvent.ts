import mongoose, { Document, Schema } from 'mongoose';

interface IKafkaEvent extends Document {
    eventType: 'start' | 'end';
    data: Record<string, any>;
    createdAt: Date;
}

const kafkaEventSchema: Schema = new Schema(
    {
        eventType: { type: String, enum: ['start', 'end'], required: true },
        data: { type: Schema.Types.Mixed, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const KafkaEvent = mongoose.model<IKafkaEvent>('KafkaEvent', kafkaEventSchema);

export default KafkaEvent;
