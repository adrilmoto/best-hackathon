<template lang="pug">
  div.row.full-width.justify-center
    div(:style=`{position: 'relative'}`).row.full-width
      s-first(id="first" :style=`{order: 1}`)
      s-second(id="second" :style=`{order: 2}` )
</template>

<script>
import sFirst from 'components/sections/sFirst'
import sSecond from 'components/sections/sSecond'
export default {
  name: 'mainPage',
  components: { sFirst, sSecond },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$log('mounted')
  }
}
</script>

<style lang="stylus">
</style>
