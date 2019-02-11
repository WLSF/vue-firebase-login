<template>
  <form>
    <v-text-field
      v-model="email"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="errors"
      label="Password"
      required
    ></v-text-field>

    <v-btn @click="login">Login</v-btn>
    <router-link to="signup">Signup</router-link>
  </form>
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
        this.errors = error.message
      })
    }
  }
}
</script>
