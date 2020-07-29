<template lang="pug">
    .cart-block.py-5.bg-light
        .container
            .row
                .col.d-flex.flex-column
                    .good-card.rounded-lg.bg-white.p-4.row.align-items-center.justify-content-between.shadow-sm.mb-4(v-for="i in 8")
                        .col.col-md-3
                            img(src="~@/assets/images/boots.jpg", alt="alt", height="200").rounded-lg
                        .col.d-flex.align-items-center.col-md-3.px-0
                            strong.w-100.text-center Adidas Easy Boost
                        .col-12.col-md-3.col-sm-4.mt-md-0.my-3.mb-md-0
                            .input-group.d-flex.justify-content-center
                                .input-group-prepend
                                    button.btn.btn-outline-secondary -
                                input(type="text", style="max-width: 60px").text-center
                                .input-group-append
                                    button.btn.btn-outline-secondary +
                        .col-sm-12.d-flex.flex-column.w-100.col-md-3.px-0
                            button.btn.btn-danger.my-sm-3 Удалить
                .price-block.bg-white.col-md-3.p-4.shadow-sm.rounded-lg.h-50.ml-md-3
                    p.mb-4.w-100.text-center
                        b Список товаров в корзине:
                    .row.justify-content-between.align-items-center.px-3(v-for="i in 20")
                        p Adidas Easy Boost
                        p 
                            b $50.03
                    h4.mt-2.border-top.pt-3 Итого:
                        strong.ml-2 $100.05
                    button.btn.btn-success.w-100.mt-3 Оформить заказ
</template>