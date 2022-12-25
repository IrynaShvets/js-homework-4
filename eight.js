const btn8 = document.getElementById("button8");
const list8 = document.getElementById("list8");

const btnClick8 = btn8.addEventListener("click", newItem);

function newItem() {
  list8.innerHTML += `<li class="item-style"></li>`;
}

/* 
8. Создайте кнопку и пустой список ul на странице. 
При каждом клике должен появляться новый элемент списка с порядковым номером. 
*/