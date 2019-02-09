import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyB6zov2BGx8CTpuNfBfVpPLrfPVc5_on4o",
  authDomain: "vuejs-workshop-30016.firebaseapp.com",
  databaseURL: "https://vuejs-workshop-30016.firebaseio.com",
  projectId: "vuejs-workshop-30016",
  storageBucket: "vuejs-workshop-30016.appspot.com",
  messagingSenderId: "854305684478"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
