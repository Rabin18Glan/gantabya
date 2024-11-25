import { Kafka, Consumer } from 'kafkajs';
import { EventType } from '../types/trip.types';

const kafka = new Kafka({
    clientId: 'qr-transit-system',
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

const consumer: Consumer = kafka.consumer({ groupId: 'trip-group' });

export const kafkaConsumer = async (): Promise<void> => {
    await consumer.connect();
    console.log('Kafka Consumer connected...');

    await consumer.subscribe({ topic: 'trip-events', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const event: EventType = JSON.parse(message.value?.toString() || '{}');
            console.log(`Received event from ${topic}:`, event);

            if (event.type === 'start') {
                console.log('Handle trip start:', event.data);
                // Add logic for trip start
            } else if (event.type === 'end') {
                console.log('Handle trip end:', event.data);
                // Add logic for trip end
            }
        },
    });
};
