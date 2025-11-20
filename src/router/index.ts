import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth/login',
      meta: {
        requiresAuth: false,
      },
      component: () => import('../views/auth/LoginView.vue'),
    },
  ],
})

export default router
