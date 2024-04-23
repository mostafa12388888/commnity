import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import DishoverView from '../views/DishoverView.vue';
import FreshMealView from '../views/FreshMeals.vue';
import QuickDeliveryView from '../views/QuickDelivery.vue';
import StartTodayView from '../views/StartToday.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dishover",
      name: "dishover",
      component:DishoverView
    },
    {
      path: "/fresh-meal",
      name: "fresh-meal",
      component:FreshMealView
      
    },
    {
      path: "/quick-delivery",
      name: "quick-delivery",
      component:QuickDeliveryView
      
    },
    {
      path: "/start-today",
      name: "start-today",
      component:StartTodayView
      
    },
    {
      path: '/',
      name: "dishover",
      component:DishoverView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
    // to and from are Route Object,next() must be called to resolve the hook}
   
  if (to.params != undefined)
    document.title = `${to.name} | ${to.params.pageTitle}  `
  else
    if (to.name == null)
      document.title = `Unknown page`
    else
      document.title = to.name;
  
  next();
   
  })
export default router
