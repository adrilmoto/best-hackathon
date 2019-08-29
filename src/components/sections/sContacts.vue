<template lang="pug">
  .row.full-width
    div(style=`z-index: 100`).row.full-width.justify-center.bg-black.q-pt-xl
      //- КОНТАКТЫ
      .row.full-width.justify-center
        h2(style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Контакты
      //- СЕКЦИЯ С КОНТАКТАМИ
      div(style=`width: 1100px; margin-bottom: 100px`).row.q-gutter-xl.justify-center.q-my-xl
        div(style=`font-family: Russo One; width: 200px; height: 300px` v-for="(s, ss) in photos" :key="s.id").row
          div(:style=`{width: '200px', height: '200px', backgroundPosition: 'center', backgroundImage: 'url(' + s.photo + ')'}`).justify-end.items-end.row.photos
            a(:href="s.link")
              div(style=`width: 50px; height: 50px`).vk.cp
          .row.full-width.justify-center
            span(style=`font-size: 18px`) {{s.name}}
          .row.full-width.justify-center
            span(style=`color: #009992; height: 50px`).text-center {{s.position}}
      //- .row.full-width.justify-center
        h2(style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Место проведения
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sContacts',
  components: { AOS },
  data () {
    return {
      photos: [
        {
          photo: 'statics/foto_pi.png',
          link: 'https://vk.com/lisskaaa',
          name: 'Елизавета Пименова',
          position: 'Главный организатор'
        },
        {
          photo: 'statics/foto_artemas.png',
          link: 'https://vk.com/dimaartemasov',
          name: 'Дмитрий Артемасов',
          position: 'Ментор'
        },
        {
          photo: 'statics/foto_lisa.png',
          link: 'https://vk.com/id139686335',
          name: 'Елизавета Мальцева',
          position: 'Ответсвенная за участников'
        },
        {
          photo: 'statics/foto_sonya.png',
          link: 'https://vk.com/ssssssssssssonia',
          name: 'Софья Глухова',
          position: 'Руководитель отдела по связям с общественностью'
        },
        {
          photo: 'statics/foto_nat.png',
          link: 'https://vk.com/kulikova.nata',
          name: 'Наталья Куликова',
          position: 'Руководитель отдела по корпоративным связям'
        },
        {
          photo: 'statics/foto_valera.png',
          link: 'https://vk.com/valyamaslov',
          name: 'Валерий Маслов',
          position: 'Ответсвенный за логистику'
        },
        {
          photo: 'statics/foto_shai.png',
          link: 'https://vk.com/darbyofficial',
          name: 'Шайдуров Дмитрий',
          position: 'Дизайнер'
        },
        {
          photo: 'statics/foto_roma.png',
          link: 'https://vk.com/id31042105',
          name: 'Роман Мотовилов',
          position: 'Отвественный за академическую часть'
        }
      ]
    }
  },
  created () {
    AOS.init()
  }
}
</script>
<style lang="stylus">
</style>
