import { getDaily, getPosition } from './api'

export default {
	async ACT_CITY({ commit }, value) {
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getDaily(value))
	},
	async ACT_POSITION({ commit }) {
		//position값을 가져옴
		commit('MUT_GEO', await getPosition())
	}
}