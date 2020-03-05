<template>
	<div>
		<v-subheader>Subjects Table</v-subheader>
		<v-simple-table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Awarding Body</th>
					<th>Degree</th>
					<th>Grading System</th>
					<th>Grade</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="subject in subjects" :key="subjects.indexOf(subject)">
					<td>{{ subject.name }}</td>
					<td>{{ subject.awardingBody }}</td>
					<td>{{ subject.degree }}</td>
					<td>{{ subject.numericalGrading ? 'Numerical' : 'Alphabetical' }}</td>
					<td>{{ subject.grade }}</td>
					<td>
						<v-btn
								@click="removeSubject(subjects.indexOf(subject))"
								color="red"
								icon
						>
							<v-icon>
								mdi-trash-can-outline
							</v-icon>
						</v-btn>
					</td>
				</tr>
			</tbody>
		</v-simple-table>
	</div>
</template>

<script>
export default {
	name: 'SubjectsTable',
	computed: {
		subjects () {
			return this.$store.state.subjects.data;
		}
	},
	methods: {
		removeSubject (index) {
			this.$store.commit('subjects/remove', index);
		}
	}
};
</script>

<style>

</style>
