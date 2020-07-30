<template lang="pug">
    .cart-block.py-5.d-flex.bg-white
        .container
            .row(v-if="cart.length")
                .col.d-flex.flex-column
                    .good-card.rounded-lg.bg-white.p-4.row.align-items-center.justify-content-between.shadow-sm.mb-4(v-for="item in cart")
                        .col.col-md-3.col-12
                            img(:src="item.image", alt="alt", height="100%", width="100%").rounded-lg.border.p-2.cover
                        .col.d-flex.align-items-center.col-md-3.px-0.col-12.mt-3.mt-md-0
                            strong.w-100.text-center {{ item.name }}
                        .col-12.col-md-3.col-sm-4.mt-md-0.my-3.mb-md-0
                            .input-group.d-flex.justify-content-center
                                .input-group-prepend
                                    button.btn.btn-outline-secondary(@click="setItem(item, false)") -
                                input(type="text", style="max-width: 60px", v-model="item.count").text-center
                                .input-group-append
                                    button.btn.btn-outline-secondary(@click="setItem(item, true)") +
                        .col-sm-12.d-flex.flex-column.w-100.col-md-3.px-0
                            button.btn.btn-danger.my-sm-3(@click="deleteFromCart(item)") Удалить
                .price-block.bg-white.col-md-3.p-4.shadow-sm.rounded-lg.h-50.ml-md-3
                    p.mb-4.w-100.text-center
                        b Список товаров в корзине:
                    .row.justify-content-between.align-items-center.px-3(v-for="item in cart")
                        p {{ item.name }}
                        p 
                            b {{ (item.price*item.count)|spaceSeparator }} ₽
                    h4.mt-2.border-top.pt-3 Итого:
                        strong.ml-2 {{ finalPrice|spaceSeparator }} ₽
                    button.btn.btn-success.w-100.mt-3 Оформить заказ
            .starter-template(v-else)
                main.container(role="main")
                    p.lead 
                        strong В корзину ничего не добавлено
</template>

<script>    
import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions([
            'SAVE_CARD',
            'SET_ITEM'
        ]),
        deleteFromCart(item) {
            this.SAVE_CARD(Object.assign(item, { inCart: false }))
        },
        setItem(item, plus) {
            let new_item = item

            if(!plus) {
                if(--new_item.count <= 0) {
                    this.SAVE_CARD(Object.assign(item, { inCart: false }))
                }
            } else {
                ++new_item.count
                this.SET_ITEM(new_item)
            }
        }
    },
    computed: {
        ...mapState([
            'cart'
        ]),
        finalPrice() {
            let val = 0
            for (let i = 0; i < this.cart.length; i++) val += this.cart[i].price*this.cart[i].count
            return val
        }
    },
    filters: {
        spaceSeparator(val) {
            return val.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        }
    }
}
</script>