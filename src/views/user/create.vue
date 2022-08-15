<template lang="pug">
.q-pa-md.flex.flex-center
    q-card.detail-card.q-pa-md(flat, bordered)
        q-card-section.flex.flex-center(horizontal)
            div.col
                q-form.q-gutter-md(@submit='onSubmit', @reset='onCancel', v-if="item")
                    q-input(filled, v-model='item.first_name', label='First name *', lazy-rules, :rules="[ val => val && val.length > 0 || 'Please type something']")
                    q-input(filled, v-model='item.last_name', label='Last name *', lazy-rules, :rules="[ val => val && val.length > 0 || 'Please type something']")
                    q-input(filled, v-model='item.email', label='Email *', lazy-rules, :rules="[ val => val && val.length > 0 || 'Please type something']")
                    div
                        q-btn(label='Create', type='submit', color='primary')
                        q-btn.q-ml-sm(label='Cancel', type='reset', color='primary', flat)
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import UserDataService from "@/services/UserDataService";
import { IUser } from "@/types/index";
import { useStore } from '@/stores/index'
import { mapActions } from 'pinia'
import { showNotify } from "@/helpers/quasar"
export default defineComponent({
	name: "Create User",
	data() {
		return {
            item: {
                first_name: "",
                last_name: "",
                email: ""
            },
        };
	},
	async mounted() {
	},
	methods: {
        ...mapActions(useStore, ['updateLoading']),
        async onSubmit() {
            this.updateLoading(true)
            await UserDataService.create(this.item);
            this.updateLoading(false)
            this.$router.push("/")
            showNotify({
                type: 'positive',
                message: 'Created user successfully!'
            })
        },
        onCancel() {
            this.$router.push("/")
        },
    },
});
</script>