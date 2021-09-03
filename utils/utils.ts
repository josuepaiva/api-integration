import mongoose from 'mongoose';

export default {
  init: async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('Mongodb server is not initialized');
    }
    await mongoose.connect(process.env.MONGO_URL);
  },
  final: async () => {
    mongoose.disconnect()
  }
};
