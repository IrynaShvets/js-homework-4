const btn3 = document.getElementById("button3");
const input3 = document.getElementById("input3");

const btnClick3 = btn3.addEventListener("click", valueInput);

function valueInput() {
  console.log(input3.value);
}

/* 
3. Создайте кнопку и инпут. 
При клике на кнопку в console.log выведите содержимое инпута.
*/
