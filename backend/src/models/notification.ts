import { Schema, model } from 'mongoose'

interface Notification {
  message: string
  userId?: string
  read?: boolean
}

const notificationSchema = new Schema<Notification>({
  message: { type: String, required: true },
  userId: String,
  read: { type: Boolean, default: false }
}, { timestamps: true })

export default model<Notification>('Notification', notificationSchema)
