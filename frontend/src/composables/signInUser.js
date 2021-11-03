import { ref } from 'vue'

const error = ref(null)

const signin = async (email, password) => {
  error.value = null
  try {
    const headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.io)',
      'Content-Type': 'application/json'
    }
    fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: headersList
    }).then(res => res.json())
      .then(res => {
        window.localStorage.setItem('accessToken', res.accessToken)
        window.localStorage.setItem('user', JSON.stringify(res.user))
      })
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useSignIn = () => {
  return { error, signin }
}

export default useSignIn
