(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
})();

/* 
12. Создайте простую корзину товаров. На странице выведите несколько товаров 
(не важно в каком виде, просто название товара
и кнопка Добавить в корзину). Также на странице должна быть иконка с корзиной, 
при нажатии на которую, открывается модальное
окно со списком добавленных товаров. В корзине должна быть кнопка "Очистить корзину", 
при нажатии на которую все элементы с корзины удаляются.
*/