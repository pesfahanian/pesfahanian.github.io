<template>
	<div class="my-9 flex flex-col md:justify-center">
		<div>
			<h1 class="text-primary-main font-bold sm:text-6xl text-4xl">
				{{ profile.first_name }} {{ profile.last_name }}
			</h1>
			<div class="text-white shadow-lg rounded-lg">
				<h1 class="font-bold md:text-4xl sm:text-2xl text-xl">
					Machine Learning Researcher
				</h1>
				<h1 class="font-bold md:text-4xl sm:text-2xl text-xl">
					Back-End Developer
				</h1>
			</div>
		</div>
		<div class="w-full my-2">
			<a href="#About">
				<button
					class="
						text-white
						rounded-lg
						text-sm
						p-4
						border-2 border-primary-main
						hover:bg-primary-main
						hover:text-background
						my-4
					"
				>
					Know more
				</button>
			</a>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: { ...mapGetters(["profile"]) },
};
</script>
