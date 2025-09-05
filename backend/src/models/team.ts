import { Schema, model } from 'mongoose'

interface Team {
  name: string
  members: string[]
}

const teamSchema = new Schema<Team>({
  name: { type: String, required: true },
  members: [String]
}, { timestamps: true })

export default model<Team>('Team', teamSchema)
