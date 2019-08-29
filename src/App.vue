<template lang="pug">
  div(id="q-app")
    router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css?family=Russo+One&display=swap');
[data-aos="new-animation"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;
  }

  @media screen and (min-width: 320px) {
    transform: rotateX(360deg);

    &.aos-animate {
      transform: rotateX(0deg);
    }
  }
}
.shedule_title
  font-family: Russo One;
  font-size: 16px;
.shedule_body
  font-size: 16px
.whats_app
  background-image: url("~assets/wats_app.svg");
  background-repeat: no-repeat;
  background-position: center;
.mail
  background-image: url("~assets/mail.svg");
  background-repeat: no-repeat;
  background-position: center;
.big_nat
  background-image: url("~assets/bigfoto_nat.png");
  background-repeat: no-repeat;
  background-position: center;
.mark
  background-image: url("~assets/mark.svg");
  background-repeat: no-repeat;
  background-position: center;
.benefits
  background-image: url("~assets/benefits_bg.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
.benefits_2
  background-image: url("~assets/benefits_bg2.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
.cards .back .detail
  width: 100%;
  color: #000;
.cards
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  perspective: 600px;
  transition: 0.3s;
  color: #fff;
.cards .front
  position: absolute
  top: 0;
  left: 0;
  width: 142px;
  height: 142px;
  background: #000;
  backface-visibility: hidden;
  transform: rotateX(0deg);
  transition: 0.3s;
.cards .back
  // position: absolute;
  top: 0;
  left: 0;
  width: 142px;
  height: 142px;
  background: #000;
  backface-visibility: hidden;
  transform: rotateX(180deg);
  transition: 0.3s;
.cards:hover .front
  transform: rotateX(-180deg);
.cards:hover .back
  transform: rotateX(0deg);
.s_1
  background-image: url("~assets/s_1.svg");
  background-repeat: no-repeat;
  background-position: center;
.s_2
  background-image: url("~assets/s_2.svg");
  background-repeat: no-repeat;
  background-position: center;
.s_3
  background-image: url("~assets/s_3.svg");
  background-repeat: no-repeat;
  background-position: center;
.s_4
  background-image: url("~assets/s_4.svg");
  background-repeat: no-repeat;
  background-position: center;
.s_5
  background-image: url("~assets/s_5.svg");
  background-repeat: no-repeat;
  background-position: center;
.v_1
  background-image: url("~assets/v_1.svg");
  background-repeat: no-repeat;
  background-position: center;
.v_2
  background-image: url("~assets/v_2.svg");
  background-repeat: no-repeat;
  background-position: center;
.v_3
  background-image: url("~assets/v_3.svg");
  background-repeat: no-repeat;
  background-position: center;
.v_4
  background-image: url("~assets/v_4.svg");
  background-repeat: no-repeat;
  background-position: center;
.v_5
  background-image: url("~assets/v_5.svg");
  background-repeat: no-repeat;
  background-position: center;
.nr:hover
  opacity: 0.6;
.nr
  background-repeat: no-repeat;
  opacity: 1;
.photos
  border: 4px solid #009992;
  border-radius: 100px;
p
  margin: 0px;
  padding: 0px;
h6
  margin: 0px;
  padding: 0px;
  font-size: 15px;
.vk
  background-image: url("~assets/Vk.svg");
  background-repeat: no-repeat;
  background-position: center;
.logo-best
  background-image: url("~assets/logo_best.svg");
  background-repeat: no-repeat;
  background-position: center;
.lamp
  background-image: url("~assets/lamp.svg");
  background-repeat: no-repeat;
  background-position: center;
h5
  margin: 20px 0px;
  font-size: calc(13px + (28 - 20) * ((100vw - 300px) / (1600 - 300)));
.warn
  background-image: url("~assets/warn.svg");
  background-repeat: no-repeat;
  background-position: center;
.red-pen
  background-image: url("~assets/red_pen.svg");
  background-repeat: no-repeat;
  background-position: center;
.blue-pen
  background-image: url("~assets/blue_pen.svg");
  background-repeat: no-repeat;
  background-position: center;
h2
  font-family: 'Russo One', sans-serif;
  color: #fff;
  text-align: center;
  font-size: calc(28px + (48 - 28) * ((100vw - 300px) / (1600 - 300)));
  padding: 0px 0px
h4
  font-family: 'Russo One', sans-serif;
  color: #fff;
  text-align: center;
  margin: 20px, 0px;
.hex.middle.stroke
  clear: left;
  margin-top: 0px
.hex.stroke
  clear: left;
  margin-right: -60px;
  margin-top: 93px
.hex.top.lightgreen
  float: left;
  border-right: 60px solid #5BA4A1;
  border-top: 93px solid transparent;
  border-bottom: 93px solid transparent;
.hex.middle.lightgreen
  float: left;
  width: 105px;
  height: 186px;
  background-color: #5BA4A1;
.hex.bottom.lightgreen
  float: left;
  border-left: 60px solid #5BA4A1;
  border-top: 93px solid transparent;
  border-bottom: 93px solid transparent;
.hex.top.black
  float: left;
  border-right: 60px solid #000;
  border-top: 93px solid transparent;
  border-bottom: 93px solid transparent;
.hex.middle.black
  float: left;
  width: 105px;
  height: 186px;
  background-color: #000;
.hex.bottom.black
  float: left;
  border-left: 60px solid #000;
  border-top: 93px solid transparent;
  border-bottom: 93px solid transparent;
.hex.top.white
  float: left;
  border-right: 60px solid #fff;
  border-top: 93px solid transparent;
  border-bottom: 93px solid transparent;
.hex.middle.white
  float: left;
  width: 105px;
  height: 186px;
  background-color: #fff;
.hex.bottom.white
  float: left;
  border-left: 60px solid #fff;
  border-top: 93px solid transparent;
  border-bottom: 93px solid transparent;
.hex.top.green
  float: left;
  border-right: 60px solid #103F3D;
  border-top: 93px solid transparent;
  border-bottom: 93px solid transparent;
.hex.middle.green
  float: left;
  width: 105px;
  height: 186px;
  background-color: #103F3D;
.hex.bottom.green
  float: left;
  border-left: 60px solid #103F3D;
  border-top: 93px solid transparent;
  border-bottom: 93px solid transparent;
.yellow-highlight
  font-style: normal;
  font-weight: normal;
  color: #FF993F;
.logo_menu
  background-image: url("~assets/Logo_menu.png")
  background-repeat: no-repeat
  background-position: center
  width 100%
.bg-footer
  background-color: #32343C;
html, body
  font-family: 'Roboto Slab', serif;
  color: #fff;
  font-size: calc(14px + (22 - 14) * ((100vw - 320px) / (2000 - 320)))
  margin 0px
  padding 0px
  background-position: fixed;
.br
  border 1px solid red
.bb
  border 1px solid black
.cp
  cursor pointer
.pl
  padding-left 6px
.pr
  padding-right 6px
.pt
  padding-top 6px
.pb
  padding-bottom 6px
.mt
  margin-top 6px
.mb
  margin-bottom 6px
.ml
  margin-left 6px
.mr
  margin-right 6px
.ma
  margin 6px
.pa
  padding 6px
.hr:hover
  background rgba(123,190,77, 0.2) !important
::-webkit-scrollbar
  width: 3px
  height: 0px !important
::-webkit-scrollbar-thumb
  background: #009992
</style>
