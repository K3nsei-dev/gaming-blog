const addImage = () => {
  const preview = document.querySelector('.imgurl')
  const file = document.querySelector('input[type=file]').files[0]
  const reader = new FileReader()
  console.log(preview, file)

  reader.addEventListener('load', function () {
    preview.src = reader.result
  }, false)

  if (file) {
    reader.readAsDataURL(file)
  }
}

const useAddImage = () => {
  return addImage
}

export default useAddImage
