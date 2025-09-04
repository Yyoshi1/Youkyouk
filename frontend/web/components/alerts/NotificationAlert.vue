<template>
  <div v-if="visible" :class="['alert', type]">
    {{ message }}
    <button @click="close">x</button>
  </div>
</template>

<script>
export default {
  name: "NotificationAlert",
  props: {
    message: String,
    type: { type: String, default: "info" },
    visible: Boolean
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.alert {
  padding: 12px 16px;
  border-radius: 4px;
  margin: 8px 0;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alert.info { background-color: #e0f0ff; color: #055160; }
.alert.success { background-color: #e0ffe0; color: #056005; }
.alert.warning { background-color: #fff8e0; color: #665500; }
.alert.error { background-color: #ffe0e0; color: #550505; }

.alert button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
}
</style>
