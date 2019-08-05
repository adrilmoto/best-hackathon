<template lang="pug">
.row.justify-center.full-width
  div(style=`minHeight: 200px; maxWidth:1020px; width: 100%`).row.justify-center.bg-footer
    //- container
    //- modal POCITICY
    //- desktop
    div(style=`maxWidth: 1020px; width: 100%; paddingLeft: 20px; paddingRight: 20px `).row.items-start.gt-sm
      .col-6
        div(style=`width: 200px; height: 100px` @click="$router.push('/')").cursor-pointer
      .col-6
        .row.justify-end.semi-bold.q-mt-md
          span(style=`fontSize: 30px; color: white; fontWeight: 700`)
        .row.justify-end
           div(style=`marginTop: 30px`).row.justify-center
    //- mobile
    div(style=`maxWidth: 1020px; width: 100%; paddingLeft: 20px; paddingRight: 20px `).row.items-center.justify-center.lt-md
      .row
        div(style=`width: 200px; height: 100px` @click="$router.push('/')").cursor-pointer
      .col.gt-xs
      div(style=`maxWidth: 250px`).row.justify-center
        .row.full-width.justify-center
          span(style=`fontSize: 20px; color: white; fontWeight: 700`)
        div(style=`marginTop: 10px`).row.full-width.justify-center
</template>
<script>
export default {
  name: 'pFooter',
  components: {},
  data () {
    return {
      message: '',
      showNumberModal: false,
      showPoliticyModal: false,
      number: '',
      text: ``,
      numberModalLoading: false
    }
  },
  methods: {
    toggleMenu () {
      this.$root.$emit('togglemenu')
    }
  },
  mounted () {
    this.$log('mounted')
  },
  watch: {
    'scroll': {
      handler (to, from) {
        if (to > 150) this.$log('more than 150!!!')
      }
    }
  },
  computed: {
    getBorder () {
      return `1px solid ${this.white ? 'black' : 'black'}`
    },
    scroll () {
      return window.screenX
    }
  }
}
</script>
<style lang="stylus">
</style>
