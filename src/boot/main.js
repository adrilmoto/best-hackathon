import axios from 'axios'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueParticles from 'vue-particles'
import carousel from 'vue-owl-carousel'
import AOS from 'aos'
import CircularCountDownTimer from 'vue-circular-count-down-timer'
import Countdown from 'vuejs-countdown'
import 'aos/dist/aos.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default async ({ Vue }) => {
  // axios
  Vue.prototype.$axios = axios
  // scroll
  Vue.use(vueSmoothScroll)
  Vue.use(VueParticles)
  Vue.use(carousel)
  Vue.use(AOS)
  Vue.use(CircularCountDownTimer)
  Vue.use(Countdown)
  Vue.use(VueAwesomeSwiper)
  // default
  Vue.prototype.$calc = 'calc(min + (max - min) * ((100vw - 320px) / (1600 - 320)))'
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
  Vue.filter('two_digits', function (value) {
    if (value.toString().length <= 1) {
      return '0' + value.toString()
    }
    return value.toString()
  })
}
