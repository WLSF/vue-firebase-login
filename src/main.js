import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MSG_ID
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
