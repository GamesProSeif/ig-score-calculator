<template>
	<v-card flat tile>
		<v-container>
			<v-form class="mx-4 mb-4">
				<v-row>
					<v-col>
						<v-text-field
								v-model="form.name"
								label="Subject Name"
						/>
					</v-col>
					<v-col>
						<v-checkbox
								v-model="form.numericalGrading"
								label="Numerical Grading"
								color="primary"
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-select
								v-model="form.awardingBody"
								:items="AWARDING_BODIES"
								label="Awarding Body"
						/>
					</v-col>
					<v-col>
						<v-select
								v-model="form.degree"
								:items="DEGREES"
								label="Degree"
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-select
								v-model="form.grade"
								:items="GRADES[form.numericalGrading ? 'NUM' : 'ALPHA'][form.degree]"
								label="Grade"
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-btn @click="addSubject" color="primary">
							Add Subject
						</v-btn>
					</v-col>
					<v-col>
						<v-btn @click="resetForm" color="red">
							Reset
						</v-btn>
					</v-col>
				</v-row>
			</v-form>
		</v-container>
		<v-divider />
		<v-container v-show="subjects.length">
			<SubjectsTable />
		</v-container>
	</v-card>
</template>

<script>
import SubjectsTable from './SubjectsTable';

export default {
	name: 'SubjectsTab',
	components: { SubjectsTable },
	data () {
		return {
			form: { name: null, awardingBody: null, degree: null, grade: null, numericalGrading: false },
			DEGREES: ['OL', 'AS', 'AL'],
			AWARDING_BODIES: ['CAIE', 'Edexcel', 'Oxford AQA'],
			GRADES: {
				NUM: {
					OL: ['9', '8', '7', '6', '5', '4']
				},
				ALPHA: {
					OL: ['A*', 'A', 'B', 'C'],
					AS: ['A', 'B', 'C', 'D'],
					AL: ['A*', 'A', 'B', 'C', 'D']
				}
			},
			RULES: {
				NAME: [v => !!v || 'Name is required'],
				AWARDING_BODY: [v => !!v || 'Awarding Body is required'],
				DEGREE: [v => !!v || 'Degree is required'],
				GRADE: [v => !!v || 'Grade is required']
			}
		};
	},
	computed: {
		subjects () {
			return this.$store.state.subjects.data;
		}
	},
	methods: {
		addSubject () {
			const CURRENT_GRADES = this.GRADES[this.form.numericalGrading ? 'NUM' : 'ALPHA'][this.form.degree];
			const { name, awardingBody, degree, grade, numericalGrading } = this.form;
			if (!name || !awardingBody || !degree || !grade) {
				return;
			}
			if (!CURRENT_GRADES.length || !CURRENT_GRADES.includes(this.form.grade)) {
				return;
			}
			this.$store.commit(
				'subjects/add',
				{ name, awardingBody, degree, grade, numericalGrading }
			);
			this.resetForm();
		},
		resetForm () {
			this.form = { name: null, awardingBody: null, degree: null, grade: null, numericalGrading: false };
		}
	}
};
</script>

<style>

</style>
