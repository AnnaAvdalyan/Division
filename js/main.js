$(document).ready(function () {

	$(".slider").slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnDotsHover: true,
		draggable: false,
		prevArrow: '<button class="PrevArrow"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button class="NextArrow"><i class="fas fa-chevron-right"></i></button>',
	});

	let site_start = 2010;
	$('#site-start').text(site_start)
	$('#site-now').text(new Date().getFullYear())

	$('.services-bar li').on('click', function () {
		$('.services-bar li').removeClass('active');
		$('.services-item ').removeClass('active');

		$('.services-bar li').filter(`[data-service="${$(this).data('service')}"]`).addClass('active');
		$('.services-item ').filter(`[data-service="${$(this).data('service')}"]`).addClass('active');

		$(this).data('service')
	})
});


const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.header-menu ul');

navToggle.addEventListener('click', () => {

	navToggle.classList.toggle('nav-open')
	menu.classList.toggle('open')

});