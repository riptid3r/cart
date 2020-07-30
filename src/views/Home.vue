<template lang="pug">
  .goods-block.py-5
    .container
      .row
        card(v-for="card in store" :card="card" @put-in-cart="putInCart")/
</template>

<script>
import Card from '../components/Card.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Card
  },
  methods: {
    ...mapActions([
      'SAVE_CARD',
      'SAVE_NOTIF'
    ]),
    putInCart(card) {
      this.SAVE_CARD(Object.assign(card, { "inCart": !card.inCart, "count": 1 }))
        .then(() => {
          if(card.inCart) {
            let notif = { 
              title: 'Успешно', 
              desc: 'Товар добавлен в корзину', 
              index: Date.now()
            }
            this.SAVE_NOTIF(notif)
          }
        })
    }
  },
  computed: {
    ...mapState([
      'store',
      'notifications'
    ])
  }
}
</script>