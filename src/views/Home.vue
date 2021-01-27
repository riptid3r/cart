<template lang="pug">
  .goods-block.py-5
    .container
      .row
        card(v-for="card in store" :card="card" @put-in-cart="putInCart")/
</template>

<script>
import Card from "../components/Card.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Card,
  },
  methods: {
    ...mapActions(["SAVE_CARD", "SAVE_NOTIF", "REMOVE_NOTIF"]),
    putInCart(card) {
      this.SAVE_CARD(
        Object.assign(card, { inCart: !card.inCart, count: 1 })
      ).then(() => {
        if (card.inCart) {
          const id = Math.random();
          const REMOVE_TIME = 3000;
          const notif = Object.freeze({
            title: "Успешно",
            desc: "Товар добавлен в корзину",
            id,
          });
          this.SAVE_NOTIF(notif);
          setTimeout(() => this.removeNotification(id), 3000);
        }
      });
    },
    removeNotification(id) {
      const idx = this.notifications.findIndex((goods) => goods.id === id);
      if (idx === -1) throw new Error("Notification ID was not finded");
      this.REMOVE_NOTIF(idx);
    },
  },
  computed: {
    ...mapState(["store", "notifications"]),
  },
};
</script>
