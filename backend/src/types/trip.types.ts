export interface EventType {
    type: 'start' | 'end';
    data: TripData;
}

export interface TripData {
    userId: string;
    startLocation: string;
    startTime?: Date;
    endLocation?: string;
    endTime?: Date;
}
