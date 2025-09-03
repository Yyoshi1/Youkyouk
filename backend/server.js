import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { Notification } from './models/seller/Notification.js'

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: "*" } })

// 
io.on('connection', (socket) => {
  console.log('A client connected:', socket.id)

  // 
  socket.on('joinSellerRoom', (sellerId) => {
    socket.join(`seller_${sellerId}`)
    console.log(`Seller ${sellerId} joined room`)
  })
})

// 
export const sendNotification = async (sellerId, message, orderId = null) => {
  const notification = await Notification.query().insert({
    seller_id: sellerId,
    message,
    order_id: orderId,
    read: false,
    created_at: new Date()
  })
  io.to(`seller_${sellerId}`).emit('newNotification', notification)
}

server.listen(3000, () => console.log("Server running on port 3000"))
