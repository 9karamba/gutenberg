/**
 * BLOCK: Accordion Block
 */

// Import block dependencies and components
import Edit from './components/edit';
import Save from './components/save';
import Deprecated from './deprecated/deprecated';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

const blockAttributes = {
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

// Register the block
registerBlockType( 'editor/accordion', {
	title: __('Аккордеон', 'accordion-block'),
	description: __('Аккордеон с заголовком и описанием', 'accordion-block'),
	category: 'common',
	icon: 'list-view',
	keywords: [
		__( 'accordion', 'accordion-block' ),
		__( 'аккордеон', 'accordion-block' ),
	],
	attributes: blockAttributes,

	// Render the block components
	edit: ( props ) => {
		return <Edit { ...props } />;
	},

	// Save the attributes and markup
	save: ( props ) => {
		return <Save { ...props } />;
	},

	deprecated: Deprecated
} );
