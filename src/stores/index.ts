import { defineStore } from 'pinia'

export const useStore = defineStore('general', {
	state: () => ({ 
		loading: false,
	}),
	actions: {
		updateLoading(status: boolean) {
			this.loading = status
		},
	},
})