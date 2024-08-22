import { Schema } from 'mongoose';

export const BoardSchema = new Schema({
  name: { type: String, required: true },
  columns: [{ type: Schema.Types.ObjectId, ref: 'Column' }],
});