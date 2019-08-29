<template lang="pug">
.row.justify-center.full-width
  div(:style=`{height: '', zIndex: '1000'}`).row.full-width.justify-center.bg-white
    div(style=`maxWidth: 1300px; width: 100%; margin-top: 50px`).row.full-width.items-start.justify-center
      //- menu desktop
      .col-xs-12.col-sm-12.col-md-4.row.justify-start.gt-sm
        div(style=`maxWidth: 320px; width: 100%`).justify-center.q-my-md
          div(style=`height: 50px;`).row.items-center
            div(style=`` @click="$router.push(`/`)").row.neon_mini.items-center.cp
              div(style=`width: 50px; height: 50px`).logo_menu.q-mr-xs
              .col
                div.neon_text
                  span HACKATHON
                .row
                div.neon_text
                  span BEST URFU 2019
      .col-xs-12.col-sm-12.col-md-4.row.lt-md.row.justify-center
        div(style=`maxWidth: 320px; width: 100%`).q-pa-md
          .row.full-width.justify-start
            span(style=`font-size: 22px; color: #009992;`).text-bold Social
          .row.full-width.justify-start.q-gutter-sm.q-mt-md
            div(href="" style=`width: 50px; height: 50px`).cp.vk2
            div(href="" style=`width: 50px; height: 50px`).cp.inst
            div(href="" style=`width: 50px; height: 50px`).cp.telegram
      .col-xs-12.col-sm-12.col-md-2.row.row.justify-center
        div(style=`maxWidth: 320px; width: 100%`).q-pa-md
          .row.full-width.justify-start
            span(style=`font-size: 22px; color: #009992;`).text-bold Educational Involvement
          .row.full-width.justify-start.q-mt-md
            a(href="https://best.eu.org/educationalInvolvement/BESTSymposiaOnEducation.jsp").text-black Events
          .row.full-width.justify-start
            a(href="https://best.eu.org/educationalInvolvement/conferences.jsp").text-black Conferences and Publications
          .row.full-width.justify-start
            a(href="https://best.eu.org/educationalInvolvement/pastProjects.jsp").text-black Projects
          .row.full-width.justify-start
            a(href="https://best.eu.org/educationalInvolvement/partners_and_projects.jsp").text-black Partners
          .row.full-width.justify-start
            a(href="https://best.eu.org/educationalInvolvement/news.jsp").text-black News
          .row.full-width.justify-start
            a(href="/contacts").text-black Contact Us
      .col-xs-12.col-sm-12.col-md-2.row.justify-center
        div(style=`maxWidth: 320px; width: 100%`).q-pa-md
          .row.full-width.justify-start
            span(style=`font-size: 22px; color: #009992;`).text-bold About BEST
          .row.full-width.justify-start.q-mt-md
            a(href="https://best.eu.org/aboutBEST/welcome.jsp").text-black About BEST
          .row.full-width.justify-start
            a(href="https://best.eu.org/aboutBEST/identity.jsp").text-black Identity
          .row.full-width.justify-start
            a(href="https://best.eu.org/aboutBEST/history.jsp").text-black History
          .row.full-width.justify-start
            a(href="https://best.eu.org/aboutBEST/structure/lbgList.jsp").text-black Local Groups
          .row.full-width.justify-start
            a(href="https://best.eu.org/aboutBEST/createGroup/index.jsp").text-black Join BEST
          .row.full-width.justify-start
            a(href="https://best.eu.org/aboutBEST/studentAssociations/index.jsp").text-black Student Associations
          .row.full-width.justify-start
            a(href="https://best.eu.org/aboutBEST/news.jsp").text-black Press
          .row.full-width.justify-start
            a(href="/contacts").text-black Support / Contuct Us
      .col-xs-12.col-sm-12.col-md-4.row.gt-sm
        div(style=`maxWidth: 320px; width: 100%`).q-pa-md
          .row.full-width.justify-center
            span(style=`font-size: 22px; color: #009992;`).text-bold Social
          .row.full-width.justify-end.q-gutter-sm.q-mt-md
            div(href="" style=`width: 50px; height: 50px`).cp.vk2
            div(href="" style=`width: 50px; height: 50px`).cp.inst
            div(href="" style=`width: 50px; height: 50px`).cp.telegram
      //- phone desktop
      // div(:style=`{ maxWidth:$q.screen.gt.sm ? '220px' : '460px', color: 'black' }`
      //   ).row.full-height.content-center.gt-sm
      //   div(@click="openCityNumberModel").row.full-width.justify-center.q-pr-xs
      //     span(style=`fontSize: 1.5rem; fontWeight: 500;`) {{ $store.state.main.config.info.phone }}
      //- toggle menu
    div(style=`font-size: 13px` @click="$router.push(`/`)").row.full-width.items-end.justify-end.bg-white.q-pb-md.q-pr-md.q-pt-xl.cp
      span.text-black ©BEST URFU HACKATHON 2019
      span.text-black // created by <a class="text-black" href="">OJV</a>
    div(style=`height: 5px; background-image: linear-gradient(139deg, #00FFF3, #00D2C9, #009992, #00706A, #004643); `).row.full-width
    //- div(style=`font-size: 13px`).row.full-width.justify-center.bg-white
    //-   span.text-black created by <a href="">OJV</a>
    //- div(style=`font-size: 13px`).row.full-width.justify-center.bg-white
    //-   span.text-black 2019
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
.vk2
  background-image: url("~assets/VK2.svg");
  background-repeat: no-repeat;
  background-position: center;
.telegram
  background-image: url("~assets/Telegram.svg");
  background-repeat: no-repeat;
  background-position: center;
.inst
  background-image: url("~assets/Instagram.svg");
  background-repeat: no-repeat;
  background-position: center;
</style>
