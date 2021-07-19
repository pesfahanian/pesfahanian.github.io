<template>
	<div class="flex-col justify-center">
		<h1 class="font-bold text-primary-main md:text-5xl text-4xl">
			About Me
		</h1>

		<div class="my-8 md:flex bg-background-light rounded-lg p-8">
			<img
				class="
					h-24
					w-24
					md:h-24
					md:w-24
					rounded-lg
					mx-auto
					md:mx-0
					sm:my-4
					md:my-0
					md:mr-6
				"
				src="../assets/img/profile.jpeg"
			/>
			<br />
			<div class="text-left md:text-left sm:text-left">
				<p class="text-label-info text-lg">
					Hi, I'm
					<span class="text-md font-bold text-label-subtitle">{{
						profile.first_name
					}}</span
					>.
				</p>
				<p class="text-label-info text-lg">
					I'm a medical machine learning researcher at the
					<a class="text-primary-main" href="https://hpc.ipm.ac.ir/">
						High-Performance Computing (HPC)
					</a>
					laboratory of the
					<a class="text-primary-main" href="http://cs.ipm.ac.ir/">
						Department of Computer Science </a
					>,
					<a class="text-primary-main" href="http://www.ipm.ac.ir/">
						Institute for Research in Fundamental Sciences (IPM) </a
					>.
				</p>
				<p class="text-label-info text-lg">
					My research is focused on the applications of deep learning
					for medical imaging.
				</p>
				<p class="text-label-info text-lg">
					I am currently a full-time Back-End Developer. Some of the
					technologies that I work with are Django, FastAPI, Celery,
					PostgreSQL, MongoDB, Redis, and Docker.
				</p>
				<p class="text-label-info text-lg">
					I graduated with a B.Sc. in in Mathematics and am currently
					studying a M.Sc. in Computer Science.
				</p>
				<p class="text-label-info text-lg">
					I practice Programming and play the Electric Guitar in my
					free time. I also dabble in Crypto...
				</p>
			</div>
		</div>

		<div class="w-full my-4">
			<h1 class="text-white md:text-5xl text-4xl">Skills</h1>

			<div class="skills">
				<div class="shadow-lg rounded-lg bg-background-light p-6">
					<span class="text-label-subtitle font-bold text-lg my-2"
						>Python</span
					>
					<br />
					<span
						v-for="item in technologies.python1"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />
					<span
						v-for="item in technologies.python3"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />
					<span
						v-for="item in technologies.python4"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />
					<span
						v-for="item in technologies.python2"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />
					<span
						v-for="item in technologies.python6"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />
					<span
						v-for="item in technologies.python5"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />
					<span
						v-for="item in technologies.python7"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />
					<span
						v-for="item in technologies.python8"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
				</div>
				<div class="shadow-lg rounded-lg bg-background-light p-6">
					<span class="text-label-subtitle font-bold text-lg my-2"
						>JavaScript</span
					>
					<br />
					<span
						v-for="item in technologies.javascript"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />

					<span class="text-label-subtitle font-bold text-lg my-2"
						>C/C++</span
					>
					<br />
					<span
						v-for="item in technologies.c"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />

					<span class="text-label-subtitle font-bold text-lg my-2"
						>Database</span
					>
					<br />
					<span
						v-for="item in technologies.database"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />

					<span class="text-label-subtitle font-bold text-lg my-2"
						>Other</span
					>
					<br />
					<span
						v-for="item in technologies.other"
						v-bind:key="item.name"
						class="m-1 text-label-subtitle"
					>
						<span class="text-primary-light">• </span>
						<span class="text-label-info">{{
							item.name
						}}</span></span
					>
					<br />
				</div>
			</div>
			<div class="shadow-lg rounded-lg bg-background-light p-6 my-4">
				<span class="text-label-subtitle font-bold text-lg my-2"
					>Currently learning</span
				><br />
				<span
					v-for="item in technologies.learning"
					v-bind:key="item.name"
					class="m-1 text-label-subtitle"
				>
					<span class="text-primary-light">• </span>
					<span class="text-label-info">{{ item.name }}</span></span
				>
			</div>
		</div>

		<div class="w-full my-8">
			<h1 class="text-white md:text-5xl text-4xl">Experience</h1>
			<timeline></timeline>
		</div>
	</div>
</template>

<script>
import timeline from "@/components/timeline.vue";
import { mapGetters } from "vuex";
export default {
	components: { timeline },

	data: () => {
		return {};
	},
	computed: {
		...mapGetters(["age", "profile", "technologies"]),
	},
};
</script>


<style scoped>
.skills {
	display: grid;
	grid-column-gap: 1em;
	grid-row-gap: 1em;
	grid-template-columns: repeat(2, 1fr);
}

@media only screen and (max-width: 1200px) {
	.skills {
		display: grid;
		grid-column-gap: 1em;
		grid-row-gap: 1em;
		grid-template-columns: repeat(2, 1fr);
	}
}

@media only screen and (max-width: 768px) {
	.skills {
		display: grid;
		grid-row-gap: 1em;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
