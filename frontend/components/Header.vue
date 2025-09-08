<template>
  <header :class="['header', { dark: isDark }]">
    <div class="left">
      <h1>{{ $t('welcome') }}</h1>
    </div>
    <div class="right">
      <span>{{ $t('notifications') }}</span>
      <button>{{ $t('profile') }}</button>
      <button>{{ $t('logout') }}</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isDark: Boolean
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f9fafb;
  border-bottom: 1px solid #ddd;
}
.header.dark {
  background-color: #111827;
  color: #f3f4f6;
}
.header button {
  margin-left: 1rem;
  cursor: pointer;
}
</style>
