<template lang="pug">
	.app
		.navbar.navbar-dark.shadow-sm.py-3
			.container.d-flex.justify-content-between
				nav-link(icon="store" title="Главная")/
				nav-link(icon="cart" title="Корзина" to="cart")/
		notifications/
		router-view.mb-5/
		footer.text-muted.shadow-sm.py-3.footer.bg-light
			.container
				p.mb-0 Created by riptid3r
				p 2020
</template>

<style>
	@import "./assets/style/main.scss";
</style>

<script>
import NavLink from "./components/Link.vue";
import Notifications from "./components/Notifications.vue";

export default {
  name: "App",
  components: {
    NavLink,
    Notifications,
  },
};
</script>
