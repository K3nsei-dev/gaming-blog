<template>
  <q-form class="flex column flex-center signup-form">
        <span>Sign Up</span>
        <i class="far fa-thumbs-up"></i>
        <q-icon name="thumb_up" />
        <q-input
        filled
        label="Email"
        v-model="email"
      ></q-input>
      <br/>
      <q-input
        filled
        type="password"
        label="Password"
        v-model="password"
      ></q-input>
      <br/>
      <q-input
        filled
        label="Full Name"
        v-model="fullname"
      ></q-input>
      <br/>
      <q-input
        filled
        label="Username"
        v-model="username"
      ></q-input>
      <q-btn label="Sign Up" @click='handleSubmit' />
  </q-form>
</template>

<script>
import { ref } from 'vue'
import signUpUser from '../composables/signUpUser'
export default {
  setup () {
    const { error, signup } = signUpUser()
    const email = ref('')
    const password = ref('')
    const username = ref('')
    const fullname = ref('')
    const handleSubmit = async () => {
      await signup(email.value, password.value, fullname.value, username.value)
      console.log('user signed up')
    }

    return { email, password, username, fullname, handleSubmit, error }
  }
}
</script>

<style scoped>
button.q-btn{
    margin-top: 20px;
  }
  form{
    margin-bottom: 20px;
  }
</style>
