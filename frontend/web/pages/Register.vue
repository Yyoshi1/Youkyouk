<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Register</h2>
      <input type="text" v-model="name" placeholder="Full Name" />
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="register">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      console.log("Registering:", this.email);
      // Implement registration logic
    }
  }
};
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--header-bg);
  font-family: 'Inter', sans-serif;
}

.auth-card {
  background-color: var(--dropdown-bg);
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
  width: 320px;
  text-align: center;
}

.auth-card input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.auth-card button {
  width: 100%;
  padding: 10px;
  margin-top: 12px;
  background-color: var(--button-bg);
  color: var(--button-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
