<template lang="pug">
    .d-flex.align-items-center
        router-link.navbar-brand.d-flex.align-items-center.ml-2(:to="`/${to}`").text-dark
            img(:src="require(`../assets/images/icons/${icon}.svg`)", alt="store-ico", width="20", height="20").cover
            strong.ml-2 {{ title }}
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        to: {
            type: String,
            default: '',
            required: false
        }
    }
}
</script>