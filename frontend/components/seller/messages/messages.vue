<template>
  <div class="messages">
    <Header :title="'Messages'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    
    <div class="chat-container">
      <aside class="chat-list">
        <input v-model="search" placeholder="Search..." />
        <ul>
          <li v-for="conv in filteredConversations" :key="conv.id" :class="{active: currentConversation && currentConversation.id===conv.id}" @click="openConversation(conv)">
            {{ conv.customer_name }}
            <span v-if="conv.unreadCount>0" class="badge">{{ conv.unreadCount }}</span>
