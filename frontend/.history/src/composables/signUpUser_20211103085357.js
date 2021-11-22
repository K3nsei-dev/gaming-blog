import { ref } from 'vue'

const error = ref(null)
const blogs = ref(null)

const signup = async (email, password, fullname, username) => {
  error.value = null
  try {
    const headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.io)',
      'Content-Type': 'application/json'
    }
    fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        fullName: fullname,
        username: username
      }),
      headers: headersList
    }).then(res => res.json())
      .then(res => {
        error.value = null
        blogs.value = res
      })
  } catch (err) {
    console.log(err.message)
    error.value = err.message
    blogs.value = null
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
