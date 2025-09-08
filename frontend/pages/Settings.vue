<template>
  <div class="settings-page">
    <h1>Settings</h1>
    <form>
      <label>
        Workspace Name:
        <input type="text" placeholder="Enter workspace name" />
      </label>
      <label>
        Email:
        <input type="email" placeholder="Enter email" />
      </label>
      <label>
        Language:
        <select>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
          <!-- Additional languages loaded dynamically -->
        </select>
      </label>
      <button type="submit">Save Settings</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Settings'
}
</script>

<style scoped>
.settings-page {
  padding: 1rem;
}

.settings-page form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

body.dark .settings-page {
  background-color: #1f2937;
  color: #f3f4f6;
}

input, select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

body.dark input, body.dark select {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
