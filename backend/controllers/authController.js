import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// تسجيل مستخدم جديد
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // التحقق من البريد
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // إنشاء المستخدم
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// تسجيل الدخول
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // التحقق من البريد
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // التحقق من كلمة المرور
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // إنشاء التوكن
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1d' }
    );

    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
