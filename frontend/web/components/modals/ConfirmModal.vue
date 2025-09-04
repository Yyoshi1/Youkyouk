<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-card">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <div class="modal-actions">
        <button @click="confirm">Confirm</button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmModal",
  props: {
    visible: Boolean,
    title: { type: String, default: "Confirm Action" },
    message: { type: String, default: "Are you sure?" }
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
}

.modal-card {
  background-color: var(--dropdown-bg);
  padding: 24px;
  border-radius: 8px;
  width: 320px;
  text-align: center;
}

.modal-actions {
  margin-top: 16px;
  display: flex;
  justify-content: space-around;
}

.modal-actions button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: var(--button-bg);
  color: var(--button-color);
  cursor: pointer;
}
</style>
