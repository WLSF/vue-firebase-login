import firebase from 'firebase'

class Auth {
  getAuthData() {
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
  }

  createLogin(obj) {
    firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then(() => {
      obj.$router.push({ name: 'home' })
    }).catch((error) => {
      obj.errors = error.message
    })
  }

  createAccount(obj) {
    firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password).then(() => {
      obj.$router.push({ name: 'home' })
    }).catch((error) => {
      obj.errors = error.message
    })
  }
}

export default new Auth