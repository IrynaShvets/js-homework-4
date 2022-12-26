const form = document.getElementById("form10");
const inputNameId = document.getElementById("inputName");
const inputEmailId = document.getElementById("inputEmail");
const inputPasswordId = document.getElementById("inputPassword");
const inputAgeId = document.getElementById("inputAge");
const inputConfirmPasswordId = document.getElementById("inputConfirmPassword");

const btnId = document.getElementById("submit");

form.addEventListener("submit", validationForm);

function validationForm(event) {
  event.preventDefault();
  const { name, email, age, password, confirmPassword} = event.currentTarget;

  const nameValue = name.value;
  const emailValue = email.value;
  const ageValue = age.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (
    nameValue.length < 4 ||
    nameValue.length > 20 ||
    nameValue.match(/(?=.*[._/\|,])/g)
  ) {
  
    inputNameId.insertAdjacentHTML(
      "afterend",
      `<span class="insertedContent">*The login value must be no less than 4 characters and no more than 20 characters and must not contain the characters . _ / \ | ,</span>`
    );
    inputNameId.style.border = "1px solid red";
    
    return false;
  } 
  
   if (
    !emailValue.match(/(?=.*[a-z])(?=.*[.@])[.@a-z]/g)
  ) {
  
    inputEmailId.insertAdjacentHTML(
      "afterend",
      `<span class="insertedContentEmail">*The email value must be no empty and must has format text@text.text.</span>`
    );
    inputEmailId.style.border = "1px solid red";
    
    return false;
  }

  if (+ageValue < 0 || typeof +ageValue !== "number") {
    
    inputAgeId.insertAdjacentHTML(
      "afterend",
      `<span class="insertedContentAge">*The age value must be no less than 0 and typeof value must be number.</span>`
    );
    inputAgeId.style.border = "1px solid red";
    
    return false;
  }

  if (
    !passwordValue.match(
      /(?=.*[0-9])(?=.*[A-Z]){6,}/g
    )
  ) {
    inputPasswordId.insertAdjacentHTML(
      "afterend",
      `<span class="insertedContentPassword">*Password - must be non-empty, at least 6 characters long, have at least one capital letter and at least one number.</span>`
    );
    inputPasswordId.style.border = "1px solid red";
    
    return false;
  } 

  if (
    !confirmPasswordValue.match(
      /(?=.*[0-9])(?=.*[A-Z]){6,}/g
    ) || confirmPasswordValue !== passwordValue
  ) {
    inputConfirmPasswordId.insertAdjacentHTML(
      "afterend",
      `<span class="insertedContentConfirmPassword">*Confirm Password - must be non-empty and ...</span>`
    );
    inputConfirmPasswordId.style.border = "1px solid red";
    
    return false;
  } 

  console.log({
    nameValue,
    emailValue,
    passwordValue,
    ageValue,
    confirmPasswordValue,
  });

  alert("Registration completed successfully.");

  const insertedContent = document.querySelector(".insertedContent");
  if (insertedContent) {
    insertedContent.parentNode.removeChild(insertedContent);
    inputNameId.style.border = 0;
    
  }

  const insertedContentEmail = document.querySelector(".insertedContentEmail");
  if (insertedContentEmail) {
    insertedContentEmail.parentNode.removeChild(insertedContentEmail);
    inputNameId.style.border = 0;
  }

  const insertedContentAge = document.querySelector(".insertedContentAge");
  if (insertedContentAge) {
    insertedContentAge.parentNode.removeChild(insertedContentAge);
    inputNameId.style.border = 0;
  }

  const insertedContentPassword = document.querySelector(
    ".insertedContentPassword"
  );
  if (insertedContentPassword) {
    insertedContentPassword.parentNode.removeChild(insertedContentPassword);
    inputPasswordId.style.border = 0;
  }

  const insertedContentConfirmPassword = document.querySelector(
    ".insertedContentConfirmPassword"
  );
  if (insertedContentConfirmPassword) {
    insertedContentConfirmPassword.parentNode.removeChild(insertedContentConfirmPassword);
    inputPasswordId.style.border = 0;
  }

  event.target.reset();
}

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
