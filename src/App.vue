<template lang="pug">
  .app
    .navbar.navbar-dark.bg-light.shadow-sm.py-3
      .container.d-flex.justify-content-between
        nav-link(icon="store" title="Магазин")/
        nav-link(icon="cart" title="Корзина" to="cart")/
    router-view/
    footer.text-muted.bg-warnng.shadow-sm.py-3
      .container
        p.mb-0 Created by riptid3r
        p 2020
</template>

<style>
  @import './assets/style/main.scss';
</style>

<script>
import NavLink from './components/Link.vue';

export default {
  components: {
    NavLink
  }
}
</script>