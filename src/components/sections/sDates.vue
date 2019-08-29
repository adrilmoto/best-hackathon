<template lang="pug">
  .row.full-width
    .row.full-width.justify-center
      //- ДАТЫ
      .row.full-width.justify-center
        h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff; z-index: 100`).q-my-xl До мероприятия осталось!
      //- выравнивание по центру
      div(style=``).row.full-width.justify-center.q-my-md
        div(id="timer" style=`z-index: 100` class="timer")
          countdown(date="October 26, 2019")
      div(style=`z-index: 100; box-shadow: 0 0px 100px #009992`).row.full-width.justify-center.q-pb-xl.bg-black
        .row.full-width.justify-center
          h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`).q-mb-xl Этапы проведения
        //- ЭЛЕМЕНТ КРУГИ
        .row.full-width.justify-center.q-px-xl
          div(data-aos="fade-right" data-aos-delay="200" ).col-sm-12.col-md.row.justify-center.q-my-md
            .ball.row.items-center.justify-center
              .inside_ball.row.items-center.justify-center
                .inside_img_1
            .row.full-width.items-center.justify-center.q-mt-md
              .row.full-width.justify-center.text-center
                span Начало регистрации
              .row.full-width.justify-center.yellow-highlight
                span 10.09.2019
          div(data-aos="fade-right" data-aos-delay="300").arrow_r.q-mx-xs.gt-sm
          .row.full-width.justify-center.lt-md
            div(data-aos="fade-down" data-aos-delay="300").arrow_b.q-my-xs
          div(data-aos="fade-right" data-aos-delay="400").col-sm-12.col-md.row.justify-center.q-my-md
            .ball.row.items-center.justify-center
              .inside_ball.row.items-center.justify-center
                .inside_img_2
            .row.full-width.items-center.justify-center.q-mt-md
              .row.full-width.justify-center.text-center
                span Конец регистрации
              .row.full-width.justify-center.yellow-highlight
                span 13.10.2019
          div(data-aos="fade-right" data-aos-delay="500").arrow_r.q-mx-xs.gt-sm
          .row.full-width.justify-center.lt-md
            div(data-aos="fade-down" data-aos-delay="500").arrow_b.q-my-xs.lt-md.row
          div(data-aos="fade-right" data-aos-delay="200").col-sm-12.col-md.row.justify-center.q-my-md
            .ball.row.items-center.justify-center
              .inside_ball.row.items-center.justify-center
                .inside_img_3
            .row.full-width.items-center.justify-center.q-mt-md
              .row.full-width.justify-center.text-center
                span Старт тестового задания
              .row.full-width.justify-center.yellow-highlight
                span 14.09.2019
          div(data-aos="fade-right" data-aos-delay="300").arrow_r.q-mx-xs.gt-sm
          .row.full-width.justify-center.lt-md
            div(data-aos="fade-down" data-aos-delay="300").arrow_b.q-my-xs.lt-md.row
          div(data-aos="fade-right" data-aos-delay="400").col-sm-12.col-md.row.justify-center.q-my-md
            .ball.row.items-center.justify-center
              .inside_ball.row.items-center.justify-center
                .inside_img_4
            .row.full-width.items-center.justify-center.q-mt-md
              .row.full-width.justify-center.text-center
                span Готовое тестовое задание
              .row.full-width.justify-center.yellow-highlight
                span 21.10.2019
          div(data-aos="fade-right" data-aos-delay="500").arrow_r.q-mx-xs.gt-sm
          .row.full-width.justify-center.lt-md
            div(data-aos="fade-down" data-aos-delay="500").arrow_b.q-my-xs.lt-md.row
          div(data-aos="fade-right" data-aos-delay="600").col-sm-12.col-md.row.justify-center.q-my-md
            .ball.row.items-center.justify-center
              .inside_ball.row.items-center.justify-center
                .inside_img_5
            .row.full-width.items-center.justify-center.q-mt-md
              .row.full-width.justify-center.text-center
                span HACKATHON
              .row.full-width.justify-center.yellow-highlight
                span 19 - 20.10.2019
          //- //- ТЕКСТ СЛЕВА
          //- div(style=`maxWidth: 200px;  width: 100%;`).row.text-white.text-right.text-right.content-start.q-mr-md
          //-   div(style=`margin-top: 110px; height: 50px`).row
          //-     span(style=``).full-width.justify-right Конец регистрации
          //-     span(style=``).justify-right.full-width.yellow-highlight 13.10.2019
          //-   div(style=`margin-top: 75px; height: 70px`).row
          //-     span(style=``) Готовое тестовое задание
          //-     span(style=``).justify-right.full-width.yellow-highlight 21.10.2019
          //- //- САМИ КРУГИ
          //- div(style=`maxWidth:455px; width: 100%; padding-bottom: 63px`).row
          //-   //- красный
          //-   .red_arrow
          //-   .red_ball.row.items-center.justify-center
          //-     .red_ball_inside.row.items-center.justify-center
          //-       .red_image
          //-   //- синий
          //-   .blue_arrow
          //-   .blue_ball.row.items-center.justify-center
          //-     .blue_ball_inside.row.items-center.justify-center
          //-       .blue_image
          //-   //- желтый
          //-   .yellow_arrow
          //-   .yellow_ball.row.items-center.justify-center
          //-     .yellow_ball_inside.row.items-center.justify-center
          //-       .yellow_image
          //-   //- феолетовый
          //-   .purple_arrow
          //-   .purple_ball.row.items-center.justify-center
          //-     .purple_ball_inside.row.items-center.justify-center
          //-       .purple_image
          //-   //- зеленый
          //-   .green_arrow
          //-   .green_ball.row.items-center.justify-center
          //-     .green_ball_inside.row.items-center.justify-center
          //-       .green_image
          //- //- ТЕКСТ СПРАВА
          //- div(style=`maxWidth: 200px;  width: 100%;`).row.text-white.justify-left.content-start.q-ml-md
          //-   div(style=`margin-top: 50px; height: 50px`).row
          //-     .row.full-width
          //-       span(style=``) Начало регистрации
          //-     .row.full-width.yellow-highlight
          //-       span(style=``) 10.09.2019
          //-   div(style=`margin-top: 70px; height: 50px`).row
          //-     .row.full-width
          //-       span(style=``) Старт тестового задания
          //-     .row.full-width.yellow-highlight
          //-       span(style=``) 14.09.2019
          //-   div(style=`margin-top: 95px; height: 50px`).row
          //-     .row.full-width
          //-       span(style=``) HACKATHON
          //-     .row.full-width.yellow-highlight
          //-       span(style=``) 26 - 27.10.2019
        div(id="directions" style=`margin-top: 50px`).row.full-width.justify-center.bg-black
          h2(data-aos="fade-up" style=`z-index: 100; color: #009992; text-shadow: 1px -1px 0px #fff;`) Направления HACKATHON BEST UrFU 2019
        .row.full-width.justify-center.q-py-md.bg-black
          span(style=`z-index: 100`).text-center HACKATHON предлагает тебе два направления участия:
        div(style=``).row.full-width.justify-center.bg-black
          div(style=`maxWidth: 1300px; width: 100%`).row.justify-center.q-py-lg.q-pb-xl
            //- WEB
            div(style=`maxWidth: 600px; width: 100%`).row
              .row.full-width.justify-center
                div(data-aos="fade-up" style=`position: absolute; maxWidth: 300px; width: 100%; height: 300px;`).row.red-pen
              .row.full-width.justify-center
                div(data-aos="fade-up" style=`margin-top: 300px; maxWidth: 600px; width: 100%; height: 250px;`).row.justify-center.content-start
                  h2.row.full-width.justify-center WEB DEVELOPMENT
                  span(style=`width: 300px`).row.text-center Если интерисуешься разработкой прототипов для обработка наборов данных
            .col.gt-sm
              .row.full-width.full-height.justify-center
                div(data-aos="fade" style=`width: 0px; outline: 2px solid #fff`).full-height
            //- DATA
            div(style=`maxWidth: 600px; width: 100%`).row
              .row.full-width.justify-center
                div(data-aos="fade-up" style=`position: absolute; maxWidth: 300px; width: 100%; height: 300px;`).row.blue-pen
              .row.full-width.justify-center
                div(data-aos="fade-up" style=`margin-top: 300px; maxWidth: 600px; width: 100%; height: 250px;`).row.justify-center.content-start
                  h2.row.full-width.justify-center DATA SCIENCE
                  span(style=`width: 300px`).row.text-center Если интерисуешься разработкой сайтов и веб-приложений
            //- .col.gt-xs
            //-   div(data-aos="fade" style=`width: 0px; outline: 2px solid #fff`).full-height
            //- div(data-aos="fade-left" style=`width: 500px; height: 300px;`).row.blue-pen
            //- div(data-aos="fade-up" style=`width: 500px; height: 200px;`).row.justify-center.content-start
            //-   h4 DATA SCIENCE
            //-   span(style=`width: 300px`).text-center Если интерисуешься разработкой прототипов для обработка наборов данных
            //- div(data-aos="fade-up" style=`width: 500px; height: 200px;`).row.justify-center.content-start
            //-   h4 WEB DEVELOPMENT
            //-   span(style=`width: 300px`).text-center Если интерисуешься разработкой сайтов и веб-приложений
      .row.full-width.justify-center.q-mt-xl.q-px-md
        div(data-aos="fade-up" style=`maxWidth: 1100px; width: 100%;`).row.text-center.justify-center.z
          h5.text-center Итак, ты выбрал направление и уже хочешь скорее провести 24 часа, выполняя интересные задания и соревнуясь с другими студентами города?
      .row.full-width.justify-center.q-mb-xl.q-px-md
        h5(data-aos="fade-up" data-aos-delay="300").z.text-center Дело за малым — собирай команду и регистрируйся.
      .row.full-width.justify-center.q-my-xl
        q-btn(data-aos="fade-up" data-aos-delay="400" label="Регистрация"
              @click="" style=`font-size: 22px ;maxWidth: 250px; width:100%; height: 70px; border-radius: 50px; background-image: linear-gradient(139deg, #00FFF3, #00D2C9, #009992, #00706A, #004643);` push).row.z
      div(data-aos="fade-up" data-aos-delay="400" style=`width: 1100px`).row.justify-center.q-my-xl.z.q-px-md
        div(style=`width: 50px; height: 50px`).row.warn
        .col.q-ml-md.items-center
          span(style=`font-size: 15px`).z.text-left А еще, секретная информация для тех, кто дочитал до конца — лучшие участники могут получить приглашение на стажировку в компании, которые разрабатывали задания.
