// (function(){
//     const header = document.querySelector('.header')
//     window.onscroll = () =>{
//         if(window.pageYOffset > 50) {
//             header.classList.add('header_active')
//         } else{
//             header.classList.remove('header_active')
//         }
//     };
// }());


let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popupBg2 = document.querySelector('.popup__bg2'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let popup2 = document.querySelector('.popup2'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let openPopupButtons2 = document.querySelectorAll('.open-popup-2'); // Кнопки для показа окна
let closePopupButton2 = document.querySelector('.close-popup2'); // Кнопка для скрытия окна



openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});
openPopupButtons2.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg2.classList.add('active'); // Добавляем класс 'active' для фона
        popup2.classList.add('active'); // И для самого окна
    })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});
closePopupButton2.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg2.classList.remove('active'); // Убираем активный класс с фона
    popup2.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});


$(() => {
    $('.header .burger').on('click', function() {
        if ($(this).hasClass('open')) { // закрываем меню
            $(this).removeClass('open');
            $('html, body').css({ overflow: 'auto' });
            $('.header__mobile').removeClass('open');
        } else { // открываем меню
            $(this).addClass('open');
            $('html, body').css({ overflow: 'hidden' });
            $('.header__mobile').addClass('open');
        }
    });
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});


