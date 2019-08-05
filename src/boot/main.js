import axios from 'axios'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueParticles from 'vue-particles'

export default async ({ Vue }) => {
  // axios
  Vue.prototype.$axios = axios
  // scroll
  Vue.use(vueSmoothScroll)
  Vue.use(VueParticles)
  // default
  Vue.prototype.$wait = (msg) => new Promise(resolve => setTimeout(resolve, msg))
  Vue.prototype.$log = function (...msg) {
    const debug = require('debug')(`[${this.$options.name}] `)
    debug.enabled = true
    debug(...msg)
  }
  Vue.filter('cut', function (text, length) {
    let add = text.length > length ? '...' : ''
    return text.slice(0, length) + add
  })
}
