<template lang="pug">
    .notifications.d-flex.flex-column
        transition(name="fade")
            .notification.rounded-lg.bg-success.pl-4.pr-5.py-3.d-flex.align-items-center.mb-2(key="a" v-if="a")
                .d-flex.flex-column
                    h4.text-white.mb-1 Уведомление
                    p.text-light.mb-0 Описание уведомления
</template>

<script>
export default {
    data() {
        return {
            a: false
        }
    },
    created() {
        setTimeout(() => {
            this.a = true
        }, 1000);
    }
}
</script>