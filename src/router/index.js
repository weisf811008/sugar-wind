import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/cookies',
      name: 'Cookies',
      component: () => import('../views/pages/IntroCookies.vue')
    },
    {
      path: '/cookies/originalRoutBiscuit',
      name: 'OriginalRoutBiscuit',
      component: () => import('../views/pages/cookies/OriginalRoutBiscuit.vue')
    },
    {
      path: '/cookies/originalChocolate',
      name: 'OriginalChocolate',
      component: () => import('../views/pages/cookies/OriginalChocolate.vue')
    },
    {
      path: '/cookies/chocolateRoutBiscuit',
      name: 'ChocolateRoutBiscuit',
      component: () => import('../views/pages/cookies/ChocolateRoutBiscuit.vue')
    },
    {
      path: '/cookies/chocolate',
      name: 'Chocolate',
      component: () => import('../views/pages/cookies/Chocolate.vue')
    },
    {
      path: '/cookies/hedgehog',
      name: 'Hedgehog',
      component: () => import('../views/pages/cookies/Hedgehog.vue')
    }
  ]
})

export default router
