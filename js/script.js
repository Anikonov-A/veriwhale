const btn = document.querySelector('.js-mobile-btn');
const menu = document.querySelector('.js-mobile-menu');

btn.addEventListener('click', function () {
    menu.classList.toggle('header__menu_open');
    btn.classList.toggle('header_mobile_btn_active');
})

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}

/*document.getElementById("open_modal_btn").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open")
});*/

let link = document.querySelector('.modal_btn');
let modal = document.querySelector('.modal');
document.querySelectorAll('.modal_btn').forEach(
    link => link.addEventListener('click', event => {
        event.preventDefault();
        modal.classList.add('open');
    })
);
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
});
document.querySelector("#modal .container").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})
