import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Main.vue';
import PolicyView from '../views/Policy.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomeView
  },
  {
    path: '/policy',
    name: 'policy',
    component: PolicyView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
