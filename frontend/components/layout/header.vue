<template>
  <header class="header">
    <div class="left">
      <button @click="$emit('toggle-sidebar')">
        <i class="linear-icon-menu"></i>
      </button>
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      <div class="notifications" @click="toggleDropdown">
        <i class="linear-icon-bell"></i>
        <span v-if="unreadCount > 0" class="badge">{{ unreadCount }}</span>
        <ul v-if="dropdownOpen">
          <li v-for="note in notifications" :key="note.id" :class="{ unread: !note.read }">
            {{ note.message }}
          </li>
        </ul>
      </div>
      <span>{{ user.name }}</span>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, on
