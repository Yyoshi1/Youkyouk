import mongoose, { Schema, Document } from 'mongoose'

export interface INotification extends Document {
  message: string
  read: boolean
  user: string
}

const NotificationSchema: Schema = new Schema({
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  user: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model<INotification>('Notification', NotificationSchema)
