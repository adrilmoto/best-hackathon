import Vue from 'vue'
import VueRouter from 'vue-router'
const debug = require('debug')('[router]:index')
debug.enabled = true
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    // scrollBehavior: () => ({ y: 0 }),
    scrollBehavior (to, from, savedPosition) {
      debug('scrollBehavior', to, from)
      let saving = ['#directions', '#second', '#shedule']
      if (!saving.includes(to.hash)) return {x: 0, y: 0}
      else return savedPosition
    },
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
