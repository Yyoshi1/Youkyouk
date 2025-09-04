// backend/server.js
import express from "express"
import http from "http"
import { Server } from "socket.io"
import knex from "knex"
import { Model } from "objection"

// Routes
import adminRoutes from "./routes/admin.js"
import sellerRoutes from "./routes/seller.js"

// Database config (Knex + Objection)
const db = knex({
  client: "sqlite3", // postgresql or mysql
  connection: {
    filename: "./dev.sqlite3"
  },
  useNullAsDefault: true
})
Model.knex(db)

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: "*" } })

app.use(express.json())

// API Routes
app.use("/api/admin", adminRoutes)
app.use("/api/seller", sellerRoutes)

// Socket.io
io.on("connection", (socket) => {
  console.log("🔌 Client connected:", socket.id)

  // 
  socket.on("newOrder", (order) => {
    console.log("📦 New order received:", order)
    io.emit("orderCreated", order) // 
  })

  // 
  socket.on("sendMessage", (msg) => {
    console.log("💬 Message:", msg)
    io.emit("messageReceived", msg)
  })

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id)
  })
})

// Start server
const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
