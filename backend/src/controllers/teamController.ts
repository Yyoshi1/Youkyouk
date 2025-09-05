import { Request, Response } from 'express'
import Team from '../models/Team'

// Get all teams
export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await Team.find()
    res.json(teams)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err })
  }
}

// Get single team
export const getTeam = async (req: Request, res: Response) => {
  try {
    const team = await Team.findById(req.params.id)
    if (!team) return res.status(404).json({ message: 'Team not found' })
    res.json(team)
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err })
  }
}

// Create team
export const createTeam = async (req: Request, res: Response) => {
  try {
    const team = new Team(req.body)
    await team.save()
    res.status(201).json(team)
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err })
  }
}

// Update team
export const updateTeam = async (req: Request, res: Response) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!team) return res.status(404).json({ message: 'Team not found' })
    res.json(team)
  } catch (err) {
    res.status(400).json({ message: 'Bad request', error: err })
  }
}

// Delete team
export const deleteTeam = async (req: Request, res: Response) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id)
    if (!team) return res.status(404).json({ message: 'Team not found' })
    res.json({ message: 'Team deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err })
  }
}
