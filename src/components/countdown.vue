<template lang="pug">
div.row.items-start.justify-between.q-mb-xl
  .block
    p.digit.row.items-center.justify-center {{days | two_digits}}
    p.text Дней
  .block
    p.digit.row.items-center.justify-center {{hours | two_digits}}
    p.text Часов
  .block
    p.digit.row.items-center.justify-center {{minutes | two_digits}}
    p.text Минут
  .block
    p.digit.row.items-center.justify-center {{seconds | two_digits}}
    p().text Секунд
</template>

<script>
export default {
  name: 'countdown',
  props: [ 'date' ],
  data () {
    return {
      timer: null,
      now: Date.now(),
      deadline: Date.parse('October 26, 2019 10:00:00')
    }
  },
  computed: {
    delta () {
      return Math.round((this.deadline - this.now) / 1000)
    },
    days () {
      return Math.trunc(this.delta / 24 / 60 / 60)
    },
    hours () {
      return Math.trunc(this.delta / 60 / 60) % 24
    },
    minutes () {
      return Math.trunc(this.delta / 60) % 60
    },
    seconds () {
      return Math.trunc(this.delta) % 60
    }
  },
  methods: {
    tickTack () {
      this.$log('tickTack  motherfucker')
      this.now = Date.now()
    }
  },
  mounted () {
    this.$log('mounted', Date.now())
    this.timer = setInterval(this.tickTack, 1000)
  },
  beforeDestroy () {
    this.$log('beforeDestroy')
    clearInterval(this.tickTack, false)
  }
}
</script>

<style lang="stylus" scoped>
.block {
    display: flex;
    flex-direction: column;
    margin: calc(5px + (10 - 5) * ((100vw - 320px) / (1600 - 320)));
}
.text {
  color: #1abc9c;
  font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1600 - 320)));
  font-family: 'Russo One', serif;
  font-weight: 40;
  margin-top:10px;
  margin-bottom: 10px;
  text-align: center;
}
.digit {
  font-size: calc(18px + (48 - 18) * ((100vw - 320px) / (1600 - 320)));
  font-weight: 100;
  font-family: 'Roboto Slab', serif;
  text-align: center;
  border: 5px solid #fff;
  border-radius: 100px;
  margin: calc(3px + (10 - 3) * ((100vw - 320px) / (1600 - 320)));
  background-color: #009992;
  width: calc(60px + (100 - 60) * ((100vw - 320px) / (1600 - 320)));
  height: calc(60px + (100 - 60) * ((100vw - 320px) / (1600 - 320)));
}
</style>
