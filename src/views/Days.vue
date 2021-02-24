<template lang="pug">
	.home-wrapper
		title
		DayList
</template>
<script>
import DayList from '../components/weather/DayList.vue'

export default {
	name: 'Days',
	components: { DayList }
}
</script>
<style lang="scss" pug>
	.home-wrapper {
		text-align: center;
	}
</style>