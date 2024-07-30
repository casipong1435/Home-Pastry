
const changeItemCount = (el) => {
    const quantityID = document.getElementById('inputQuantity');
    el.classList.contains('input-decrement') ? quantityID.value--: quantityID.value++;
}

let navigationBar = document.getElementById('navigationBar');

const openNav = () => {
   navigationBar = document.getElementById('navigationBar');
   navigationBar.style.left = '0';

}

const closeNav = () => {
   navigationBar = document.getElementById('navigationBar');
   navigationBar.style.left = '-100%';

}

