<template lang="pug">
  .goods-block.py-5.bg-light
    .container
      .row
        card(v-for="i in 51")/
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card
  }
}
</script>