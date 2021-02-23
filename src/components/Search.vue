<template lang="pug">
	.search-wrapper
		b-form-select(v-model="selected" :options="city" size="lg")
</template>
<script>
	import axios from 'axios'

export default {
	name: 'Search',
	async created() {
		const r = await axios.get('/json/city.json')
		this.city = r.data.map((v) => {
			v.text = v.name
			v.value = v.id
			return v;
		});
		// 다 돌리고 난 다음에 삽입
		this.city.unshift({value: null, text: '현재위치'})
		//unshift: 배열 맨 앞에 데이터 삽입
		this.app_id = process.env.VUE_APP_ID
	},
	watch: {
		selected: function(nv, ov) {
			this.$store.dispatch('ACT_WEATHER', nv)
		}
	},
	data() {
		return {
			selected: null,
			city: [],
			app_id: ''
		}
	}
}
</script>
<style lang="scss" scoped>
	
</style>