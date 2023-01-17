import { createRouter, createWebHistory } from 'vue-router'

import home from "@/views/home.vue"
import info from "@/views/info.vue"
import cart from "@/views/cart.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
  ]
})

export default router
