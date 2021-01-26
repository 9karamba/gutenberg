import Swiper from "swiper";
const $ = jQuery;

export function slider() {
	const galleryGutenberg = '.editor-slider__wrapper',
		fancyboxName = galleryGutenberg + ' .lightbox';
	let galleries = [];

	const slider = {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	};

	$(galleryGutenberg).each(function (index, item) {
		$(item).attr("data-id", index)
	});

	switch ($(galleryGutenberg).length) {
		case 0:
			break;
		case 1:
			galleries.push(new Swiper('.editor-slider__container', slider));
			break;
		default:
			galleries = new Swiper('.editor-slider__container', slider);
	}

	if ($(fancyboxName).length > 0) {
		$(fancyboxName).fancybox();
	}
}
