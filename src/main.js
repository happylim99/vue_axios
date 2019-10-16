import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://vue-axios-78ada.firebaseio.com'
//set header to every request by using common
//axios.defaults.headers.common['Authorization'] = 'token123'
//set header to every get request
axios.defaults.headers.get['Accepts'] = 'application/json'

/*
axios.interceptors.request.use(config => {
	console.log('Request interceptor' + config)
	//config.headers['aaaa'] = ''
	//return is a must, or the process will stuck
	return config
})

axios.interceptors.response.use(res => {
	console.log('Response interceptor', res)
	return res
})
*/

const reqInterceptor = axios.interceptors.request.use(config => {
	console.log('Request interceptor' + config)
	//config.headers['aaaa'] = ''
	//return is a must, or the process will stuck
	return config
})

const resInterceptor = axios.interceptors.response.use(res => {
	console.log('Response interceptor', res)
	return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
