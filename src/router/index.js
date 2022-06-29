import { createRouter, createWebHistory } from 'vue-router'

import dreadlocksAbout from '@/components/dreadlocksAbout'
import headerBlock from '@/components/headerBlock'
import masteAbout from '@/components/masterAbout'


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
    component: masteAbout,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
