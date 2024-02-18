import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',      
      component: () => import('../views/ContactView.vue')
    }
    ,        
    {
      path: '/recommended',
      name: 'recommended',      
      component: () => import('../views/RecommendedView.vue')
    },
    {
      path: '/list',
      name: 'list',      
      component: () => import('../views/ListView.vue')
    }        
  ]
})
router.beforeEach((to, from, next) => {  
  next();
});

export default router
