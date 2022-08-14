<template lang="pug">
div TEST
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/services/UserDataService";
// import { IUser } from "@/types/index";

export default defineComponent({
	name: "test",
	data() {
		return {

		};
	},
	mounted() {
		this.saveTutorial()
	},
	methods: {
		async saveTutorial() {
			const data: any = await UserDataService.list();
			console.log(data)
		},
	},
});
</script>

<style>
.submit-form {
	max-width: 300px;
	margin: auto;
}
</style>
