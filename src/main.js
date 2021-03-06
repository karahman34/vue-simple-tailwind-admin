import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Tailwind.
import 'tailwindcss/tailwind.css'

// Material Design Icons.
import '@mdi/font/css/materialdesignicons.min.css'

// Chart.js
import 'chart.js/dist/Chart.min.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
