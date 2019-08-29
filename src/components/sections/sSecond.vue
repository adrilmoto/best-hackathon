<template lang="pug">
.row.full-width
  div(style=`minHeight: 700px; box-shadow: 0 0px 700px #009992; z-index: 100`).row.full-width.justify-center.bg-black
    div(:style=`{maxWidth: ''}`).row.full-width.items-start.justify-center
      .row.full-width.justify-center
        div(style=``).row.full-width.justify-center
          h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`) Что такое HACKATHON?
        //- выравнивание элемента по центру
        .row.full-width.justify-center.q-my-xs.lt-sm
          //- ХЕКСАГОНЫ
          div(style=`padding-right: 30px`).row.q-my-md
            //- ЛЕВЫЙ СТОЛБЕЦ
            div(data-aos="fade-up").hex2.stroke
              //- темно зеленый
              .hex2.row
                .hex2.top.green
                .hex2.middle.green
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 10px`).text-center.text-white Хочешь испытать свои силы в решении реальной проблемы
                .hex2.bottom.green
              //- зеленый
              .hex2.row
                .hex2.top.lightgreen
                .hex2.middle.lightgreen
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 25px`).text-center.text-white Желаешь бросить себе вызов
                .hex2.bottom.lightgreen
            //- СРЕДНИЙ СТОЛБЕЦ
            .hex2.middle.stroke
              //- белый
              div(data-aos="fade-down").hex2.row
                .hex2.top.white
                .hex2.middle.white.row.justify-center.items-center
                  h5.text-black Ты:
                .hex2.bottom.white
              //- черный
              .hex2.black.row
                .hex2.top.black
                .hex2.middle.black
                .hex2.bottom.black
              //- темно зеленый
              div(data-aos="fade-up").hex2.row
                .hex2.top.green
                .hex2.middle.green
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 35px`).text-center.text-white Умеешь работать в команде
                .hex2.bottom.green
            //- ПРАВЫЙ СТОЛБЕЦ
            div(data-aos="fade-up").hex2.stroke
              //- темно зеленый
              .hex2.row
                .hex2.top.green
                .hex2.middle.green
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 30px`).text-center.text-white Студент из Екатеринбурга
                .hex2.bottom.green
              //- зеленый
              .hex2.row
                .hex2.top.lightgreen
                .hex2.middle.lightgreen
                  span(style=`margin: 0px 0px; font-size: 10px; position: absolute; width: 90px; margin-left: -17px; margin-top: 25px`).text-center.text-white Увлекаешься программиро- ванием
                .hex2.bottom.lightgreen
        .row.full-width.justify-center.q-my-xs.gt-xs
          div(style=`padding-right: 60px`).row.q-my-md
            //- ЛЕВЫЙ СТОЛБЕЦ
            div(data-aos="fade-right").hex.stroke
              //- темно зеленый
              .hex
                .hex.top.green
                .hex.middle.green
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 180px; margin-left: -37px; margin-top: 15px`).text-center.text-white Хочешь испытать свои силы в решении реальной проблемы
                .hex.bottom.green
              //- зеленый
              .hex
                .hex.top.lightgreen
                .hex.middle.lightgreen
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 150px; margin-left: -23px; margin-top: 45px`).text-center.text-white Желаешь бросить себе вызов
                .hex.bottom.lightgreen
            //- СРЕДНИЙ СТОЛБЕЦ
            .hex.middle.stroke
              //- белый
              div(data-aos="fade-down").hex
                .hex.top.white
                .hex.middle.white.row.justify-center.items-center
                  h3.text-black Ты:
                .hex.bottom.white
              //- черный
              .hex.black
                .hex.top.black
                .hex.middle.black
                .hex.bottom.black
              //- темно зеленый
              div(data-aos="fade-up").hex
                .hex.top.green
                .hex.middle.green
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 150px; margin-left: -23px; margin-top: 45px`).text-center.text-white Умеешь работать в команде
                .hex.bottom.green
            //- ПРАВЫЙ СТОЛБЕЦ
            div(data-aos="fade-left").hex.stroke
              //- темно зеленый
              .hex
                .hex.top.green
                .hex.middle.green
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 150px; margin-left: -23px; margin-top: 55px`).text-center.text-white Студент из Екатеринбурга
                .hex.bottom.green
              //- зеленый
              .hex
                .hex.top.lightgreen
                .hex.middle.lightgreen
                  span(style=`margin: 0px 0px; font-size: 20px; position: absolute; width: 150px; margin-left: -23px; margin-top: 45px`).text-center.text-white Увлекаешься программиро- ванием
                .hex.bottom.lightgreen
      div(style=`maxWidth: 800px; width: 100%; font-family: Russo One; z-index: 100`).row.justify-center.q-px-md.q-my-xl
          div(data-aos="fade-right" style=`width: 130px; height: 130px; background: #009992;`).row.q-mr-md.gt-xs
            div(style=`font-size: 24px; `).row.full-width.justify-center.q-mt-md
              span 26-27
              span OCTOBER
            .row.full-width.justify-center.q-mt-xs
              span 2019
          div(data-aos="fade-up" style=`width: 85px; height: 85px; background: #009992;`).row.q-mr-md.lt-sm
            div(style=`font-size: 12px; font-family: Russo One;`).row.full-width.justify-center
              span 26-27
              span OCTOBER
            .row.full-width.justify-center
              span 2019
          div(data-aos="fade-left" style=`font-size: 18px;`).col.text-justify.q-mb-xl.gt-xs
            span(style=`z-index: 100; font-family: Roboto Slab;
                        font-style: normal;
                        font-weight: bold;
                        color: #FFFFFF;`) Ты на сайте IT-мероприятия HACKATHON BEST UrFU 2019, которое пройдет 19-20 октября в Екатеринбурге. Наш HACKATHON — это марафон программирования, на котором тебе нужно будет устроить настоящий мозговой штурм, чтобы за 24 часа справиться с заданием от IT-компаний города.
          div(data-aos="fade-up" style=`font-size: 10px;`).col.text-justify.q-mb-xs.lt-sm
            span(style=`z-index: 100; font-family: Roboto Slab;
                        font-style: normal;
                        font-weight: bold;
                        color: #FFFFFF;`) Ты на сайте IT-мероприятия HACKATHON BEST UrFU 2019, которое пройдет 19-20 октября в Екатеринбурге. Наш HACKATHON — это марафон программирования, на котором тебе нужно будет устроить настоящий мозговой штурм, чтобы за 24 часа справиться с заданием от IT-компаний города.
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sSecond',
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
.hex2.middle.stroke
  clear: left;
  margin-top: 0px
