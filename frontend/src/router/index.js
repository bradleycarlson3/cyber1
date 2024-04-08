import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InventoryView from '../views/InventoryView.vue';
import { isLoggedIn } from '../services/authService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prices',
      name: 'prices',
      component: () => import('../views/PricesView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    { 
      path: '/inventory', 
      name: 'inventory', 
      component: InventoryView,
      beforeEnter: (to, from, next) => {
        if (!isLoggedIn()) {
          next({ name: 'login' });
        } else {
          next();
        }
      }}
    
  ]
})

export default router

