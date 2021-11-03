import { ref } from 'vue'

const getBlogs = () => {
  const error = ref(null)
  const blogs = ref(null)
  error.value = null
  try {
    const headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.io)',
      'Content-Type': 'application/json',
      Auth: `Bearer ${localStorage.accessToken}`
    }
    fetch('http://localhost:3000/blogs', {
      headers: headersList
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        error.value = null
        blogs.value = res
      })
  } catch (err) {
    console.log(err.message)
    error.value = err.message
    blogs.value = null
  }

  return { error, blogs }
}

export default getBlogs
