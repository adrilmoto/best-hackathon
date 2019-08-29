<template lang="pug">
  div(:style=``).row.full-width.z
    div(style=`box-shadow: 0 0 100px #009992`).row.full-width.justify-center.bg-black.q-pb-xl
      .row.full-width.justify-center
        h2(data-aos="fade-up" style=`color: #009992; text-shadow: 1px -1px 0px #fff`) С нами сотрудничали
      //- карусель на партнеров
      .row.full-width.justify-center.q-my-xl
        div(data-aos="fade-up" style=`height: calc(100px + (250 - 100) * ((100vw - 320px) / (1600 - 320)));`).row.justify-center.items-center.bg-primary.full-width.q-px-md
          swiper(data-aos="fade-up" data-aos-delay="500" data-swiper-autoplay="2000" :options="swiperOption").full-width
            swiper-slide(v-for="(d, dd) in partners" :key="d.id" :style=`{marginRight: '50px', width: 'calc(200px + (300 - 200) * ((100vw - 320px) / (1600 - 320)))', height: 'calc(100px + (200 - 100) * ((100vw - 320px) / (1600 - 320)))', backgroundPosition: 'center',marginLeft: '0px', backgroundImage: 'url(' + d.image + ')'}`).nr.cp
            //- swiper-slide(:style=`{width: '100px', backgroundPosition: 'center', marginLeft: '0px', backgroundImage: 'url('statics/HuaweI.svg')'}`)
            //- swiper-slide(:style=`{width: '100px', backgroundPosition: 'center', marginLeft: '0px', backgroundImage: 'url('statics/Unilever.svg'')'}`)
          //- carousel(:style=`{maxWidth: '1700px'}`
          //- :margin="9"
          //- :items="5"
          //- :dots="false"
          //- :loop="true"
          //- :nav="false"
          //- :autoplay="true").row.justify-center
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sPartners',
  components: { AOS },
  data () {
    return {
      swiperOption: {
        spaceBetween: 50,
        autoplay: {
          delay: 2000
        },
        loop: true,
        simulateTouch: true,
        breakpoints: {
        // when window width is <= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1900: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          4000: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }
      },
      partners: [
        {
          image: 'statics/UCSB.svg',
          url: ''
        },
        {
          image: 'statics/Bilain.svg',
          url: ''
        },
        {
          image: 'statics/1C.svg',
          url: ''
        },
        {
          image: 'statics/Tochka.svg',
          url: ''
        },
        {
          image: 'statics/SKB.svg',
          url: ''
        },
        {
          image: 'statics/CISCI.svg',
          url: ''
        },
        {
          image: 'statics/Yandex.svg',
          url: ''
        },
        {
          image: 'statics/siemens.svg',
          url: ''
        },
        {
          image: 'statics/IBM.svg',
          url: ''
        },
        {
          image: 'statics/Unilever.svg',
          url: ''
        },
        {
          image: 'statics/HuaweI.svg',
          url: ''
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
