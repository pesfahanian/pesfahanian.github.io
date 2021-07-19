<template>
	<div
		class="
			bg-background-light
			py-6
			px-8
			my-4
			text-label-info
			rounded-lg
			shadow-lg
			event
		"
	>
		<a :href="parentData.link">
			<span class="text-primary-light text-xl"
				><b>{{ parentData.name }}</b></span
			>
		</a>
		<br />
		<span class="text-label-subtitle text-base"
			><b>{{ parentData.role }}</b></span
		>
		<br />
		<span class="text-label-info text-sm text-primary-main"
			>{{ parentData.startDate }} - {{ parentData.endDate }}</span
		><br />
		<div
			v-for="item in parentData.roles"
			v-bind:key="item.name"
			class="m-1"
		>
			<a :href="item.link" class="text-sm text-label-info">
				<span class="text-label-subtitle"> ➔ </span>
				<span>{{ item.description }}</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "event",
	props: {
		parentData: Object,
		index: Number,
	},
};
</script>

<style scoped>
.event {
	animation: mouseOut 0.3s ease-in;
}
.event:hover {
	animation: mouseOver 0.3s ease-in forwards;
}
</style>
