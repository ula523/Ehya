$(document).ready(function(){
  //Мобильное меню
var menuButton = $("[data-toggle=menu]");
  var closeButton = $(".mobile-menu__close");
  menuButton.on("click", openMenu);
  closeButton.on('click',closeMenu);
function openMenu(){
  var mobileMenu = $(".mobile-menu");
  mobileMenu.addClass("mobile-menu--visible");
}
  function closeMenu(event) {
    event.preventDefault();
    var mobileMenu = $(".mobile-menu");
    mobileMenu.removeClass("mobile-menu--visible");
  }
  var tabsItem = $(".tabs__item");
  var contentItem = $(".trends-content");

   tabsItem.on('click',function(event){
     var activeContent = $(this).attr("data-target");
     tabsItem.removeClass("tabs__item--active");
     contentItem.removeClass("trends-content--active");
     $(activeContent).addClass("trends-content--active");
     $(this).addClass("tabs__item--active");
   });
   var mySwiper = new Swiper('.reviews__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    
 
  },

    autoplay: {
    delay: 70000,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});
var mySwiper = new Swiper('.history-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.history__button--next',
    prevEl: '.history__button--prev',
  },
})

 //Обработка форм
 $(".form").each(function()
 {$(this).validate({
      errorClass:"invalid",messages: {
    login:{required:"Введите свой логин",minlength:"Логин должен содержать не менее четырех символов"},
    password:{required:"Ввыедите свой пароль",minlength:"Пароль должен содержать не менее четырех символов"},
    name:{required:"Введите ваше имя",minlength:"Имя должно быть больше одной буквы"},
    phone:{required:"Введите свой номер телефона"},
    email: {required: "Введите свой Email",email: "Формат электронной почты name@domain.com"}}})
})
//Модальные окна
 var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
 modalButton.on('click', openModal)
 closeModalButton.on('click', closeModal);

 function openModal(){
   var targetModal = $(this).attr("data-href");
   var modalOverlay = $(".modal__overlay");
   var modalDialog = $(".modal__dialog");
   $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
   $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');

 }
 function closeModal(event){
   event.preventDefault();
   var modalOverlay = $(".modal__overlay");
   var modalDialog = $(".modal__dialog");
   modalOverlay.removeClass('modal__overlay--visible');
   modalDialog.removeClass('modal__dialog--visible');

 }
 for(var elements=document.getElementsByClassName("phone"),i=0;i<elements.length;i++)new IMask(elements[i],{mask:"+{7}(000)000-00-00"});

 //Кнопки в слайдере
 var clickButton = $(".history__button");
  clickButton.on('click',function(event){
     clickButton.removeClass("history__button--active");
     $(this).addClass("history__button--active");
   });
   $(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});
 $(document).ready(function(){
    // = Вешаем событие прокрутки к нужному месту
    	//	 на все ссылки якорь которых начинается на #
    	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    		e.preventDefault();
    
    		var target = this.hash,
    		$target = $(target);
    
    		$('html, body').stop().animate({
    'scrollTop': $target.offset().top - 100
 }, 900, 'swing', function () {

 });
    	});
    
    });

});
