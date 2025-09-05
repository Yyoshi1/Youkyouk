import mongoose, { Schema, Document } from 'mongoose'

export interface ITask extends Document {
  title: string
  description: string
  status: string
  project: mongoose.Types.ObjectId
  assignedTo: mongoose.Types.ObjectId
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'pending' },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
}, { timestamps: true })

export default mongoose.model<ITask>('Task', TaskSchema)
