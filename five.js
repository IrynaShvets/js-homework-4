const btn5 = document.getElementById("button5");
const text = document.getElementById("text");

const btnClick5 = btn5.addEventListener("click", changeTextColor);

let index = 0;
const colors = ['red', '#1a1818'];

function changeTextColor() {
 text.style.color = colors[index];
 index = index >= colors.length - 1 ? 0 : index + 1;
}

/* 
5. Создайте абзац (<p>) с люыбым текстом и кнопку. 
При клике на кнопку цвет текста должен поменять на красный, кликнув еще раз,
текст должен вернуть исходный цвет.
*/