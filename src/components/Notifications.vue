<template lang="pug">
    transition-group(name="fade", tag="div", class="notifications d-flex flex-column-reverse")
        .notification.rounded-lg.bg-success.pl-4.pr-5.py-3.d-flex.align-items-center.mb-2(v-for="(notif, index) in notifications" :key="index")
            .d-flex.flex-column
                h4.text-white.mb-1 {{ notif.title }}
                p.text-light.mb-0 {{ notif.desc }}
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'notifications'
        ])
    }
}
</script>