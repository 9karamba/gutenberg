/**
 * Component deprecations.
 */

/**
 * Version 1.0.
 */
import Save_1_0 from './1.0/components/save';

export const Accordion_1_0_save = ( props ) => {
	return <Save_1_0 { ...props } />;
};

export const Accordion_1_0_attributes = {
	accordionTitle: {
		type: 'array',
		selector: '.accordion-item__header-title',
		source: 'children',
	},
	accordionText: {
		type: 'array',
		selector: '.accordion-item__content',
		source: 'children',
	},
	accordionOpen: {
		type: 'boolean',
		default: false,
	},
};

const Deprecated = [
	/* Version 1.0. */
	{
		attributes: Accordion_1_0_attributes,
		save: Accordion_1_0_save,
	},
];

export default Deprecated;
