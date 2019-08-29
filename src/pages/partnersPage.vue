<template lang="pug">
  div.row.full-width.justify-center.z-top
    div(:style=`{position: 'relative'}`).row.full-width
      //- h1.z-top hello
      s-benefits(id="benefits" :style=`{order: 1}`)
      s-packages(id="packages" :style=`{order: 2}`)
      s-nat(id="nat" :style=`{order: 3}`)
</template>

<script>
import sNat from 'components/sections/sNat'
import sBenefits from 'components/sections/sBenefits'
import sPackages from 'components/sections/sPackages'
export default {
  name: 'partnersPage',
  components: { sNat, sBenefits, sPackages },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$log('mounted')
  },
  beforeDestroy () {
    this.$log('beforeDestroy')
  }
}
</script>

<style lang="stylus">
</style>
