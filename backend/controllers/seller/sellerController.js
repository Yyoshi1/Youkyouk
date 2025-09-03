import Seller from "../../models/seller/seller.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
  // 
  async register(req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const seller = await Seller.create({ name, email, password: hashedPassword });
    res.status(201).json(seller);
  },

  // 
  async login(req, res) {
    const { email, password } = req.body;
    const seller = await Seller.findOne({ where: { email } });
    if (!seller) return res.status(404).json({ error: "Seller not found" });
    const valid = await bcrypt.compare(password, seller.password);
    if (!valid) return res.status(401).json({ error: "Invalid password" });
    const token = jwt.sign({ id: seller.id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ seller, token });
  },

  // 
  async updateProfile(req, res) {
    const seller = await Seller.findByPk(req.params.id);
    if (!seller) return res.status(404).json({ error: "Seller not found" });
    await seller.update(req.body);
    res.json(seller);
  },

  // 
  async getProfile(req, res) {
    const seller = await Seller.findByPk(req.params.id);
    if (!seller) return res.status(404).json({ error: "Seller not found" });
    res.json(seller);
  }
};
