<template>
  <div class="login">
    <input type="text" v-model="email" name="email">
    <input type="password" v-model="password" name="password">

    <button @click='login'>Login</button>
    <router-link to="/signup"><p>Signup</p></router-link>

    <p v-if="errors">{{ errors }}</p>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: ""
    }
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.push({ name: 'home' })
      }).catch((error) => {
        this.errors = error
      })
    }
  }
}
</script>
