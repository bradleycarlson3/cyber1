// src/services/authService.js

// Mock function to simulate an API call for user login
export const login = async (username, password) => {
    if (username === "Jas" && password === "password") {
      return { token: "mock-token-12345", username };
    } else {
      throw new Error("Invalid username or password");
    }
  };
  
  // Mock function to check if user is logged in
  export const isLoggedIn = () => {
    return localStorage.getItem("user-token") !== null;
  };
  
  // Logout function to clear the user token
  export const logout = () => {
    localStorage.removeItem("user-token");
  };
  