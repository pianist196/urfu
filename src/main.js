import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import apolloProvider from './apollo'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
	router,
	apolloProvider,
	render: h => h(App)
}).$mount('#app')


