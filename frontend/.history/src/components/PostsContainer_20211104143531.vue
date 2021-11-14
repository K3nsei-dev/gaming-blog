<template>
  <div class="flex column col-8">
      <div v-if="error">{{ error }}</div>
      <div v-if="blogs" class="blogs-container">
        <div v-for="blog in blogs" :key="blog.id" class="flex row blog q-px-xl">
            <div class="blogtext">
              <router-link :to="{ name: 'ViewBlog', params: {id: blog.id} }">
                <h4>{{ blog.title }}</h4>
              </router-link>
                <span>{{ blog.author }}</span>
                <p>{{ blog.body }}</p>
                <span>{{ blog.createdAt }}</span>
            </div>
            <img class="blogimage" :src="blog.image_header" />
        </div>
      </div>
  </div>
</template>

<script>
import getBlogs from '../composables/getPosts'
export default {
  setup () {
    const { error, blogs } = getBlogs(2)
    console.log('something')
    console.log(getBlogs())
    // filter blogs to shorten body to snippet

    return { blogs, error }
  }
}
</script>

<style>
  .blogs-container{
      width: 60vw;
      min-width: 350px;
      display: flex;
      flex-direction: column;
      place-items: center;
  }

  .blog{
      width: 100%;
      place-self: center;
      padding: 0 100px;
  }

  .blog::after{
      margin-top: 50px;
      height: 1px;
      width: 100%;
      background: #333;
      content: "";
  }

  .blog .blogtext{
      width: 70%;
  }

  .blog img {
      margin-left: 20px;
      width: 25%;
      height: 25%;
      align-self: center;
  }
</style>
