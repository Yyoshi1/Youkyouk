<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input type="text" v-model="modelValue" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: String,
    modelValue: String,
    placeholder: String
  },
  emits: ["update:modelValue"]
};
</script>

<style scoped>
.form-group {
  margin-bottom: 16px;
  font-family: 'Inter', sans-serif;
}

.form-group label {
  display: block;
  margin-bottom: 4px;
  color: var(--text-color);
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--dropdown-bg);
  color: var(--text-color);
}
</style>
