<template lang="pug">
	.search-wrapper
		b-form-select(v-model="selected" :options="city" size="lg")
</template>
<script>
	import axios from 'axios'

export default {
	name: 'Search',
	props: ['value', 'selCity'],
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
		this.selected = this.selCity || null
	},
	watch: {
		selected: function(nv) {
			this.$store.dispatch(this.value, nv)
		}
	},
	data() {
		return {
			selected: null,
			app_id: [],
		}
	}
}
</script>
<style lang="scss" scoped>
	
</style>