import express from "express"
import http from "http"
import { Server } from "socket.io"
import adminRoutes from "./routes/admin.js"
import sellerRoutes from "./routes/seller.js"

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: "*" } })

app.use(express.json())
app.use("/api/admin", adminRoutes)
app.use("/api/seller", sellerRoutes)

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)
})

server.listen(3000, () => console.log("Server running on port 3000"))
