import { Schema, model } from 'mongoose'

interface Project {
  name: string
  description?: string
  startDate?: Date
  endDate?: Date
  status?: 'active' | 'completed' | 'on-hold'
}

const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, default: 'active' }
}, { timestamps: true })

export default model<Project>('Project', projectSchema)
