<template>
	<div>
		<v-app>
			<Navbar />
			<v-content class="mt-4">
				<v-container>
					<Nuxt />
				</v-container>
			</v-content>
		</v-app>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
	components: {
		Navbar
	}
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
