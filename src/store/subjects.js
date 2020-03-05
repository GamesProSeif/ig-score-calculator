export const state = () => ({
	data: [],
	rules: {
		calculations: {
			num: {
				'9': 1.00,
				'8': 1.00,
				'7': 0.95,
				'6': 0.88,
				'5': 0.82,
				'4': 0.70
			},
			alpha: {
				'A*': 1.00,
				'A': 0.95,
				'B': 0.85,
				'C': 0.70,
				'D': 0.60
			}
		}
	}
});

export const mutations = {
	add (state, { name, awardingBody, degree, grade, numericalGrading }) {
		state.data.push({ name, awardingBody, degree, grade, numericalGrading });
	},
	remove (state, index) {
		state.data.splice(index, 1);
	},
	clear (state) {
		state.data = [];
	}
};
