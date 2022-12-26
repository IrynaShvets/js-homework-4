const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  productsDelete: document.querySelector("[products-delete]"),
  modal: document.querySelector("[data-modal]"),
  buttonProductFirst: document.getElementById("buttonProductFirst"),
  buttonProductSecond: document.getElementById("buttonProductSecond"),
  buttonProductThird: document.getElementById("buttonProductThird"),
  listModal: document.getElementById("listModal"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.buttonProductFirst.addEventListener("click", addProductFirst);
refs.buttonProductSecond.addEventListener("click", addProductSecond);
refs.buttonProductThird.addEventListener("click", addProductThird);
refs.productsDelete.addEventListener("click", deleteProducts);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}

function addProductFirst() {
  const markup = `<li class="item-modal">
            <img src="https://i.gyazo.com/7515c9c4764a7fffb8fcd6232ddea4a2.jpg" alt="tablet" class="img-modal">
              <h3 class="title-modal">Tablet</h3> 
            <p class="text-modal">Price: 10000 UAH</p>
          </li>`;
  refs.listModal.insertAdjacentHTML("beforeend", markup);
}

function addProductSecond() {
  const markup = `<li class="item-modal">
            <img src="https://i.gyazo.com/d40217b6a6bf7b99fc05821ddb224fd7.jpg" alt="macbook" class="img-modal"> 
              <h3 class="title-modal">Laptop Macbook</h3>
              <p class="text-modal">Price: 30000 UAH</p>
          </li>`;
  refs.listModal.insertAdjacentHTML("beforeend", markup);
}

function addProductThird() {
  const markup = `<li class="item-modal">
    <img src="https://i.gyazo.com/9c47ae97dbc738082ca2022eb65ec5b2.jpg" alt="apple" class="img-modal">
    <h3 class="title-modal">Laptop Apple</h3>
    <p class="text-modal">Price: 40000 UAH</p>
  </li>`;
  refs.listModal.insertAdjacentHTML("beforeend", markup);
}

function deleteProducts() {
    refs.listModal.innerHTML = "";
}

/* 
12. Создайте простую корзину товаров. На странице выведите несколько товаров 
(не важно в каком виде, просто название товара
и кнопка Добавить в корзину). Также на странице должна быть иконка с корзиной, 
при нажатии на которую, открывается модальное
окно со списком добавленных товаров. В корзине должна быть кнопка "Очистить корзину", 
при нажатии на которую все элементы с корзины удаляются.
*/
