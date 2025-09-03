<template>
  <div class="reports">
    <Header :title="'Reports'" :user="seller" @toggle-theme="toggleTheme" @toggle-sidebar="toggleSidebar"/>
    
    <div class="filters">
      <label>From:</label><input type="date" v-model="filter.from"/>
      <label>To:</label><input type="date" v-model="filter.to"/>
      <button @click="fetchReports">Apply</button>
    </div>

    <div class="charts">
      <canvas id="salesChart"></canvas>
    </div>

    <div class="tables">
      <h3>Top Products</h3>
      <table>
        <thead>
          <tr><th>Product</th><th>Sold</th><th>Revenue</th></tr>
        </thead>
        <tbody>
          <tr v-for="prod in reports.topProducts" :key="prod.id">
            <td>{{ prod.name }}</td>
            <td>{{ prod.sold }}</td>
            <td>{{ prod.revenue }} $</td>
          </tr>
        </tbody>
      </table>

      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr><th>Order ID</th><th>Customer</th><th>Total</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr v-for="order in reports.recentOrders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer_name }}</td>
            <td>{{ order.total }} $</td>
            <td>{{ order.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref
