import mongoose from 'mongoose';

export interface DealInput {
  data: Date;
  valor: number;
}

export interface DealDocument extends DealInput, mongoose.Document {
  data: Date;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}

const dealSchema = new mongoose.Schema({
  data: {
    type: Date,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  }
});

dealSchema.index({ data: 1});

export default mongoose.model<DealDocument>('DealSchema', dealSchema);
