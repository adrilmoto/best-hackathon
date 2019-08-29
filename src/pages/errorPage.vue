<template lang="pug">
.row.window-height.full-width.items-center.justify-center
  .row
    .row.full-width.justify-center.q-py-md
      span.text-black НЕ НАЙДЕНО 404
    .row.full-width.justify-center
      q-btn(@click="$router.push('/')" no-caps color="primary" push) Вернуться на главную
</template>

<script>
export default {
  name: 'Error404'
}
</script>
