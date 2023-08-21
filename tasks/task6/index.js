var forms = document.querySelectorAll('form');
var email = document.querySelector('#email');
var title = document.querySelector('#title');
var text = document.querySelector('#text');
var checkbox = document.querySelector('#checkbox');
var formData = {
    email: '',
    title: '',
    text: '',
    checkbox: false,
};
forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formData.email = email.value;
        formData.title = title.value;
        formData.text = text.value;
        formData.checkbox = checkbox.checked;
        console.log(formData);
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
    });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (Object.values(data).every(function (value) { return value; })) {
        console.log('All fields are completed!');
        return true;
    }
    else {
        console.log('Please, complete all fields');
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = [
        'example@gmail.com',
        'example@ex.com',
        'admin@gmail.com',
    ];
    console.log(email);
    // Если email совпадает хотя бы с одним из массива
    if (emails.includes(email)) {
        console.log('This email is already exist');
    }
    else {
        console.log('Posting data...');
    }
}
