const btn9 = document.getElementById("button9");
const textarea9 = document.getElementById("textarea9");
const list9 = document.getElementById("list9");

const btnClick9 = btn9.addEventListener("click", listTextarea);

function listTextarea() {
  const value9 = textarea9.value;
  const arr = value9.split(" ");
  arr.map(
    (el) =>
      (list9.innerHTML += `<li class="item-style">${el.replace(
        /[\s.,%]/g,
        ""
      )}</li>`)
  );
  clearTextarea();
}
function clearTextarea() {
  textarea9.value = "";
}

/* 
9. Создайте textarea и кнопку на странице. При клике на кнопку внизу должен 
появиться список с каждым значением в textarea,
перечисленном через запятую. Например: в textarea ввели - яблоко, груша, помидор, апельсин, манго. 
Внизу должен появиться список
        1. яблоко
        2. груша
        3. помидор
        4. апельсин
        5. манго

*/
