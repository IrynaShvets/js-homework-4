const btn = document.getElementById('button')

const btnClick = btn.addEventListener("click", alertMessage);

function alertMessage() {
    alert("Hello, Palmo.")
}

/* 
1. Создайте кнопку на странице. 
При клике на нее выведите в alert сообщение Hello, Palmo.
*/