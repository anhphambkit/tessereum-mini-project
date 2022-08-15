<template lang="pug">
q-header(elevated)
	q-toolbar
		router-link.text-white.custom-link.row(:to='`/`')
			q-avatar
				img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
			q-toolbar-title Tessereum
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "Header",
	data() {
		return {};
	},
	mounted() {
	},
	methods: {},
});
</script>
