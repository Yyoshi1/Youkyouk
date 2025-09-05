import { Schema, model } from 'mongoose'

interface Task {
  title: string
  description?: string
  projectId: string
  assignedTo?: string
  status?: 'todo' | 'in-progress' | 'done'
  dueDate?: Date
}

const taskSchema = new Schema<Task>({
  title: { type: String, required: true },
  description: String,
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  assignedTo: String,
  status: { type: String, default: 'todo' },
  dueDate: Date
}, { timestamps: true })

export default model<Task>('Task', taskSchema)
