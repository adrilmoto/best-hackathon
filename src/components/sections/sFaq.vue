<template lang="pug">
  .row.full-width
    div(style=`z-index: 100`).row.full-width.justify-center.bg-black.q-pt-xl
      //- FAQ
      .row.full-width.justify-center
        h2(style=`color: #009992; text-shadow: 1px -1px 0px #fff`) FAQ
      //- ГАРМОШКИ
      div(style=`maxWidth: 900px; width: 100%`).row.justify-between.q-gutter-sm.q-my-lg.q-mx-md
        q-expansion-item(
              v-for="(b, bi) in faqs " :key="bi"
              expand-separator
              style=`border-radius: 20px; width: 400px; font-family: Russo One; color: #000`
              group="self"
              :label="b.title"
              ).text-left.full-width.shadow-2.bg-white.q-pa-xs.q-mt-md.text-primary
                q-card-section.text-black
                  span(:style=`{fontFamily: 'Roboto Slab'}`).q-ma-md {{b.text}}
        div(style=`font-size: 22px`).row.full-width.justify-center.q-mt-xl
          .row.full-width.justify-center
            span Не нашел ответ на свой вопрос?
          .row.full-width.justify-center
            span Напиши нам его на почту и мы обязательно ответим
          .row.justify-center.items-center.q-py-xs.q-mt-xl.q-px-md
            div(style=`width: 50px; height: 50px`).mail
            .col
              .row.fit.justify-center.items-center.q-ml-sm
                h6(style=`color: #009992; maxWidth: 400px; width: 100%;`) besthackathon@gmail.com
</template>
<script>
import AOS from 'aos'
export default {
  name: 'sFAQ',
  components: { AOS },
  data () {
    return {
      faqs: [
        {
          title: 'Как найти коворкинг?',
          text: ''
        },
        {
          title: 'Кто может участвовать?',
          text: 'Команды в количестве четырех студентов из Екатеринбурга.'
        },
        {
          title: 'Если в моей команде 3 человека, можем ли мы участвовать в таком составе?',
          text: 'Участвовать могут только команды из четырех студентов'
        },
        {
          title: 'Где я могу найти себе команду, если я регистрируюсь как одиночный участник?',
          text: 'Все команды будут состоять из 4 человек, поэтому в команды, которые состоят из 2-х или 3-х человек, будут добавлены люди до полного состава т.е. до 4-х человек.'
        },
        {
          title: 'Как мне зарегестрироваться?',
          text: 'Если ты хочешь поучаствовать в нашем хакатоне, но у тебя нет команды, не волнуйся, мы подберем для тебя достойных союзников в команду.'
        },
        {
          title: 'Как определяется победитель?',
          text: 'Команда судей определяет призеров и победителей по нескольким параметрам: идея проекта,  реализация (макет, интерфейс, функциональность),  сопровождающие материалы (презентация, описание, выступление).'
        },
        {
          title: 'Кому принадлежат проекты, созданные для этого хакатона?',
          text: 'Компании, которая является партнером.'
        },
        {
          title: 'Где и когда я могу представить свой проект?',
          text: 'На площадке проведения мероприятия, в назначенное для защит время'
        },
        {
          title: 'Что такое хакатон?',
          text: '24-часовой марафон кодирования'
        },
        {
          title: 'Сколько стоит участие?',
          text: 'Нужно будет продать душу программированию. Шутка. Участие бесплатное!'
        },
        {
          title: 'Когда будет проходить мероприятие?',
          text: '19-20 октября'
        },
        {
          title: 'Что меня ждет в мероприятии?',
          text: 'Интересные задания, новые знакомства, вкусная еда и 24 часа без сна.'
        },
        {
          title: 'Предоставят ли мне техническое оснащение во время мероприятия?',
          text: 'Участники должны иметь на площадке во время проведения хакатона собственную персональную переносную вычислительную технику (ноутбук, лэптоп и т.п.)'
        },
        {
          title: 'Могу ли я связаться лично с организаторами?',
          text: 'На все интересующие вопросы вам может ответить Елизавета Мальцева  ВК : https://vk.com/id139686335 WhatsApp, Viber, Telegram : +79120366056 Gmail : elizavetamaltseva18@gmail.com'
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
