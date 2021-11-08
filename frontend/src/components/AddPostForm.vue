<template>
  <q-form @submit="handleSubmit">
    <q-input
    filled
    label="Title"
    v-model="title"
    ></q-input>
      <q-input
        filled
        label="Body"
        v-model="body"
      ></q-input>
      <q-input
        filled
        label="Tags"
        v-model="tag"
        @keydown.enter.prevent="handleTags"
      ></q-input>
      <div v-for="tag in tags" :key="tag"> #{{ tag }} </div>
      <q-input
        filled
        v-model="imageHeader"
        type="file"
      ></q-input>
      <img :src="imageHeader" alt="" class="imgurl">
      <button type="submit">SUBMIT</button>
      <div v-if="error"> {{ error }}</div>
  </q-form>
</template>

<script>
import { ref } from 'vue'
import useAddPost from '../composables/addPost.js'
import useAddImg from '../composables/imgUrl.js'

export default {
  setup () {
    const { error, addPost } = useAddPost()
    const { addImage } = useAddImg()
    const title = ref('')
    const imageHeader = ref(null)
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const handleSubmit = async () => {
      addImage
      await addPost(title.value, imageHeader.value, body.value, tags.value)
    }

    const handleTags = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '')
        tags.value.push(tag.value)
      }
      tag.value = ''
    }
    return { error, handleSubmit, handleTags, title, imageHeader, body, tag, tags }
  }
}
</script>

<style>

</style>
