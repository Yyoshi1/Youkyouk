// backend/controllers/authController.js

// تسجيل مستخدم جديد
export const registerUser = (req, res) => {
  // منطق التسجيل
  res.json({ message: 'User registered successfully' });
};

// تسجيل الدخول
export const loginUser = (req, res) => {
  // منطق تسجيل الدخول
  res.json({ message: 'User logged in successfully' });
};
