import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

import store from "./store/index.js";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
      path: '/',
      name: "Home",
      component: () => import("./views/Home.vue")
    },
    {
      path: '/products',
      name: "Products",
      component: () => import("./views/Products.vue")
    },
    {
      path: '/about',
      name: "About",
      component: () => import("./views/About.vue"),
    },
    {
      path: '/login',
      name: "Login",
      component: () => import("./views/Signin.vue"),
    },
    {
      path: '/cart',
      name: "Cart",
      meta: {
        requiresAuth: true
      },
      
      component: () => import("./views/Cart.vue"),
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log(store.state.user)
    if (!store.getters.isLoggedIn) {
     
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      })

    } else {

      next()

    }
  } else {
    next()
  }
})


export default router