import { ref } from 'vue'

const getBlog = (blogId) => {
  const error = ref(null)
  let blog = null
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
        error.value = null
        blog = res
        console.log(blog)
      })
  } catch (err) {
    console.log(err.message)
    error.value = err.message
    blog = null
  }

  return { error, blog }
}

export default getBlog
