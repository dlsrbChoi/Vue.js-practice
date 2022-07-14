import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/example',
    name: 'Example',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Example" */ '../views/ExampleView.vue')
  },
  {
    path: '/serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "ServerData" */ '../views/ServerData.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "SlotUseModalLayout" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/provideInject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "ProvideInject" */ '../views/ProvideInject.vue')
  },
  {
    path: '/mixin',
    name: 'MixinTest',
    component: () => import(/* webpackChunkName: "MixinTest" */ '../views/MixinTest.vue')
  },
  {
    path: '/calculator',
    name: 'CalculatorView',
    component: () => import(/* webpackChunkName: "CalculatorView" */ '../views/CalculatorView.vue')
  },
  {
    path: '/compositionapi',
    name: 'CompositionAPI',
    component: () => import(/* webpackChunkName: "CompositionAPI" */ '../views/CompositionAPI.vue')
  },
  {
    path: '/compositionapi2',
    name: 'CompositionAPI2',
    component: () => import(/* webpackChunkName: "CompositionAPI2" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/compositionapi3',
    name: 'CompositionAPI3',
    component: () => import(/* webpackChunkName: "CompositionAPI3" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/compositionapi4',
    name: 'CompositionAPI4',
    component: () => import(/* webpackChunkName: "CompositionAPI4" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/compositionapiprovide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "CompositionAPIProvide" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "CustomDirective" */ '../views/CustomDirective.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "Plugins" */ '../views/PluginsView.vue')
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "Plugins" */ '../views/StoreAccess.vue')
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: () => import(/* webpackChunkName: "Plugins" */ '../views/KakaoLogin.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
