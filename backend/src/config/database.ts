import { MONGODB_URI } from '../const/envVariables';
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {


        }).then(result => {
            console.log("Successful")

        }).catch((error) => {
            console.log('error:' + error);
            throw Error
        });
        
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

export default connectDB
