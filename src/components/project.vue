<template>
	<div class="project shadow-lg rounded-lg bg-background-light">
		<div
			class="
				w-full
				rounded-lg
				p-6
				flex flex-col
				justify-between
				leading-normal
			"
		>
			<div>
				<div class="text-primary-light font-bold text-xl mb-2">
					{{ parentData.name }}
				</div>
				<p class="text-label-info text-base">
					{{ parentData.description }}
				</p>
			</div>
			<br />

			<div class="flex flex-row content-center items-stretch">
				<div class="p-1">
					<a :href="parentData.source" v-if="parentData.source">
						<button
							class="
								text-white
								rounded-lg
								text-sm
								p-4
								border-2 border-white
								hover:bg-background-light
								hover:text-primary-light
								my-3
							"
						>
							<span> Source code </span>
						</button>
					</a>
				</div>
				<div class="p-1">
					<a :href="parentData.paper" v-if="parentData.paper">
						<button
							class="
								text-white
								rounded-lg
								text-sm
								p-4
								border-2 border-white
								hover:bg-background-light
								hover:text-primary-light
								my-3
							"
						>
							<span> Paper </span>
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "project",
	props: {
		parentData: Object,
	},
};
</script>

<style scoped>
.project {
	display: grid;
	animation: mouseOut 0.3s ease-in;
}

.project:hover {
	animation: mouseOver 0.3s ease-in forwards;
}

@media only screen and (max-width: 600px) {
	.project {
		display: block;
		width: 100%;
	}
}
</style>
