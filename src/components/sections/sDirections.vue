<template lang="pug">
  .row.full-width
    .row.full-width.justify-center
      //- Направления
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sDirections',
  components: { AOS },
  data () {
    return {
    }
  },
  created () {
    AOS.init()
  }
}
</script>
<style lang="stylus">
</style>
