<script>
import { RouterLink, RouterView } from 'vue-router'
//DaySchedule Script for booking appointments
export default {
  methods: {
    openDaySchedulePopup() {
      // DaySchedule widget initialization script
      daySchedule.initPopupWidget({
        "url": "https://hausofjas.dayschedule.com",
        "type": "popup",
        "color": {
          "primary": "#C198C5",
          "secondary": "#ffffff"
        }
      });
      console.log('DaySchedule widget initialized.');
    }
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="menu-left">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/prices">Prices</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </div>
    <div class="navbar-brand">Haus of Jas</div>
    <RouterLink to="" @click.prevent="openDaySchedulePopup" class="appointment-button">Book an Appointment!</RouterLink>
  </nav>
  <RouterView />
</template>


<style scoped>
/* Styling for the navbar*/
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; /* white background for the middle part */
  border-top: 25px solid #C198C5; /* thickness of border on the top */
  border-bottom: 25px solid #C198C5; /* thickness of border on the bottom */
  padding: 1rem 1rem; /* thickness of the middle part */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
  font-family: 'Philosopher', sans-serif; /* Philosopher font for the whole navbar */
}

body {
  padding-top: 120px;
}

.menu-left {
  display: flex;
  align-items: center;
}

.menu-left a {
  margin-right: 2rem; /* spacing between menu options */
  text-decoration: none;
  color: black; 
  font-size: 1rem; 
  padding: 0.5rem; 
  transition: background-color 0.3s;
}

.menu-left a:hover {
  background-color: #D6B1C5; /* background color on hover */
  color: black; /* text color remains black */
}

/* "Haus of Jas" text */
.navbar-brand {
  font-weight: bold;
  text-align: center;
  position: absolute; /* Absolute positioning to assist in centering */
  left: 50%; /* Center based on the total navbar width */
  transform: translateX(-50%); /* Adjust centering based on its own width */
  font-size: 2rem; /* font size for "Haus of Jas" */
  color: black;
}

/* appt button */
.appointment-button {
  background-color: #D6B1C5; /* button color */
  border: none;
  color: black; /* text inside the button  */
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem; 
  transition: background-color 0.3s; 
}

/* button hover */
.appointment-button:hover {
  background-color: #c49bb7; /* hover effect */
}

/*  active router links */
.menu-left a.router-link-active, .menu-left a.router-link-exact-active {
  color: black; 
  font-weight: bold;
}
</style>

