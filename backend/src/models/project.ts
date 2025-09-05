import mongoose, { Schema, Document } from 'mongoose'

export interface IProject extends Document {
  name: string
  description: string
  status: string
  team: mongoose.Types.ObjectId[]
}

const ProjectSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'active' },
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
}, { timestamps: true })

export default mongoose.model<IProject>('Project', ProjectSchema)
