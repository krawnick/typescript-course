const forms = document.querySelectorAll('form')
const email = document.querySelector('#email') as HTMLInputElement
const title = document.querySelector('#title') as HTMLInputElement
const text = document.querySelector('#text') as HTMLTextAreaElement
const checkbox = document.querySelector('#checkbox') as HTMLInputElement

interface IFormData {
  email: string
  title: string
  text: string
  checkbox: boolean
}

const formData: IFormData = {
  email: '',
  title: '',
  text: '',
  checkbox: false,
}

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    formData.email = email.value
    formData.title = title.value
    formData.text = text.value
    formData.checkbox = checkbox.checked

    console.log(formData)
    if (validateFormData(formData)) {
      checkFormData(formData)
    }
  })
})

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: IFormData): boolean {
  // Если каждое из свойств объекта data правдиво...
  if (Object.values(data).every((value) => value)) {
    console.log('All fields are completed!')
    return true
  } else {
    console.log('Please, complete all fields')
    return false
  }
}

function checkFormData(data: IFormData): void {
  const { email } = data
  const emails: string[] = [
    'example@gmail.com',
    'example@ex.com',
    'admin@gmail.com',
  ]
  console.log(email)

  // Если email совпадает хотя бы с одним из массива
  if (emails.includes(email)) {
    console.log('This email is already exist')
  } else {
    console.log('Posting data...')
  }
}