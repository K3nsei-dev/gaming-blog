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
import getBlog from '../composables/getPost'
import editBlog from '../composables/editPost'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const title = ref('')
    const image = ref('')
    const body = ref('')
    const tags = ref('')

    const route = useRoute()
    const blogId = route.params.id

    console.log(blogId)
    const { blog, error } = getBlog(blogId)
    console.log(blog.title)

    if (!error.value) {
      //   document.querySelector('#blogtitle').value = blog.title
      //   document.querySelector('#blogimage').value = blog.image
      //   document.querySelector('#blogbody').value = blog.body
      //   document.querySelector('#blogtags').value = blog.tags
      console.log('monkey')
    }

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