.hex2.stroke
  clear: left;
  margin-right: -32.2px;
  margin-top: 48.3px;
.hex2.top.lightgreen
  float: left;
  border-right: 32.2px solid #5BA4A1;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.middle.lightgreen
  float: left;
  width: 54.6px;
  height: 96.6px;
  background-color: #5BA4A1;
.hex2.bottom.lightgreen
  float: left;
  border-left: 32.2px solid #5BA4A1;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.top.black
  float: left;
  border-right: 32.2px solid #000;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.middle.black
  float: left;
  width: 54.6px;
  height: 96.6px;
  background-color: #000;
.hex2.bottom.black
  float: left;
  border-left: 32.2px solid #000;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.top.white
  float: left;
  border-right: 32.2px solid #fff;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.middle.white
  float: left;
  width: 54.6px;
  height: 96.6px;
  background-color: #fff;
.hex2.bottom.white
  float: left;
  border-left: 32.2px solid #fff;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.top.green
  float: left;
  border-right: 32.2px solid #103F3D;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
.hex2.middle.green
  float: left;
  width: 54.6px;
  height: 96.6px;
  background-color: #103F3D;
.hex2.bottom.green
  float: left;
  border-left: 32.2px solid #103F3D;
  border-top: 48.3px solid transparent;
  border-bottom: 48.3px solid transparent;
</style>
