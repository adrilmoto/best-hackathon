<template lang="pug">
  .row.full-width
    div(style=`box-shadow: 0 0px 100px #009992`).row.full-width.justify-center.bg-black.z
      //- РАСПИСАНИЕ
      .row.full-width.justify-center
        h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Расписание
      .row.full-width.justify-center
        div(style=`maxWidth: 1000px; width: 100%`).row.justify-center.q-pa-xl.q-mb-xl
          //- ПЕРВЫЙ РЯД (СУББОТА)
          div(style=`width:300px`).row.justify-center
            div(style=`height: 200px`).row.full-width.justify-center.items-center
              span(style=`font-size: 25px; margin: 0px;`) Суббота
            div(data-aos="fade-up" data-aos-delay="150" style=`width: 65px; margin-top: 350px; transform: rotate(43deg); position: absolute; borderBottom: 4px solid #fff;`).gt-xs
            div(data-aos="fade-up" data-aos-delay="250" style=`width: 65px; margin-top: 500px; transform: rotate(-43deg); position: absolute; borderBottom: 4px solid #fff;`).gt-xs
            div(data-aos="fade-up" data-aos-delay="350" style=`width: 65px; margin-top: 650px; transform: rotate(43deg); position: absolute; borderBottom: 4px solid #fff;`).gt-xs
            div(data-aos="fade-up" data-aos-delay="450" style=`width: 65px; margin-top: 800px; transform: rotate(-43deg); position: absolute; borderBottom: 4px solid #fff;`).gt-xs
            //- 1 точка
            .row.full-width
              div(data-aos="new-animation" data-aos-delay="100" class="cards" style=`border-radius: 100px; border: 4px solid #fff`).row.justify-center.items-center
                div(class="front" style=`background-color: #009992; border-radius: 100px;`).row.justify-center.items-center
                  div(style=`width: 100px; height: 100px;`).s_1
                div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                  div(style=`width: 100px`)
                    .row.full-width.justify-center
                      span.text-center.shedule_title Регистрация
                    .row.full-width.justify-center
                      span.shedule_body.yellow-highlight 11:30-12:30
                    .row.full-width.justify-center
                      span.shedule_body.text-center Холл
            //- 2 точка
            .row.full-width
              .col-6
              .col-4
                div(data-aos="new-animation" data-aos-delay="200" class="cards" style=`border-radius: 100px; border: 4px solid #fff`).row.justify-center.items-center
                  div(class="front" style=`background-color: #009992; border-radius: 100px;`).row.justify-center.items-center
                    div(style=`width: 100px; height: 100px;`).s_2
                  div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                    div(style=`width: 100px`)
                      .row.full-width.justify-center
                        span.text-center.shedule_title Открытие
                      .row.full-width.justify-center
                        span.shedule_body.yellow-highlight 12:30-13:00
                      .row.full-width.justify-center
                        span.shedule_body.text-center Актовый зал
            //- 3 точка
            .row.full-width
              div(data-aos="new-animation" data-aos-delay="300" class="cards" style=`border-radius: 100px; border: 4px solid #fff`).row.justify-center.items-center
                div(class="front" style=`background-color: #009992; border-radius: 100px;`).row.justify-center.items-center
                  div(style=`width: 100px; height: 100px;`).s_3
                div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                  div(style=`width: 100px`)
                    .row.full-width.justify-center
                      span.text-center.shedule_title Работа над заданиями
                    .row.full-width.justify-center
                      span.shedule_body.yellow-highlight 13:00-15:30
                    .row.full-width.justify-center
                      span.shedule_body.text-center Аудитории
            //- 4 точка
            .row.full-width
              .col-6
              .col-4
                div(data-aos="new-animation" data-aos-delay="400" class="cards" style=`border-radius: 100px; border: 4px solid #fff`).row.justify-center.items-center
                  div(class="front" style=`background-color: #009992; border-radius: 100px;`).row.justify-center.items-center
                    div(style=`width: 100px; height: 100px;`).s_4
                  div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                    div(style=`width: 100px`)
                      .row.full-width.justify-center
                        span.text-center.shedule_title Обед
                      .row.full-width.justify-center
                        span.shedule_body.yellow-highlight 15:30-16:00
                      .row.full-width.justify-center
                        span.shedule_body.text-center Столовая
            //- 5 точка
            .row.full-width
              div(data-aos="new-animation" data-aos-delay="500" class="cards" style=`border-radius: 100px; border: 4px solid #fff`).row.justify-center.items-center
                div(class="front" style=`background-color: #009992; border-radius: 100px;`).row.justify-center.items-center
                  div(style=`width: 100px; height: 100px;`).s_5
                div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                  div(style=`width: 100px`)
                    .row.full-width.justify-center
                      span.text-center.shedule_title Ужин
                    .row.full-width.justify-center
                      span.shedule_body.yellow-highlight 19:00-19:30
                    .row.full-width.justify-center
                      span.shedule_body.text-center Столовая
          .col.gt-sm
          //- ВТОРОЙ СТОЛБЕЦ (ВОСКРЕСЕНЬЕ)
          div(style=`width:300px`).row.justify-center
            div(style=`height: 200px`).row.full-width.justify-center.items-center
              span(style=`font-size: 25px; margin: 0px;`) Воскресенье
            div(data-aos="fade-up" data-aos-delay="150" style=`width: 65px; margin-top: 350px; transform: rotate(43deg); position: absolute; borderBottom: 4px solid #fff;`).gt-xs
            div(data-aos="fade-up" data-aos-delay="250" style=`width: 65px; margin-top: 500px; transform: rotate(-43deg); position: absolute; borderBottom: 4px solid #fff;`).gt-xs
            div(data-aos="fade-up" data-aos-delay="350" style=`width: 65px; margin-top: 650px; transform: rotate(43deg); position: absolute; borderBottom: 4px solid #fff;`).gt-xs
            div(data-aos="fade-up" data-aos-delay="450" style=`width: 65px; margin-top: 800px; transform: rotate(-43deg); position: absolute; borderBottom: 4px solid #fff;`).gt-xs
            //- 1 точка
            .row.full-width
              div(data-aos="new-animation" data-aos-delay="100" class="cards" style=`border-radius: 100px; border: 4px solid #fff`).row.justify-center.items-center
                div(class="front" style=`background-color: #009992; border-radius: 100px`).row.justify-center.items-center
                  div(style=`width: 100px; height: 100px;`).v_1
                div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                  div(style=`width: 100px`)
                    .row.full-width.justify-center
                      span.text-center.shedule_title Кофе брейк
                    .row.full-width.justify-center
                      span.shedule_body.yellow-highlight 00:00-00:30
                    .row.full-width.justify-center
                      span.shedule_body Столовая
            //- 2 точка
            .row.full-width
              .col-6
              .col-4
                div(data-aos="new-animation" data-aos-delay="200" class="cards" style=`border-radius: 100px;  border: 4px solid #fff`).row.justify-center.items-center
                  div(class="front" style=`background-color: #009992; border-radius: 100px; `).row.justify-center.items-center
                    div(style=`width: 100px; height: 100px;`).v_2
                  div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                    div(style=`width: 100px`)
                      .row.full-width.justify-center
                        span.text-center.shedule_title Завтрак
                      .row.full-width.justify-center
                        span.shedule_body.yellow-highlight 10:00-10:30
                      .row.full-width.justify-center
                        span.shedule_body Столовая
            //- 3 точка
            .row.full-width
              div(data-aos="new-animation" data-aos-delay="300" class="cards" style=`border-radius: 100px;  border: 4px solid #fff`).row.justify-center.items-center
                div(class="front" style=`background-color: #009992; border-radius: 100px;`).row.justify-center.items-center
                  div(style=`width: 100px; height: 100px;`).v_3
                div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                  div(style=`width: 100px`)
                    .row.full-width.justify-center
                      span.text-center.shedule_title Завершение работы
                    .row.full-width.justify-center
                      span.shedule_body.yellow-highlight 10:30-13:00
                    .row.full-width.justify-center
                      span.shedule_body Аудитории
            //- 4 точка
            .row.full-width
              .col-6
              .col-4
                div(data-aos="new-animation" data-aos-delay="400" class="cards" style=`border-radius: 100px;  border: 4px solid #fff`).row.justify-center.items-center
                  div(class="front" style=`background-color: #009992; border-radius: 100px;`).row.justify-center.items-center
                    div(style=`width: 100px; height: 100px;`).v_4
                  div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                    div(style=`width: 100px`)
                      .row.full-width.justify-center
                        span.text-center.shedule_title Обед
                      .row.full-width.justify-center
                        span.shedule_body.yellow-highlight 13:00-15:00
                      .row.full-width.justify-center
                        span.shedule_body.text-center Актовый зал
            //- 5 точка
            .row.full-width
              div(data-aos="new-animation" data-aos-delay="500" class="cards" style=`backgound-color: #fff; width: 150px; height: 150px; border-radius: 100px;  border: 4px solid #fff`).row.justify-center.items-center
                div(class="front" style=`background-color: #009992; border-radius: 100px;`).row.justify-center.items-center
                  div(style=`width: 100px; height: 100px;`).v_5
                div(class="back" style=`background-color: #009992; border-radius:100px;`).row.justify-center.items-center
                  div(style=`width: 100px`)
                    .row.full-width.justify-center
                      span.text-center.shedule_title Закрытие
                    .row.full-width.justify-center
                      span.shedule_body.yellow-highlight 15:00-16:00
                    .row.full-width.justify-center
                      span.shedule_body.text-center Актовый зал
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sShedule',
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
