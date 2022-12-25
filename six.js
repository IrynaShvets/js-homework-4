const btn6 = document.getElementById("button6");
const input6 = document.getElementById("input6");

btn6.addEventListener("click", disabledInput);

function disabledInput() {
 input6.disabled = !input6.disabled;
}

/* 
6. Создайте кнопку и инпут. При клике на кнопку инпут должен стать заблокированным (disabled). 
При повторном клике должен разблокироваться.
*/