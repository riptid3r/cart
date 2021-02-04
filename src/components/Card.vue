<template lang="pug">
	.col-md-4
    .card.mb-4
			img.w-100.cover.px-3(:src="card.image", alt="image", height="280")
			.card-body
				.row.align-items-center.justify-content-between.px-2
					h4.col-12.mb-3.text-center.text-md-left.border-bottom.pb-4 {{ card.name }}
					strong.mb-2.col-12.col-md-6.mb-md-0.text-center.text-md-left {{ card.price | spaceSeparator }} ₽
					button.btn.btn-outline-success.col-12.col-md-6(
							@click="$emit('put-in-cart', card)"
					) {{ !card.inCart ? 'Купить' : 'В корзине' }}
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
			default: () => ({}),
		},
	},
	filters: {
		spaceSeparator(val) {
			return val.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
		},
	},
};
</script>