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
import auth from '../services/auth'

export default {
  name: "Login",
  data() {
    return auth.getAuthData()
  },
  methods: {
    login: function() { 
      auth.createLogin(this)
    }
  }
}
</script>
