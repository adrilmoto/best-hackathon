<template lang="pug">
.row.full-width
  div(:style=`{marginTop:$q.screen.gt.sm ? '150px' : '200px', width: '100%'}`).row.window-width.window-height.justify-center.full-width.items-center
    div(style="width:200px; height:250px; border-radius: 5px").row.q-shadow-5.justify-center
      div(style="width:150px; height: 150px").logoHackaton.br
</template>

<script>
export default {
  name: 'sFirst',
  components: { },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.logoHackaton
  background-image: url("~assets/hackathonMainLogo.png")
  background-repeat: no-repeat
  background-position: center
  width 100%
</style>
