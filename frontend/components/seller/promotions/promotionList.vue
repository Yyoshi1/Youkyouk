<template>
  <div class="promotions">
    <Header :title="'Promotions'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    <div class="controls">
      <button @click="openForm()">+ Add Promotion</button>
    </div>
    <table class="promotion-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Discount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="promo in promotions" :key="promo.id">
          <td>{{ promo.title }}</td>
          <td>{{ promo.type }}</td>
          <td>{{ promo.discount }}%</td>
          <td>
            <span :class="['status', promo.active ? 'active' : 'inactive']">
              {{ promo.active ? 'Active' : 'Inactive' }}
            </span>
          </td>
