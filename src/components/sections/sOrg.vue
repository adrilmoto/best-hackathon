<template lang="pug">
  .row.full-width
    .row.full-width.justify-center
      //- ОБ ОРГАНИЗАТОРАХ
      .row.full-width.justify-center
        h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`).z Об организаторах
      //- ТЕКСТ
      div(style=`maxWidth: 1100px; width: 100%`).row.justify-center.q-my-xl.content-start
        //- ЛЕВЫЙ
        div(data-aos="fade-right" data-aos-delay="100").col-md-6.col-sm-12.z
          .row.full-width.q-pa-md
            span(style=`color: #009992; margin: 0px 0px`) HACKATHON
            span(style=``) организовывает<span class="yellow-highlight"> Европейский Союз студентов технических специальностей</span>, объединяющий технические университеты Европы в 34 странах.
        //- ПРАВЫЙ
        div(data-aos="fade-up" data-aos-delay="200").col-md-6.col-sm-12.z
          div(style=`width: calc(200px + (500 - 200) * ((100vw - 320px) / (1600 - 320))); height: calc(100px + (200 - 100) * ((100vw - 320px) / (1600 - 320)))`).logo-best
        .col-12.z
          div(data-aos="fade-up" data-aos-delay="400" style=`margin-top: calc(20px + (100 - 20) * ((100vw - 320px) / (1600 - 320)))`).row.full-width.justify-end.z.q-pa-md
            span(style=``).text-right.z <p><span style="" class="yellow-highlight">BEST Ekaterinburg URFU</span> – одна из 96-и локальных групп этой</p><p style="margin-bottom: 8px">международной некоммерческой организации, базирующаяся</p><p>в Уральском Федеральном Университете.</p>
        //- ТЕКСТ С ЛАМПОЙ
        div(data-aos="fade-up" data-aos-delay="600" style=`margin-top: calc(20px + (100 - 20) * ((100vw - 320px) / (1600 - 320)))`).row.full-width.justify-center.z
          div(style=`maxWidth: calc(50px + (250 - 50) * ((100vw - 320px) / (1600 - 320))); ; width: 100%; height: calc(50px + (250 - 50) * ((100vw - 320px) / (1600 - 320)));`).lamp
          .col
            div(style=`height: 250px; padding-top: 30px`).row.content-center
              span.z За 16 лет существования локальной группы мы ежегодно организуем <span class="yellow-highlight">мероприятия, направленные на развитие студентов.</span>
              span.z В прошлом году мы впервые провели IT-соревнование HACKATHON, в котором приняло участие <span class="yellow-highlight">100 человек.</span>
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sOrg',
  components: { AOS },
  data () {
    return {
      min: '',
      max: ''
    }
  },
  created () {
    AOS.init()
  },
  computed: {
  }
}
</script>

<style lang="stylus">

</style>
