<template>
	<div class="flex-col justify-center">
		<h1 class="font-bold text-primary-main md:text-5xl text-4xl">
			Contact
		</h1>
		<div class="my-8">
			<span class="text-label-info text-xl my-8">
				Contact me at
				<a
					class="text-primary-main"
					href="mailto:parsa.esfahanian@ipm.ir"
					>parsa.esfahanian@ipm.ir</a
				>, or one of my socials below.</span
			>
		</div>
		<div class="my-8">
			<div class="flex flex-wrap justify-center mt-4">
				<div
					v-for="item in socials"
					v-bind:key="item.name"
					class="
						flex-grow
						m-2
						sm:mx-0
						sm:my-4
						sm:w-auto
						md:mx-2
						bg-background-light
						rounded-lg
					"
				>
					<a
						:href="item.link"
						class="
							p-4
							text-center
							rounded-lg
							text-xl text-label-info
							hover:text-background
							hover:bg-transparent-secondary
							block
						"
					>
						<font-awesome-icon
							:icon="['fab', item.icon]"
							size="lg"
						/><br />
						<span>{{ item.name }}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["socials"]),
	},
};
</script>

<style scoped>
</style>
