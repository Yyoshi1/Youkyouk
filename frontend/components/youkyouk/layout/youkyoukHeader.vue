<template>
  <header class="youkyouk-header">
    <div class="logo">Youkyouk</div>
    <div class="search">
      <input type="text" placeholder="Search products..." />
      <button><i class="youkyouk-icon-search"></i></button>
    </div>
    <div class="actions">
      <button><i class="youkyouk-icon-heart"></i></button>
      <button><i class="youkyouk-icon-cart"></i></button>
      <button><i class="youkyouk-icon-user"></i></button>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.youkyouk-header { display:flex; justify-content:space-between; align-items:center; padding:10px; background:#fff; border-bottom:1px solid #eee; }
.logo { font-weight:bold; font-size:20px; }
.search input { padding:5px; }
.actions button { margin-left:10px; background:none; border:none; cursor:pointer; }
</style>
