// backend/controllers/authController.js

// تسجيل مستخدم جديد
export const registerUser = (req, res) => {
  res.json({ message: 'User registered successfully' });
};

// تسجيل الدخول
export const loginUser = (req, res) => {
  res.json({ message: 'User logged in successfully' });
};
