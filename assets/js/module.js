import {accordion} from './blocks/accordion';
import {slider} from './blocks/slider';

const $ = jQuery;

$(document).ready(function(){

	if ($('.accordion-item').length > 0) {
		accordion();
	}

	if ($('.editor-slider').length > 0) {
		slider();
	}
});
