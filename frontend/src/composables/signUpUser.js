import { ref } from 'vue'

const error = ref('')

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
        window.localStorage.setItem('accessToken', res.accessToken)
        window.localStorage.setItem('user', JSON.stringify(res.user))
      })
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
