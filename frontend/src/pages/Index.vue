<template>
  <q-page class="flex row">
    <div class="flex flex-center col-md-6 q-px-xl">
      <h2>Welcome to the gaming blog!</h2>
    </div>
    <div class="flex column flex-center col-md-6">
      <SignUpForm v-if="toggleForm" />
      <SignInForm v-else />
      <p v-if="toggleForm">Already have an account? <span @click="toggleForms">Sign In</span>.</p>
      <p v-else>Don't have an account? <span @click="toggleForms">Sign Up</span>.</p>
    </div>
  </q-page>
</template>

<script>
import SignInForm from 'src/components/SignInForm.vue'
import SignUpForm from 'src/components/SignUpForm.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    const toggleForm = true
    return { toggleForm }
  },
  methods: {
    toggleForms () {
      this.toggleForm = !this.toggleForm
    }
  },
  components: { SignUpForm, SignInForm },
  name: 'PageIndex'
})
</script>
<style scoped>
  p span{
    color: rgb(0, 183, 255);
    font-weight: 600;
    transition: 0.5s ease;
  }
  p span:hover{
    color: #222;
  }
</style>
