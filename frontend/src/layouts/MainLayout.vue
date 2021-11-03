<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color:white;" class="q-py-md q-px-xl">
        <q-toolbar-title>
          Gaming Blog
        </q-toolbar-title>
        <div>Home</div>
        <div>Profile</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    return {
    }
  }
})
</script>
