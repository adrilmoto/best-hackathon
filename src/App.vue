<template lang="pug">
  div(id="q-app")
    router-view
    vue-particles(
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="80"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="bubble"
    :clickEffect="true"
    clickMode="repulse"
    :style=`{marginTop:$q.screen.gt.sm ? '150px' : '200px', width: '100%'}`).bb.row.window-width.window-height.justify-center.full-width.items-center.bg-black
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
.bg-footer
  background-color: #32343C;
html, body
  font-family: 'Montserrat', sans-serif; // font-family: 'Vollkorn', serif;;
  text-color: #32343C;
  font-size: calc(14px + (11 - 10) * ((100vw - 320px) / (1600 - 320)))
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
.tittletext
  font-family: 'Vollkorn', serif;
  font-size: calc(26px + (40 - 26) * ((100vw - 300px) / (1600 - 300)))
  color: #32343C;
.hr:hover
  background rgba(123,190,77, 0.2) !important
::-webkit-scrollbar
  width: 2.5px
  height: 0px !important
::-webkit-scrollbar-thumb
  background: #8be8d2
</style>
