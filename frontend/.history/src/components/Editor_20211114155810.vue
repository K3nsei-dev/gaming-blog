<template>
  <div class="editor">
    <input type="text" v-model="title" id="blogtitle">
    <input type="text" v-model="image" id="blogimage">
    <textarea v-model="body" id="blogbody"></textarea>
    <input type="text" v-model="tags" id="blogtags">
    <q-btn label="Submit Changes" @click="editPost" />
    <br>
  </div>
</template>

<script>
import { ref } from 'vue'
import editBlog from '../composables/editPost'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const blogId = route.params.id

    const title = ref('')
    const image = ref('')
    const body = ref('')
    const tags = ref('')

    function getBlog () {
      const error = ref(null)
      error.value = null
      try {
        const headersList = {
          Accept: '*/*',
          'User-Agent': 'Thunder Client (https://www.thunderclient.io)',
          'Content-Type': 'application/json',
          Auth: `Bearer ${localStorage.accessToken}`
        }
        fetch(`http://localhost:3000/blogs/${blogId}`, {
          headers: headersList
        }).then(res => res.json())
          .then(res => {
            console.log(res)
            error.value = null
            title.value = res.title
          })
      } catch (err) {
        console.log(err.message)
        error.value = err.message
      }

      return { error }
    }

    getBlog()

    const editPost = () => {
      const post = {
        title: title,
        image: image,
        body: body,
        tags: tags
      }
      try {
        editBlog(blogId, post)
        alert('Blog editted succesfully')
      } catch (err) {
        console.log(err.message)
        alert('Blog edit unsuccessful')
      }
    }

    return { blog, title, image, body, tags, editPost }
  }
}
</script>

<style>

</style>
