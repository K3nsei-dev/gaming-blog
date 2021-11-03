<template>
  <div v-if="error"></div>
  <div v-if="blog">
      <h1> {{ blog.title }} </h1>
      <p>{{ blog.author }}</p>
      <img :src="blog.image_header" alt="Blog Img">
      <p>{{ blog.body }}</p>
      <span> {{blog.createdAt}} </span>

  </div>
</template>

<script>
import getBlog from '../composables/getPost'
import { useRoute } from 'vue-router'
export default {
  setup (props) {
    const route = useRoute()
    const blogId = route.params
    console.log(blogId)
    const { error, blog } = getBlog(blogId.id)

    return { error, blog }
  }
}
</script>

<style>

</style>
