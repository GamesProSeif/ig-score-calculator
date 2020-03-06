<template>
	<div id="calculator">
		<v-tabs>
			<v-tab key="1" href="#tab-subjects">
				Subjects
			</v-tab>
			<v-tab key="2" href="#tab-overview">
				Overview
			</v-tab>

			<v-tab-item key="1" value="tab-subjects">
				<SubjectsTab />
			</v-tab-item>
			<v-tab-item key="2" value="tab-overview">
				<OverviewTab />
			</v-tab-item>
		</v-tabs>
	</div>
</template>

<script>
import SubjectsTab from '../components/SubjectsTab';
import OverviewTab from '../components/OverviewTab';

export default {
	components: {
		SubjectsTab,
		OverviewTab
	},
	head () {
		return {
			title: 'Calculator'
		};
	}
};
</script>
