import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import LoginRegister from '@/pages/Login-Register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LoginRegister
    }
  ]
})
