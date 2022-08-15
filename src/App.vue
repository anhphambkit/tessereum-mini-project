<template lang="pug">
q-layout
	Header
	q-page-container
		q-page(padding)
			router-view
	Footer
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue"
import { useQuasar } from 'quasar'
import { useStore } from '@/stores/index'
import { mapState } from 'pinia'
export default defineComponent({
	name: "App",
	components: {
		Header: defineAsyncComponent(
			() => import("@/components/Header.vue")
		),
		Footer: defineAsyncComponent(
			() => import("@/components/Footer.vue")
		),
	},
	 watch: {
        loading(val) {
            if (val) { // Show Loading
                this.showLoading()
            }
            else { // Hide Loading
                this.hideLoading()
            }
        }
    },
    computed: {
        ...mapState(useStore, ['loading']),
    },
	data() {
		return {
            $q: useQuasar()
		};
	},
	mounted() {},
	methods: {
        showLoading() {
            this.$q.loading.show({
                message: 'Please waiting ...'
            })
        },
        hideLoading() {
            this.$q.loading.hide()
        },
    },
});
</script>
<style lang="scss">
@import '@/assets/scss/common';
</style>