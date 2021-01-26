/**
 * BLOCK: Slider Block
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

// Register the block
registerBlockType( 'editor/slider', {
	title: __('Слайдер', 'slider-block'),
	description: __('Листающаяся фото галерея', 'slider-block'),
	category: 'media',
	icon: 'format-gallery',
	keywords: [
		__( 'слайдер', 'slider-block' ),
		__( 'slider', 'slider-block' ),
	],
	attributes: blockAttributes,
	example: {
		attributes: {
			isPreview: true
		},
	},

	// Render the block components
	edit: ( props ) => {
		return <Edit { ...props } />;
	},

	// Save the attributes and markup
	save: ( props ) => {
		return <Save { ...props } />;
	},

	deprecated: Deprecated,
} );
