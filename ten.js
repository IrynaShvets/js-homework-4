const form = document.getElementById("form10");
const inputNameId = document.getElementById("inputName");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { name, email, age, password, confirmPassword } = event.currentTarget;

  if (name.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
    return console.log("Please fill in all the fields!");
  }

  const nameValue = name.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const ageValue = age.value;
  const confirmPasswordValue = confirmPassword.value;

  if (nameValue.length < 4 || nameValue.length > 20) {
    inputNameId.insertAdjacentHTML(
      "afterend",
      `<span class="insertedContent">*The login value must be no less than 4 characters and no more than 20 characters and must not contain the characters . _ / \ | ,</span>`
    );
    return false;
  }

  console.log({
    nameValue,
    emailValue,
    passwordValue,
    ageValue,
    confirmPasswordValue,
  });

  const insertedContent = document.querySelector(".insertedContent");
  if (insertedContent) {
    insertedContent.parentNode.removeChild(insertedContent);
  }

  event.currentTarget.reset();
});

/* 
10. Создайте форму для регистрации с полями логин, емейл, возраст, пароль, повтор пароля и кнопка Зарегистрироваться. 
При нажатии на кнопку нужно проверить все поля по следующим правилам:
  логин - значние не менее 4х и не более 20 символов, не должен содержать символы . _ / \ | ,
  емейл - быть не пустым и меть формать text@text.text
  возраст - не пустой, только числа, числа не могут быть отрицательными
  пароль - должен быть не пустым, не менее 6 символов, иметь хотя бы одну заглавную букву и хотя бы одну цифру
Если все правила выполнены, над формой должно появиться уведомление, что регистрация пройдена успешно и поля должны очиститься.
Если какое-то поле заполненно некорректно - инпуту с некорректным значнием дать красный бордер и под инпутом вывести текст ошибки.
*/
