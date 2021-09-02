import mongoose , { Schema, Document, Model } from 'mongoose';

export type DealAttributes = {
  data: Date;
  valor: number;
  id_deal: number,
  company_id: number,
  status: String,
  products_count: number,
  title: String,
};

export type DealDocument = Document & DealAttributes;

type DealModel = Model<DealDocument>;

const dealSchema = new Schema({
  data: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  id_deal: {
    type: Number,
    required: true,
  },
  company_id: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true
  },
  products_count: {
    type: Number,
    required: true
  }
});

dealSchema.index({ data: 1});

export default mongoose.model<DealDocument, DealModel>('Deal', dealSchema);
