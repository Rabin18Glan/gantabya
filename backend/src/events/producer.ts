import { Kafka, Producer } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'qr-transit-system',
    brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

const producer: Producer = kafka.producer();

export const kafkaProducer = async (): Promise<void> => {
    await producer.connect();
    console.log('Kafka Producer connected...');
};

export const produceEvent = async (topic: string, message: object): Promise<void> => {
    await producer.send({
        topic,
        messages: [{ value: JSON.stringify(message) }],
    });
};
