import { createRouter, createWebHistory } from 'vue-router'

import dreadlocksAbout from '@/components/dreadlocksAbout'
import headerBlock from '@/components/headerBlock'
import masterAbout from '@/components/masterAbout'


const routes = [
  {
    path: '/',
    component: headerBlock,
  },
  {
    path: '/dreadlocksAbout',
    component: dreadlocksAbout,
  },
  {
    path: '/masterAbout',
    component: masterAbout,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
