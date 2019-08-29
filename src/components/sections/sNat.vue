<template lang="pug">
  .row.full-width
    div(style=`z-index: 100; box-shadow: 0 0px 100px #009992`).row.full-width.justify-center.bg-black.z
      //- По вопросам сотрудничества
      .row.full-width.justify-center.q-my-lg
        h2(style=`color: #009992; text-shadow: 1px -1px 0px #fff`) По вопросам сотрудничества
      div(style=`maxWidth: 1000px; width: 100%`).row.justify-center.items-center.q-my-xl
        div(style=`maxWidth: 400px; width: 100%; height: 400px; border-radius: 200px; border: 10px solid #009992`).big_nat.q-mx-md
        div(style=`width:50px`)
        .col-sm-12.col-md.row.justify-center
          div(style=`maxWidth: 600px; width: 100%`).q-px-md
            .row.full-width
              h2(style=``) Наталья Куликова
            .row.full-width
              span(style=`font-size: 20px; color: #009992`) Руководитель отдела по корпаративным связям
            .row.full-width
              span(style=`font-size: 20px`) Занимается работой с партнерами
            .row.full-width.items-center.q-py-xs
              div(style=`width: 50px; height: 50px`).vk
              .col
                .row.fit.items-center.q-ml-md
                  h5(style=`font-family: Russo One `) kulikova.nata
            .row.full-width.items-center.q-py-xs
              div(style=`width: 50px; height: 50px`).whats_app
              .col
                .row.fit.items-center.q-ml-md
                  h5(style=`font-family: Russo One `) WhatsApp, Viber, Telegram : +79120366056
            .row.full-width.items-center.q-py-xs
              div(style=`width: 50px; height: 50px`).mail
              .col
                .row.items-center.q-ml-md
                  h5(style=`font-family: Russo One `) kulikova.natalia.job@gmail.com
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sNat',
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
