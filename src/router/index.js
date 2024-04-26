import { createWebHistory, createRouter } from 'vue-router'
import Layout from '@/layouts/index.vue'
const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: '/index',
    hidden: true,
    children: [
      {
        path: '/index',
        component: () => import('@/views/index.vue'),
        hidden: true
      },
      {
        path: '/counter',
        component: () => import('@/views/test/counter.vue'),
        hidden: true
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

export default router;

