<template>
  <div class="seller-dashboard">
    <h1>Seller Dashboard</h1>
    <p>Welcome, {{ user.name }}</p>
    <!-- Seller-specific widgets -->
  </div>
</template>

<script>
export default {
  name: "SellerDashboard",
  data() {
    return {
      user: {
        name: "Seller"
      }
    };
  }
};
</script>

<style scoped>
.seller-dashboard {
  padding: 24px;
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
}
</style>
