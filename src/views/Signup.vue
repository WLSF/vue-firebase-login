<template>
  <div class="signup">
    <input type="text" v-model="email" name="email">
    <input type="password" v-model="password" name="password">

    <button @click='createUser'>Criar conta</button>
    <router-link to="/login"><p>Login</p></router-link>

    <p v-if="errors">{{ errors }}</p>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      errors: ""
    }
  },
  methods: {
    createUser: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.push({ name: 'home' })
      }).catch((error) => {
        this.errors = error
      })
    }
  }
}
</script>
