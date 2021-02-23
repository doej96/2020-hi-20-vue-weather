import axios from 'axios'
import { getCoords } from '../modules/utils'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const params = { units: 'metric', lang: 'kr', appid: process.env.VUE_APP_APPID }

const getPositionn = async () => {
	return await getDaily(await getCoords())
}

// selectedCity => daily
const getDaily = async (val) => {
	params.id = ''
	params.lat = ''
	params.lon = ''
	if(typeof v == 'string' || 'number') params.id = v
	else {
		params.lat = v.lat
		params.lon = v.lon
	}
	const r = await axios.get(DAILY_URL, { params })
	return r.data
}

// selectedCity => 5day3hour
const getDays = async () => {

}

// 특정도시 날씨정보 let, lon => daily
const getWorld = async () => {

}

export { getPosition, getDaily, getDays, getWorld }