const input = document.getElementById("inputEleven");

function clearInput() {
   input.value = "";
}
function result() {
 input.value = eval(input.value);
}
function clickButton(value) {
   input.value += value;
}

/* 
11. Создайте простейший кальякулятор. На странице должны быть кнопки от 0 до 9 и знаки + - * / =. 
При клике на каждую цифру или знак, значние должно появляться в строке. 
При нажатаии на кнопку "=" - вывести результат 
математического выражения. Не забудьте добавить все проверки.

*/