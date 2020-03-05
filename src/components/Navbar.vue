<template>
	<div id="nav">
		<v-toolbar color="primary">
			<!-- <v-app-bar-nav-icon /> -->
			<v-toolbar-title>IGCSE Score Calculator</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items>
				<v-btn text nuxt to="/">
					Home
				</v-btn>
				<v-btn text nuxt to="/calculator">
					Calculator
				</v-btn>
				<v-btn text href="https://twitter.com/gamesproseif" target="_blank">
					<v-icon>mdi-twitter</v-icon>
				</v-btn>
				<v-btn text href="mailto:seifmansour2014@outlook.com">
					<v-icon>mdi-email</v-icon>
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</div>
</template>

<script>
export default {
	name: 'Navbar'
};
</script>
