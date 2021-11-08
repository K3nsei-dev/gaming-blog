import { ref } from 'vue'

const error = ref('')

const addPost = async (title, imageHeader, body, tags) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('accessToken')
    console.log(token)
    const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
    await fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: headersList,
      body: JSON.stringify({
        title: title,
        author: user.fullName,
        image_header: imageHeader,
        body: body,
        tags: tags,
        userId: user.id
      })
    }).then(async response => {
      const data = await response.json()
      console.log({ msg: data })
    })
  } catch (err) {
    console.log({ msg: err.message, status_code: 404 })
    error.value = err.message
  }
}

const useAddPost = () => {
  return { addPost, error }
}

export default useAddPost
