document.querySelector('.side_bar__menu_burger').onclick = function (){
    document.querySelector('.side_bar__menu_burger').classList.toggle('side_bar__menu_burger_active');
    document.querySelector('.header').classList.toggle('header_active');
}
