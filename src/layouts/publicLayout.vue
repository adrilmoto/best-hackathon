<template lang="pug">
  q-layout(view="lHh Lpr lFf" @scroll="handleScroll" style=`position: relative`).full-width
    //- right drawer
    q-drawer(side="right" behavior="mobile" v-model="showRightDrawer" style="zIndex: 30000")
      .column.fit
        //- header
        div(style=`height: 80px; borderBottom: 1px solid #eee`).row.full-width.items-center.content-center.q-px-md
          div(style=`` @click="$router.push(`/`)").row.neon_mini.items-center.cp
            div(style=`width: 50px; height: 50px; font-family: Russo One`).logo_menu.q-mr-xs
            .col
              div.neon_text
                span HACKATHON
              .row
              div.neon_text
                span BEST URFU 2019
        //- routes
        .col.scroll
          div(
            v-for="(m, mi) in $store.state.main.routes.home" :key="m._id"
            style=`height: 50px; borderBottom: 1px solid #eee; text-decoration: none`
            ).row.full-width.items-center.content-center
            a(:href="'#'+m._id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style=`text-decoration: none`).row.items-center.relative-position.full-width
              q-btn(@click="$router.push('/')" :label="m.name" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="lg" flat).q-ma-xs.menu_button.full-width
          div(style=`borderBottom: 1px solid #eee;`).row.items-center.relative-position
            q-btn(@click="$router.push('/contacts')" label="Контакты" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="lg" flat).q-ma-xs.menu_button.full-width
          div(style=`borderBottom: 1px solid #eee;`).row.items-center.relative-position
            q-btn(@click="$router.push('/partners')" label="Партнерам" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="lg" flat).q-ma-xs.menu_button.full-width
          div(style=`borderBottom: 1px solid #eee;`).row.items-center.relative-position
            q-btn(@click="$router.push('/faq')" label="Faq" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="lg" flat).q-ma-xs.menu_button.full-width
          div(style=``).row.items-center.relative-position.justify-center.q-mt-md
            q-btn(label="Регистрация"
              @click="" flat style=`font-family: Russo One; maxWidth: 250px; width:100%; height: 50px; border-radius: 50px; background-image: linear-gradient(139deg, #00FFF3, #00D2C9, #009992, #00706A, #004643);`).q-ma-xs
          //- div(style=`height: 50px`).row.full-width.items-center.content-center.q-pa-md
            q-btn(flat color="light-green-7" icon="perm_identity" style=`padding: 0px` @click="accountLogin" :loading="accountLoginLoading") войти в личный кабинет
        //- footer
        div(style=`height: 50px`).row.full-width.items-center.q-px-md
          small.text-black © {{ $store.state.main.config.info.site_name }} {{ $store.state.main.config.info.year_of_foundation }}-{{new Date().getFullYear()}}
    q-header(:reveal-offset="500" style=`background: #fff; z-index: 2200;`)
      p-menu(style=`z-index: 1111`)
    q-page-container
      vue-particles(
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="bubble"
        :clickEffect="true"
        clickMode="repulse"
    :style=`{position: 'fixed', zIndex: '2', paddingBottom: '65px',marginTop:$q.screen.gt.sm ? '150px' : '200px', width: '100%'}`).row.window-height.justify-center.full-width.bg-black
      router-view
    p-footer
</template>

<script>
import { routes } from 'components/config.js'
import { openURL } from 'quasar'
import pMenu from 'components/pMenu'
import pFooter from 'components/pFooter'
export default {
  name: 'mainLayout',
  components: { pMenu, pFooter },
  meta () {
    return {
      title: this.siteName
    }
  },
  data () {
    return {
      splitterModel: 20,
      tab: '',
      showAccountModal: false,
      accountLoginLoading: false,
      routes,
      showRightDrawer: false,
      blackMenu: false,
      name: '',
      siteName: 'HACKATHON BEST URFU 2019',
      ddd: `
      
      `
    }
  },
  methods: {
    handleScroll (e) {
      // console.log(e.position)
      if (e.position > 190) this.blackMenu = true
      else this.blackMenu = false
      this.$store.dispatch('state', ['position', e.position])
    },
    async accountLogin () {
      this.accountLoginLoading = true
      await this.$wait(2000)
      // TODO: request token?
      this.accountLoginLoading = false
      this.$router.push('/account')
    },
    openURL
  },
  mounted () {
    this.$log('mounted')
    this.$root.$on('toggleRightDrawer', (e) => {
      this.showRightDrawer = !this.showRightDrawer
    })
  },
  computed: {
    main () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="stylus">
.neon_mini
  font-family: Russo One;
  // position: absolute;
  transform: skewY(deg);
  transform: translate(-50% -50%);
  // border: 1px solid #fff;
  // border-radius: 10px
  // box-shadow: 0 0 5px #009992,  0 0 15px #009992, inset 0 0 5px #009992, inset 0 0 15px #009992;
  animation: animate 0s linear infinite;
.neon_text
  margin: 0;
  padding: 0;
  font-size: 1rem
  line-height: 20px;
  color: #009992;
  // text-shadow: 0 0 5px #009992, 0 0 10px #009992
</style>
