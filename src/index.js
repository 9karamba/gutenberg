import './blocks/accordion/index.js';
import './blocks/slider/index.js';

const { unregisterBlockStyle } = wp.blocks;

wp.domReady( function() {
	unregisterBlockStyle(
		'core/quote', 'large'
	);
	unregisterBlockStyle(
		'core/image', 'rounded'
	);
});
