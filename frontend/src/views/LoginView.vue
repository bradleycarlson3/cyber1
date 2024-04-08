<template>
    <div class="content-wrapper">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input v-model="username" type="text" id="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div></div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import * as authService from '../services/authService.js';
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
      const router = useRouter();
  
      const login = async () => {
        try {
          await authService.login(username.value, password.value);
          localStorage.setItem('user-token', 'mock-token-12345'); // Simulating token storage
          router.push({ name: 'inventory' });
        } catch (error) {
          alert(error.message); // Simplified error handling
        }
      };
  
      return {
        username,
        password,
        login
      };
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin-top: 120px; /* Adjust based on your navbar height */
    background-color: #fff; /* White background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adding some depth */
    border: 2px solid #C198C5; /* Thicker border around the login box */
    border-radius: 10px; /* Soft rounded corners */
    width: 100%;
    max-width: 400px; /* Maximum width for the form */
    box-sizing: border-box;
    font-family: 'Philosopher', sans-serif; /* Consistent with the navbar */
    color: #333; /* Text color */
    margin: 120px auto 0; /* Centering the box vertically and horizontally */
  }
  
  .login-container h2 {
    color: #000; /* Making the header black */
    font-weight: bold; /* Bold font weight for the header */
    margin-bottom: 1.5rem;
  }
  
  .login-container label {
    display: block;
    margin-bottom: .5rem;
    font-weight: bold;
  }
  
  .login-container input {
    width: 100%; /* Full width */
    padding: 0.5rem;
    margin-bottom: 1rem; /* Space between inputs */
    border: 1px solid #ccc; /* Subtle border for inputs */
    border-radius: 5px; /* Rounded corners for inputs */
  }
  
  .login-container button {
    background-color: #C198C5; /* Button color matching the accent */
    color: #fff; /* White text */
    border: none;
    padding: 0.7rem 1.4rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px; /* Button rounded corners */
    transition: background-color 0.3s ease; /* Transition for hover effect */
  }
  
  .login-container button:hover {
    background-color: #D6B1C5; /* Lighter shade on hover */
  }
  .content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
  text-align: center;
}
  </style>
  
  
  
  