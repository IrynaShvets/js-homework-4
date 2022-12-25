const btn2 = document.getElementById("button2");
const input = document.getElementById("input");

const btnClick2 = btn2.addEventListener("click", alertMessage);

function alertMessage() {
  input.value = "Hello, World!";
}

/* 
2. Создайте кнопку и инпут с текстом Hello, Palmo. 
При клике на кнопку в инпуте текст должен замениться на Hello, World!
*/
