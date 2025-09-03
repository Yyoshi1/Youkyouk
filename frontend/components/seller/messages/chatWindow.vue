<template>
  <div class="chat-window">
    <div class="chat-header">
      <span>{{ chat.sender_name }}</span>
      <button @click="$emit('close')">Close</button>
    </div>
    <div class="chat-messages">
      <div v-for="msg in chat.messages" :key="msg.id" :class="['chat-msg', { 'sent': msg.sender === 'seller', 'received': msg.sender !== 'seller' }]">
        {{ msg.content }}
      </div>
    </div>
    <div class="chat-input">
      <input type="text" v-model="newMessage" placeholder="Type a message..." @keyup.enter="sendMessage"/>
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { defineProps } from 'vue'

const props = defineProps({ chat: Object })
const newMessage = ref('')

const sendMessage = async () => {
  if (!newMessage.value) return
  try {
    const res = await axios.post(`/api/messages/${props.chat.id}`, { content: newMessage.value })
    props.chat.messages.push(res.data)
    newMessage.value = ''
  } catch (err) { console.error(err) }
}
</script>

<style scoped>
.chat-window { flex:1; display:flex; flex-direction:column; background-color: var(--color-card-bg); border-radius: var(--border-radius); overflow:hidden; box-shadow: var(--shadow-card); }
body.dark-mode .chat-window { background-color: var(--color-card-bg-dark); box-shadow: var(--shadow-card-dark); }
.chat-header { padding: 12px; background-color: #f3f4f6; display:flex; justify-content:space-between; align-items:center; font-weight:bold; }
.chat-messages { flex:1; padding: 12px; overflow-y:auto; display:flex; flex-direction:column; gap:8px; }
.chat-msg { padding:8px 12px; border-radius:6px; max-width:70%; }
.chat-msg.sent { align-self:flex-end; background-color: #22c55e; color:white; }
.chat-msg.received { align-self:flex-start; background-color:#e5e7eb; color:#1f2937; }
body.dark-mode .chat-msg.received { background-color:#374151; color:white; }
.chat-input { display:flex; gap:8px; padding:12px; border-top:1px solid #e5e7eb; }
.chat-input input { flex:1; padding:8px; border-radius:6px; border:1px solid #d1d5db; }
.chat-input button { padding:8px 12px; border:none; border-radius:6px; background-color: var(--color-primary); color:white; cursor:pointer; }
.chat-input button:hover { opacity:0.8; }
</style>
