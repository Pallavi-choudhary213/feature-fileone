<template>
  <div class="login-page">
    <div class="login-card">
      <h2 class="login-title">Welcome Back</h2>
      <p class="login-subtitle">Please login to your account</p>
      
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>

      <p class="register-link">Don't have an account? <a href="#">Sign up</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    login() {
      this.emailError = '';
      this.passwordError = '';
    }

  }
};
</script>

<style scoped>
/* Background and layout */
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

/* Card */
.login-card {
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Titles */
.login-title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.login-subtitle {
  font-size: 1rem;
  color: #777;
  margin-bottom: 1.5rem;
}

/* Form */
.login-form {
  text-align: left;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
}

input {
  width: 92%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

.input-error {
  border-color: #e74c3c;
}

.error-text {
  font-size: 0.875rem;
  color: #e74c3c;
  margin-top: 0.25rem;
  display: block;
}

/* Button */
.login-button {
  width: 100%;
  background: #667eea;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-button:hover {
  background: #5a67d8;
}

/* Footer */
.register-link {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}

.register-link a {
  color: #667eea;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
