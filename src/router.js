import {
  createRouter,
  createWebHistory
} from 'vue-router'


export default createRouter({
  history: createWebHistory(),
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
    }
    {
      path: '/cart',
      name: "Cart",
      component: () => import("./views/Cart.vue"),
    }
  ]
})