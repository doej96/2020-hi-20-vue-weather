<template lang="pug">
	.home-wrapper
		.title-wrapper
			h2 Vue를 활용한 날씨정보 앱
				small.ml-3 v1.0
		Search.Search
		Daily
</template>
<script>
import { mapGetters } from 'vuex'
import Search from '../components/Search.vue'
import Daily from '../components/weather/Daily.vue'

export default {
	name: 'Home',
	components: { Search, Daily },
	//computed: { ...mapGetters(['GET_DAILY']) },
	//GET_DAILY의 값이 바뀌면 view단의 GET_DAILY.name 바뀜
	//action ->  getDaily요청, api에서 실행해서 return해줌 -> action에서 받아서 MUT_DAILY(mutations에서 돌아서 r가져옴)
	created() {
		this.$store.dispatch('ACT_WEATHER', null)
		console.log(process.env);
	},
	data() {
		return {
		
		}
	},
	methods: {
		
	}
}
</script>
<style lang="scss" scoped>
.home-wrapper {
	text-align: center;
	@include flex($CT, $CT);
	flex-direction: column;
	.Search {
		min-width: 200px;
		margin: 2em 0;
	}
}
</style>