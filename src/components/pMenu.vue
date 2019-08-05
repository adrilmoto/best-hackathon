<template lang="pug">
div(
  :style=`{ height:$q.screen.gt.sm ? '100px' : '50px', position: 'fixed', zIndex: '1000' } `
  ).row.justify-center.full-width
  //- container
  div(style=`width: 100%`).row.justify-end.q-px-sm
    //- menu desktop
    .col.fit.justify-end.items-baseline.gt-sm
      .row.fit.items-end.justify-end.q-pr-xl
        q-tabs(v-model="tab" id="menu" no-caps dense class="text-white" active-color="primary"
          indicator-color="white" align="justify").row
          a(href="#main" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style="text-decoration: none").text-white
            q-tab(label="Главная" @click="$router.push('/')")
          a(href="#benefit" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style="text-decoration: none").text-white
            q-tab(label="Выгода" @click="$router.push('/')")
          a(href="#about" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style="text-decoration: none").text-white
            q-tab(label="О мероприятии" @click="$router.push('/')")
          a(href="#registration" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }" style="text-decoration: none").text-white
            q-tab(label="Регистрация" @click="$router.push('/')")
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
  }
}
</script>
<style lang="stylus">
</style>
