import { createRouter, createWebHistory } from 'vue-router'

import home from "@/views/home.vue"
import info from "@/views/info.vue"
import cart from "@/views/cart.vue"
import products from "@/views/products.vue"
import account from "@/views/account.vue"

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
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
  ]
})

export default router
