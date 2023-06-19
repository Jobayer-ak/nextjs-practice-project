import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('Mongodb is connected!');
  }

  try {
    await mongoose.connect(process.MONGODB_URI, {
      dbName: 'next_project',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Mongodb Connected!');
  } catch (error) {
    console.log(error);
  }
};
