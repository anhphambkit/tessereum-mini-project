<template lang="pug">
.q-pa-md.flex.flex-center
    q-card.detail-card.q-pa-md(flat, bordered)
        q-card-section.detail-card__section.flex.flex-center(horizontal)
            div.detail-card__left
                q-avatar(rounded, size="200px", spinner-color='primary', v-if="item.avatar")
                    img(:src='item.avatar')
                div.row
                    q-toggle(v-model='isActive', size="xl", label='Active/De-active user', checked-icon='check', color='green', unchecked-icon='clear')
                div.row
                    q-btn(color="red", icon="delete", label="Delete", @click="showDeleteConfirm")
            div.detail-card__right
                q-form.q-gutter-md(@submit='onSubmit', @reset='onReset', v-if="item")
                    q-input(filled, v-model='item.first_name', label='First name *', lazy-rules, :rules="[ val => val && val.length > 0 || 'Please type something']")
                    q-input(filled, v-model='item.last_name', label='Last name *', lazy-rules, :rules="[ val => val && val.length > 0 || 'Please type something']")
                    q-input(filled, v-model='item.email', label='Email *', lazy-rules, :rules="[ val => val && val.length > 0 || 'Please type something']")
                    div
                        q-btn(label='Update', type='submit', color='primary')
                        q-btn.q-ml-sm(label='Reset', type='reset', color='primary', flat)
    DeleteUserConfirm(:id="id", :show="confirm", @close="confirm = false", @success="onDeleteSuccess")
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import UserDataService from "@/services/UserDataService";
import { IUser } from "@/types/index";
import { useStore } from '@/stores/index'
import { mapActions } from 'pinia'
import { showNotify } from "@/helpers/quasar"
export default defineComponent({
	name: "User Detail",
    components: {
        DeleteUserConfirm: defineAsyncComponent(
			() => import("@/components/DeleteUserConfirm.vue")
		),
    },
	data() {
		return {
            item: {},
            previousItem: {},
            loading: null,
            isActive: true,
            id: parseInt(this.$route.params.id),
            confirm: false
        };
	},
    watch: {
        isActive(val) {
            if (val) {
                showNotify({
                    type: 'positive',
                    message: 'Actived user!'
                })
            }
            else {
                showNotify({
                    type: 'negative',
                    message: 'De-actived user!'
                })
            }
        }
    },
	async mounted() {
        await this.fetchData()
	},
	methods: {
        ...mapActions(useStore, ['updateLoading']),
        async fetchData() {
            this.updateLoading(true)
            const data: any = await UserDataService.detail(this.id);
			this.item = data.data
            this.previousItem = {
                ...this.item
            }
            this.updateLoading(false)
        },
        async onSubmit() {
            this.updateLoading(true)
            const dataUpdate: IUser = {
                first_name: this.item.first_name,
                last_name: this.item.last_name,
                // avatar: this.item.avatar,
                email: this.item.email,
            }
            await UserDataService.update(this.id, dataUpdate);
            this.fetchData()
            this.updateLoading(false)
            showNotify({
                type: 'positive',
                message: 'Updated user successfully!'
            })
        },
        onReset() {
            this.updateLoading(true)
            this.item = {
                ...this.previousItem
            }
            this.updateLoading(false)
        },
        showDeleteConfirm() {
            this.confirm = true
        },
        onDeleteSuccess() {
            this.$router.push("/")
        }
    },
});
</script>