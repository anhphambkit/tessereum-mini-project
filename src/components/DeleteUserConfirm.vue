<template lang="pug">
q-dialog(v-model='show', persistent, ref="deleteConfirm")
    q-card
        q-card-section.row.items-center
            q-avatar(icon='warning', style="background: transparent; color: red")
            span.q-ml-sm Do you wanna delete this user?
        q-card-actions(align='right')
            q-btn(flat, label='Cancel', color='primary', @click="closeConfirm")
            q-btn(flat, label='Delete', color='red', @click="onDelete")
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/services/UserDataService";
import { useStore } from '@/stores/index'
import { mapActions } from 'pinia'
import { showNotify } from "@/helpers/quasar"

export default defineComponent({
	name: "Delete User Confirm",
    props: {
        id: {
            type: Number,
            required: true
        },
        show: {
            type: Boolean,
            default: false
        }
    },
	data() {
		return {};
	},
	mounted() {
	},
	methods: {
        ...mapActions(useStore, ['updateLoading']),
        closeConfirm() {
            this.$emit("close")
        },
        async onDelete() {
            this.updateLoading(true)
            await UserDataService.delete(this.id)
            this.$emit("success")
            this.closeConfirm()
            this.updateLoading(false)
            showNotify({
                type: 'positive',
                message: 'Delete user successfully!'
            })
        }
    },
});
</script>