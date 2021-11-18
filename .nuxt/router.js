import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _12075f28 = () => interopDefault(import('..\\pages\\cadastro.vue' /* webpackChunkName: "pages/cadastro" */))
const _013d3f16 = () => interopDefault(import('..\\pages\\compras.vue' /* webpackChunkName: "pages/compras" */))
const _959789fe = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3d0bfaea = () => interopDefault(import('..\\pages\\empresa.vue' /* webpackChunkName: "pages/empresa" */))
const _2340c863 = () => interopDefault(import('..\\pages\\fale.vue' /* webpackChunkName: "pages/fale" */))
const _6e7cb80a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _ce845f9c = () => interopDefault(import('..\\pages\\recuperar-senha.vue' /* webpackChunkName: "pages/recuperar-senha" */))
const _586d856a = () => interopDefault(import('..\\pages\\xre300yellow.vue' /* webpackChunkName: "pages/xre300yellow" */))
const _b655d61a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cadastro",
    component: _12075f28,
    name: "cadastro"
  }, {
    path: "/compras",
    component: _013d3f16,
    name: "compras"
  }, {
    path: "/contact",
    component: _959789fe,
    name: "contact"
  }, {
    path: "/empresa",
    component: _3d0bfaea,
    name: "empresa"
  }, {
    path: "/fale",
    component: _2340c863,
    name: "fale"
  }, {
    path: "/login",
    component: _6e7cb80a,
    name: "login"
  }, {
    path: "/recuperar-senha",
    component: _ce845f9c,
    name: "recuperar-senha"
  }, {
    path: "/xre300yellow",
    component: _586d856a,
    name: "xre300yellow"
  }, {
    path: "/",
    component: _b655d61a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
