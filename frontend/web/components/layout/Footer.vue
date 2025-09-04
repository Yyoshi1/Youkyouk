<template>
  <footer class="footer">
    <div class="footer-left">
      <span>&copy; {{ currentYear }} Youkyouk. All rights reserved.</span>
    </div>
    <div class="footer-right">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Help</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--header-bg);
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
  border-top: 1px solid var(--border-color);
}

.footer a {
  margin-left: 16px;
  color: var(--text-color);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
