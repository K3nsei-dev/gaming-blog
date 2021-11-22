<template>
  <q-form class="flex column flex-center signup-form">
        <span>Sign In</span>
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
      <q-btn label="Sign In" @click="handleSubmit" />
      </q-form>
</template>

<script>
import { ref } from 'vue'
import useSignIn from '../composables/signInUser'
export default {
  setup (context, props) {
    const { error, signin } = useSignIn()
    const email = ref('')
    const password = ref('')
    const handleSubmit = async () => {
      await signin(email.value, password.value)
      console.log('user signed in')
      console.log(localStorage.user)
      context.emit('signin')
    }

    return { email, password, handleSubmit, error }
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
