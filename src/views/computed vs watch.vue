<template lang="pug">
	.home-wrapper
		.title-wrapper
			h1 computed vs watch
		Search
		input(type="text" v-model="query")
		div {{ myName }}
</template>
<script>
export default {
	computed: {
		// 내값이 바뀔 때
		myName: function() {
			return this.query
		}
	},
	watch: {
		//쳐다봐야할 변수명이 들어감
		myName: function(nVal, oVal) {
			//nVal: newValue, oVal: oldValue
			//myName이 변경되면 이 함수가 실행됨(내 값이 바뀌면 뭔가를 실행)
			console.log(nVal, oVal);
		}
	},
	data() {
		return {
			query: ''
		}
	}
}
</script>
<style lang="scss" pug>
	.home-wrapper {
		text-align: center;
	}
</style>