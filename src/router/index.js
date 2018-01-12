import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout/layout'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: resolve => require(['@/view/login/index'], resolve), isShow: false },
  {
    path: '/',
    name: '首页',
    component: layout,
    redirect: '/home',
    children: [{path: 'home', component: resolve => require(['@/view/home/index'], resolve)}]
  },
  {
    path: '/',
    name: '聊天机器人',
    component: layout,
    redirect: '/chat',
    children: [{ path: 'chat', component: resolve => require(['@/view/chat/index'], resolve) }]
  },
  {
    path: '/',
    name: '百度地图',
    component: layout,
    redirect: '/map',
    children: [{ path: 'map', component: resolve => require(['@/view/map/index'], resolve) }]
  }
]

export default new Router({
  routes: constantRouterMap
})
