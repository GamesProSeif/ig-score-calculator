<template>
	<v-card flat tile>
		<v-container>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title>Subjects Count</v-list-item-title>
					<v-list-item-subtitle>{{ subjects.length }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-list-item>
				<v-list-item-content>
					<v-list-item-title>Percentage</v-list-item-title>
					<v-list-item-subtitle>{{ percentage.toFixed(2) }} %</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-list-item>
				<v-list-item-content>
					<v-list-item-title>Government Score</v-list-item-title>
					<v-list-item-subtitle>{{ Math.floor(government) }} / 410</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-container>
	</v-card>
</template>

<script>
export default {
	name: 'OverviewTab',
	computed: {
		subjects () {
			return this.$store.state.subjects.data;
		},
		rules () {
			return this.$store.state.subjects.rules;
		},
		total () {
			let total = 0;

			for (const subject of this.subjects) {
				if (subject.numericalGrading) {
					total += this.rules.calculations.num[subject.grade];
				} else {
					total += this.rules.calculations.alpha[subject.grade];
				}
			}

			return total;
		},
		percentage () {
			return ((this.total / this.subjects.length) * 100) || 0;
		},
		government () {
			return ((this.total / this.subjects.length) * 410) || 0;
		}
	}
};
</script>

<style>

</style>
