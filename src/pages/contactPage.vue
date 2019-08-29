<template lang="pug">
  div.row.full-width.justify-center
    div(:style=`{position: 'relative'}`).row.full-width
      s-contacts(id="contacts" :style=`{order: 1}`)
</template>

<script>
import sContacts from 'components/sections/sContacts'
export default {
  name: 'contactPage',
  components: { sContacts },
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
