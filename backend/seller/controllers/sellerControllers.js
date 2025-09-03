import { AppDataSource } from "../../data-source.js"
import { Seller } from "../models/Seller.js"
import { User } from "../../user/models/User.js"

const sellerRepo = AppDataSource.getRepository(Seller)
const userRepo = AppDataSource.getRepository(User)

/**
 * ✅ 
 */
export const createSeller = async (req, res) => {
  try {
    const { userId, storeName, logo, banner, description, country, currency } = req.body

    const user = await userRepo.findOne({ where: { id: userId } })
    if (!user) return res.status(404).json({ error: "User not found" })

    const seller = sellerRepo.create({
      user,
      storeName,
      logo,
      banner,
      description,
      country,
      currency
    })

    await sellerRepo.save(seller)
    return res.status(201).json(seller)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to create seller" })
  }
}

/**
 * ✅ 
 */
export const getSellers = async (req, res) => {
  try {
    const sellers = await sellerRepo.find({ relations: ["user", "products", "orders"] })
    res.json(sellers)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch sellers" })
  }
}

/**
 * ✅ 
 */
export const getSellerById = async (req, res) => {
  try {
    const seller = await sellerRepo.findOne({
      where: { id: req.params.id },
      relations: ["user", "products", "orders", "settings"]
    })

    if (!seller) return res.status(404).json({ error: "Seller not found" })

    res.json(seller)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch seller" })
  }
}

/**
 * ✅ 
 */
export const updateSeller = async (req, res) => {
  try {
    const seller = await sellerRepo.findOneBy({ id: req.params.id })
    if (!seller) return res.status(404).json({ error: "Seller not found" })

    sellerRepo.merge(seller, req.body)
    await sellerRepo.save(seller)

    res.json(seller)
  } catch (err) {
    res.status(500).json({ error: "Failed to update seller" })
  }
}

/**
 * ✅ 
 */
export const deleteSeller = async (req, res) => {
  try {
    const seller = await sellerRepo.findOneBy({ id: req.params.id })
    if (!seller) return res.status(404).json({ error: "Seller not found" })

    await sellerRepo.remove(seller)
    res.json({ message: "Seller deleted" })
  } catch (err) {
    res.status(500).json({ error: "Failed to delete seller" })
  }
}
