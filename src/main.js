import Vue from 'vue'
// import Greeting from './Greeting.vue'
// import RandomGenerator from './RandomGenerator.vue'
// import EmailValidation from './EmailValidation.vue'
import Counter from './Counter.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Counter),
}).$mount('#app')
