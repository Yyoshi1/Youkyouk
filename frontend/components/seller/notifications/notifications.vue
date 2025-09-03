<template>
  <div class="notifications">
    <Header :title="'Notifications'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <ul class="notification-list">
      <li v-for="notif in notifications" :key="notif.id" :class="{ unread: !notif.read }">
        <span>{{ notif.type }}: </span>
        <span>{{ notif.message }}</span>
        <button @click="markAsRead(notif)">Mark Read</button>
      </li>
    </ul>
    <div v-if="unreadCount > 0" class="badge">{{ unreadCount }}</div>
