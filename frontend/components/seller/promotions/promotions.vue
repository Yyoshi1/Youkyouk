<template>
  <div class="promotions">
    <Header :title="'Promotions'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>

    <div class="controls">
      <button @click="showAddPromo = true">Add Promotion</button>
    </div>

    <table class="promo-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Discount</th>
          <th>Usage</th>
          <th>Status</th>
          <th>Actions</th>
        </tr
