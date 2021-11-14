import { ref } from 'vue'

const editBlog = (blogId) => {
  const error = ref(null)
  error.value = null
  try {
    const headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.io)',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`
    }
    fetch(`http://localhost:3000/blogs/${blogId}`, {
      method: 'PUT',
      headers: headersList
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        error.value = null
        console.log('Blog edited')
      })
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }

  return { error }
}

export default editBlog
