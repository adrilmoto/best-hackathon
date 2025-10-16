<template lang="pug">
  div.row.full-width.justify-center
    div(:style=`{position: 'relative'}`).row.full-width
      s-first(id="first" :style=`{order: 1}`)
      s-second(id="second" :style=`{order: 2}`)
      s-dates(id="dates" :style=`{order: 3}`)
      s-directions(id="directions" :style=`{order: 4}`)
      s-shedule(id="shedule" :style=`{order: 5}`)
      s-org(id="org" :style=`{order: 6}`)
      //- s-contacts(id="contacts" :style=`{order: 7}`)
      s-partners(id="partners" :style=`{order: 8}`)
</template>

<script>
import sFirst from 'components/sections/sFirst'
import sSecond from 'components/sections/sSecond'
import sPartners from 'components/sections/sPartners'
import sNat from 'components/sections/sNat'
import sBenefits from 'components/sections/sBenefits'
import sPackages from 'components/sections/sPackages'
import sContacts from 'components/sections/sContacts'
import sFaq from 'components/sections/sFaq'
import sOrg from 'components/sections/sOrg'
import sShedule from 'components/sections/sShedule'
import sDirections from 'components/sections/sDirections'
import sDates from 'components/sections/sDates'
export default {
  name: 'mainPage',
  components: { sFirst, sSecond, sPartners, sNat, sBenefits, sPackages, sContacts, sFaq, sOrg, sShedule, sDirections, sDates },
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
