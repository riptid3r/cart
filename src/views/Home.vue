<template lang="pug">
  .goods-block.py-5.bg-light
    notifications/
    .container
      .row
        card(v-for="i in 51")/
</template>

<script>
import Card from '../components/Card.vue';
import Notifications from '../components/Notifications.vue';

export default {
  components: {
    Card,
    Notifications
  }
}
</script>