</template>
<script>
import AOS from 'aos'
import countdown from 'components/countdown.vue'
export default {
  name: 'sDates',
  components: { AOS, countdown },
  props: [],
  data () {
    return {
    }
  },
  created () {
    AOS.init()
  },
  methods: {
    ready () {
      window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
      }, 1000)
    }
  },
  ready () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  }
}
</script>
<style lang="stylus">
.inside_img_1
  background-image: url("~assets/inside_img_1.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.inside_img_2
  background-image: url("~assets/inside_img_2.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.inside_img_3
  background-image: url("~assets/inside_img_3.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.inside_img_4
  background-image: url("~assets/inside_img_4.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.inside_img_5
  background-image: url("~assets/inside_img_5.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (60 - 50) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.arrow_b
  background-image: url("~assets/arrrow_primary_B.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(25px + (50 - 25) * ((100vw - 320px) / (1600 - 320)));
  height: calc(45px + (90 - 45) * ((100vw - 320px) / (1600 - 320)));
  opacity: 0.7;
  transform: translate(-50% -50%);
.arrow_r
  background-image: url("~assets/arrow_primary.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(0px + (90 - 0) * ((100vw - 320px) / (1600 - 320)));
  height: calc(0px + (50 - 0) * ((100vw - 320px) / (1600 - 320)));
  opacity: 0.7;
  margin-top: calc(50px + (80 - 50) * ((100vw - 320px) / (1600 - 320)));
  transform: translate(-50% -50%);
.ball
  background-color: #009992;
  height: calc(120px + (170 - 120) * ((100vw - 320px) / (1600 - 320)));
  width: calc(120px + (170 - 120) * ((100vw - 320px) / (1600 - 320)));
  border-radius: 50%;
  margin-left: calc(0 + (205 - 0) * ((100vw - 320px) / (1600 - 320)));
  opacity: 0.9;
.inside_ball
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: calc(80px + (100 - 80) * ((100vw - 320px) / (1600 - 320)));
  height: calc(80px + (100 - 80) * ((100vw - 320px) / (1600 - 320)));
.purple_arrow
  background-image: url("~assets/arrow_primary_L.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(45px + (90 - 45) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (50 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 0.7;
  margin-right: calc(125 + (250 - 125) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 16px;
.blue_arrow
  background-image: url("~assets/arrow_primary_L.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(45px + (90 - 45) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (50 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 0.7;
  margin-right: calc(125 + (250 - 125) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 13px;
.green_arrow
  background-image: url("~assets/arrow_primary.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(45px + (90 - 45) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (50 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 0.7;
  margin-left: calc(180 + (375 - 180) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 20px;
.yellow_arrow
  background-image: url("~assets/arrow_primary.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(45px + (90 - 45) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (50 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 0.7;
  margin-left: calc(180 + (375 - 180) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 20px;
.red_arrow
  background-image: url("~assets/arrow_primary.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(45px + (90 - 45) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (50 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 0.7;
  margin-left: calc(180 + (375 - 180) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 60px;
.red_ball
  background-color: #009992;
  height: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  width: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  border-radius: 50%;
  margin-left: calc(100 + (205 - 100) * ((100vw - 320px) / (1600 - 320)));
  position: absolute;
  opacity: 0.7;
.red_ball_inside
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
.red_image
  background-image: url("~assets/red.png");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.blue_ball
  background-color: #009992;
  height: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  width: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 67.5px;
  margin-left: 90px;
  border-radius: 50%;
  position: absolute;
  opacity: 0.7;
.blue_ball_inside
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
.blue_image
  background-image: url("~assets/blue.png");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.yellow_ball
  background-color: #009992;
  height: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  width: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 135px;
  margin-left: 205px;
  border-radius: 50%;
  position: absolute;
  opacity: 0.7;
.yellow_ball_inside
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
.yellow_image
  background-image: url("~assets/yellow.png");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(25px + (70 - 25) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.green_ball
  background-color: #009992;
  height: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  width: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 270px;
  margin-left: 205px;
  border-radius: 50%;
  position: absolute;
  opacity: 0.7
.green_ball_inside
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
.green_image
  background-image: url("~assets/green.png");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1;
.purple_ball
  background-color: #009992;
  height: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  width: calc(100px + (170 - 100) * ((100vw - 320px) / (1600 - 320)));
  margin-top: 202px;
  margin-left: 90px;
  border-radius: 50%;
  position: absolute;
  opacity: 0.7;
.purple_ball_inside
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
  height: calc(50px + (100 - 50) * ((100vw - 320px) / (1600 - 320)));
.purple_image
  background-image: url("~assets/purple.png");
  background-repeat: no-repeat;
  background-position: center;
  width: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  height: calc(25px + (60 - 25) * ((100vw - 320px) / (1600 - 320)));
  opacity: 1
.z
  z-index: 10
</style>
