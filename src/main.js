import Vue from 'vue'
import Greeting from './Greeting.vue'
// import RandomGenerator from './RandomGenerator.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Greeting),
}).$mount('#app')
