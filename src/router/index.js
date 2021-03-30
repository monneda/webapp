import Vue from 'vue'
import VueRouter from 'vue-router'

import WalletView from '@/views/WalletView'
import WalletCreate from '@/views/WalletCreate'
import Login from '@/views/Login'
import Register from '@/views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/wallets'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/wallets',
    name: 'wallets',
    component: WalletCreate
  },
  {
    path: '/wallets/:id',
    name: 'wallet',
    component: WalletView,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
