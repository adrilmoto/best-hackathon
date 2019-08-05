<template lang="pug">
  q-layout(view="lHh Lpr lFf" @scroll="handleScroll" style=`position: relative`).full-width
    q-dialog(v-model="showAccountModal")
      div(style=`maxWidth: 340px; width: 100%`).column.bg-white
        //- header
        div(style=`height: 50px`).row.full-width.items-center.justify-center
          .col
            .row.fit.items-center.justify-center
              span.text-semibold ВХОД В ЛИЧНЫЙ КАБИНЕТ
          //- close btn
          div(@click="$wait(300).then(() => showAccountModal = false)"
            style=`width: 50px; height: 50px; border-radius: 5px` v-ripple="{color: 'primary'}"
            ).row.items-center.justify-center.cursor-pointer.relative-position
            q-icon(name="clear" color="primary" size="25px")
        //- name
        // body
        .col.scroll.q-pb-xl.q-px-xl
          q-input(placeholder="Номер телефона" filled v-model="name").full-width
          q-btn(label="Войти"
            @click="accountLogin" :loading="accountLoginLoading"
            color="light-green-7" style=`height: 60px; borderRadius: 7px`
            push no-caps).full-width.q-mt-md
    //- right drawer
    q-drawer(side="right" behavior="mobile" v-model="showRightDrawer" style="zIndex: 2000")
      .column.fit
        //- header
        div(style=`height: 80px; borderBottom: 1px solid #eee`).row.full-width.items-center.content-center.q-px-md
          h6 {{ $store.state.main.config.info.site_name }}
        //- routes
        .col.scroll
          div(
            v-for="(m, mi) in $store.state.main.routes.home" :key="m._id"
            style=`height: 50px; borderBottom: 1px solid #eee; text-decoration: none`
            ).row.full-width.items-center.content-center
            a(:href="'#'+m._id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '' }"
              @click="$root.$emit('toggleRightDrawer')" v-ripple=`{color: '#eee'}`
              style="text-decoration: none").row.fit.items-center.relative-position.cursor-pointer.q-px-md
              span.text-black {{ m.name }}
          div(@click="$router.push('/payment')"
            style=`height: 50px; text-decoration: none`).row.full-width.items-center.q-px-md.cursor-pointer.hr
            span.text-black Договор-оплата
          //- div(style=`height: 50px`).row.full-width.items-center.content-center.q-pa-md
            q-btn(flat color="light-green-7" icon="perm_identity" style=`padding: 0px` @click="accountLogin" :loading="accountLoginLoading") войти в личный кабинет
        //- footer
        div(style=`height: 50px`).row.full-width.items-center.q-px-md
          small.text-black © {{ $store.state.main.config.info.site_name }} {{ $store.state.main.config.info.year_of_foundation }}-{{new Date().getFullYear()}}
    p-menu
    q-page-container
      router-view
    p-footer
</template>

<script>
import { routes } from 'components/config.js'
import { openURL } from 'quasar'
import pMenu from 'components/pMenu'
import pFooter from 'components/pFooter'
export default {
  name: 'mainLayout',
  components: { pMenu, pFooter },
  meta () {
    return {
      title: this.siteName
    }
  },
  data () {
    return {
      splitterModel: 20,
      tab: '',
      showAccountModal: false,
      accountLoginLoading: false,
      routes,
      showRightDrawer: false,
      blackMenu: false,
      name: '',
      siteName: 'Скарн - найм жилья без посредников',
      ddd: `
      
      `
    }
  },
  methods: {
    handleScroll (e) {
      // console.log(e.position)
      if (e.position > 190) this.blackMenu = true
      else this.blackMenu = false
      this.$store.dispatch('state', ['position', e.position])
    },
    async accountLogin () {
      this.accountLoginLoading = true
      await this.$wait(2000)
      // TODO: request token?
      this.accountLoginLoading = false
      this.$router.push('/account')
    },
    openURL
  },
  mounted () {
    this.$log('mounted')
    this.$root.$on('toggleRightDrawer', (e) => {
      this.showRightDrawer = !this.showRightDrawer
    })
  }
}
</script>

<style lang="stylus">

</style>
