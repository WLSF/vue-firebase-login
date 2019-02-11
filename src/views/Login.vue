<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-form>
          <v-card-text>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="Email"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              :error-messages="errors"
              label="Password"
              hint="At least 8 chars"
              @click:append="show = !show"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="login">Login</v-btn>
            <router-link to="/signup">Signup</router-link>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import firebase from 'firebase'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: "",
      rules: {
        required: value => !!value || 'Required!',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid email.'
        },
        min: value => value.length >= 8 || 'Min 8 chars'
      },
      show: false,
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
