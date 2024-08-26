import { Schema } from 'mongoose';

const CardSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const ColumnSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  cards: { type: [CardSchema], default: [] },
});

export const BoardSchema = new Schema({
  _id: { type: String, auto: true },
  name: { type: String, required: true },
  columns: { type: [ColumnSchema], default: [] },
});