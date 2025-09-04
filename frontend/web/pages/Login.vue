<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2>Login</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Sign In</button>
      <p class="forgot"><a href="#">Forgot password?</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("Logging in:", this.email);
      // Implement login logic
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

.auth-card .forgot {
  margin-top: 12px;
}
</style>
