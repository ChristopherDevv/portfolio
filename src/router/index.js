import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeafaultLayout from '../layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     path: '/',
     component: DeafaultLayout,
     children:[
        {
          path: '',
          name: 'home',
          component: HomeView
        },{
          path: '/projects',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },{
          path: '/contact',
          name: 'contact', 
          component: () => import('../views/ContactView.vue')
        }
     ]
    }
  ]
})

export default router
