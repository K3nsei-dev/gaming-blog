import { ref } from 'vue'

const error = ref(null)
const blog = ref(null)

const getSingleBlog = (blogId) => {
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
        blog.value = res
        console.log(blog.value.body)
      })
  } catch (err) {
    console.log(err.message)
    error.value = err.message
    blog.value = null
  }
}

const getBlog = () => {
  return { blog, error }
}

export default getBlog
