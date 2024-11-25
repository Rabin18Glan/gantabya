import { Request, Response } from 'express';
import { produceEvent } from '../events/producer';

interface Trip {
    userId: string;
    startLocation?: string;
    startTime?: Date;
    endLocation?: string;
    endTime?: Date;
}

export const startTrip = async (req: Request, res: Response): Promise<void> => {
    const { userId, startLocation } = req.body;

    const trip: Trip = {
        userId,
        startLocation,
        startTime: new Date(),
    };

    // Publish event to Kafka
    await produceEvent('trip-events', { type: 'start', data: trip });

    res.status(200).json({ message: 'Trip started!', trip });
};

export const endTrip = async (req: Request, res: Response): Promise<void> => {
    const { userId, endLocation } = req.body;

    const trip: Trip = {
        userId,
        endLocation,
        endTime: new Date(),
    };

    // Publish event to Kafka
    await produceEvent('trip-events', { type: 'end', data: trip });

    res.status(200).json({ message: 'Trip ended!', trip });
};
