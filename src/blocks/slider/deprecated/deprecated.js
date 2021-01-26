/**
 * Component deprecations.
 */

/**
 * Version 1.0.
 */
import Save_1_0 from './1.0/components/save';

export const Slider_1_0_save = ( props ) => {
	return <Save_1_0 { ...props } />;
};

export const Slider_1_0_attributes = {
	images: {
		type: 'array',
		default: [], // [ { id: int, url, link: string } ]
	},
	actionOnClick: {
		type: 'string',
		default: '',
	},
	fullWidth: {
		type: 'boolean',
		default: true,
	},
	autoHeight: {
		type: 'boolean',
		default: true,
	},
	width: {
		type: 'number',
		default: 700,
	},
	height: {
		type: 'number',
		default: 500,
	},
	changed: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
};

const Deprecated = [
	/* Version 1.0. */
	{
		attributes: Slider_1_0_attributes,
		save: Slider_1_0_save,
	},
];

export default Deprecated;
