<template lang="pug">
div hello pug
	q-spinner(size="6em")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/services/UserDataService";
// import { IUser } from "@/types/index";

export default defineComponent({
	name: "add-tutorial",
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
