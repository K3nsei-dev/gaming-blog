<template>
  <div class="row reverse-wrap homepage-container">
    <div class="col-md-8">
      <PostsContainer />
    </div>
    <div class="col-auto"> Write blog + Tags/Filter Container </div>
  </div>
</template>

<script>
import PostsContainer from 'src/components/PostsContainer.vue'
export default {
  components: { PostsContainer }
}
</script>

<style>
 .homepage-container{
   width: 100%;
 }
</style>
