<template lang="pug">
  div(:style=`{height: '55px', zIndex: '111'}`).row.full-width.justify-center.z
    div(style=`maxWidth: 1300px; width: 100%; z-index: 111;`).row.full-width.items-center.justify-between
      //- menu desktop
      div(style=`height: 50px;`).row.items-center
        div(style=`` @click="$router.push(`/`)").row.neon_mini.items-center.cursor-pointer
          div(style=`width: 50px; height: 50px`).logo_menu.q-mr-xs
          .col
            div.neon_text
              span H
              span A
              span C
              span K
              span A
              span T
              span H
              span(style=`color: #009992 `) O
              span(style=`color: #009992 `) N
            .row
            div.neon_text
              span B
              span E
              span S
              span T
              span  U
              span R
              span F
              span U
              span  2
              span 0
              span 1
              span 9
      .col.fit.gt-sm
        div().row.fit.items-center.justify-end
          div(
            v-for="(m, mi) in $store.state.main.routes.home" :key="m._id"
            style=`height: 50px;`
            ).row.items-center.content-center
            //- @click="$router.push('/')"
            a(:href="'#'+m._id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style=`text-decoration: none`).row.items-center.relative-position
              q-btn(@click="handleClick(m._id)" :label="m.name" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-ma-xs.menu_button
          .row.items-center.relative-position
            q-btn(@click="$router.push('/contacts')" label="Контакты" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-ma-xs.menu_button
          .row.items-center.relative-position
            q-btn(@click="$router.push('/partners')" label="Партнерам" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-ma-xs.menu_button
          .row.items-center.relative-position
            q-btn(@click="$router.push('/faq')" label="Faq" style=`font-family: Russo One` v-ripple="{color: 'primary'}" size="md" flat).q-ma-xs.menu_button
          .row.items-center.relative-position
            q-btn(label="Регистрация"
              @click="" flat style=`font-family: Russo One; maxWidth: 250px; width:100%; height: 40px; border-radius: 50px; background-image: linear-gradient(139deg, #00FFF3, #00D2C9, #009992, #00706A, #004643);`).q-ma-xs
      //- phone desktop
      // div(:style=`{ maxWidth:$q.screen.gt.sm ? '220px' : '460px', color: 'black' }`
      //   ).row.full-height.content-center.gt-sm
      //   div(@click="openCityNumberModel").row.full-width.justify-center.q-pr-xs
      //     span(style=`fontSize: 1.5rem; fontWeight: 500;`) {{ $store.state.main.config.info.phone }}
      //- toggle menu
      div(@click="$root.$emit('toggleRightDrawer')" style=`width: 50px; height: 50px;`
        ).row.items-center.justify-center.lt-md
        q-btn(icon="menu" color="primary" round flat)
</template>

<script>
export default {
  name: 'pMenu',
  data () {
    return {
      tab: 'main'
    }
  },
  watch: {
    'scroll': {
      handler (to, from) {
        if (to > 150) this.$log('more than 150!!!')
      }
    }
  },
  methods: {
    handleClick (path) {
      if (this.$route.path !== '/') this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus">
.menu_button
  // text-shadow: 0
  color: #009992;
.menu_button:hover
  // text-shadow: 0 0 5px #009992, 0 0 10px #009992, 0 0 15px #009992, 0 0 30px;
  // color: #fff;
.fix_menu
  position: fixed;
  z-index: 10000;
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
