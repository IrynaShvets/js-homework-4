const btn4 = document.getElementById("button4");
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");

const btnClick4 = btn4.addEventListener("click", changeTitle);

function changeTitle() {
  const cloneTitle1 = title1.cloneNode(true);
  const cloneTitle2 = title2.cloneNode(true);
  title1.textContent = cloneTitle2.textContent;
  title2.textContent = cloneTitle1.textContent;
}

/* 
4. Создайте 2 заголовка h1 и кнопку. 
При клике на кнопку текст в заголовках должен замениться друг на друга.
*/
