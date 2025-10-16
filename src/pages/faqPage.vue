<template lang="pug">
  div.row.full-width.justify-center
    div(:style=`{position: 'relative'}`).row.full-width.z
      s-faq(id="faq" :style=`{order: 1}`)
</template>

<script>
import sFaq from 'components/sections/sFaq'
export default {
  name: 'faqPage',
  components: { sFaq },
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
