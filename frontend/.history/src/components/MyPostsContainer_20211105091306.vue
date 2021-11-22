<template>
  <div class="flex column col-8">
      <div v-if="error">{{ error }}</div>
      <div v-if="blogs" class="blogs-container">
        <h4>My Posts</h4>
        <div v-for="blog in blogs" :key="blog.id" class="flex column blog q-px-xl">
            <div class="flex row">
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
            <div class="flex row edt-del-buttons">
                <div>Edit Blog</div>
                <div>Delete Blog</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import getBlogs from '../composables/getPosts'
export default {
  setup () {
    const userId = JSON.parse(localStorage.user).id
    console.log(userId)

    const { error, blogs } = getBlogs(userId)
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

  .blogs-container h4{
      align-self: flex-start;
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

  .edt-del-buttons{
      margin: 10px 0;
  }

  .edt-del-buttons div{
    padding: 15px 20px;
    margin-right: 20px;
    border: 1px solid black;
  }
</style>
