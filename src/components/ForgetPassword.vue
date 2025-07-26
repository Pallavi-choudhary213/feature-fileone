<template>
  <v-container fill-height class="d-flex align-center justify-center login-page">
    <v-card class="pa-6 login-card" max-width="400">
      <v-card-title class="headline font-weight-bold justify-center mb-4">Request for new Password</v-card-title>
      <v-form>
        <v-text-field v-model="email" label="Email" type="email" color="primary" class="mb-4"></v-text-field>
        <v-text-field v-model="message" label="Write comment for request" type="text" color="primary"
          class="mb-4"></v-text-field>
        <v-btn type="submit" color="primary" class="mb-4">
          Send Request
          <v-icon left>mdi-arrow-right</v-icon>
        </v-btn><br>
        Don't have an account?
        <v-btn text color="primary" @click="$router.push('/')">

          Login Here </v-btn>
      </v-form>

      <template>
        <v-container class="d-flex justify-center align-center" style="gap: 16px;">
          <a href="https://www.google.com" target="_blank" rel="noopener">
            <v-icon color="red">mdi-google</v-icon>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener">
            <v-icon color="blue">mdi-facebook</v-icon>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener">
            <v-icon color="purple">mdi-instagram</v-icon>
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener">
            <v-icon color="black">mdi-github</v-icon>
          </a>
          <a href="https://www.apple.com" target="_blank" rel="noopener">
            <v-icon color="black">mdi-apple</v-icon>
          </a>
        </v-container>
      </template>



    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log("Logging in with:", this.email, this.password);
    },
  },
};
</script>

<style scoped>
.login-page {
  background-image: url('@/assets/fogetpage.png'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  widows: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}


</style>
