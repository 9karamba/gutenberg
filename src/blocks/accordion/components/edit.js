/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Accordion from './accordion';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
	RichText,
	InnerBlocks,
} = wp.blockEditor;

export default class Edit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		return [
			// Show the block controls on focus
			<Inspector key={ 'accordion-inspector-' + this.props.clientId } { ...this.props } />,

			// Show the button markup in the editor
			<Accordion key={ 'accordion-item-' + this.props.clientId } { ...this.props }>
				<RichText
					placeholder={ __( 'Заголовок', 'accordion-block' ) }
					value={ this.props.attributes.accordionTitle }
					className="accordion-item__header-title"
					onChange={ ( value ) =>
						this.props.setAttributes( { accordionTitle: value } )
					}
				/>

				<div className="accordion-item__content" style={{ display: 'block' }}>
					<InnerBlocks />
				</div>
			</Accordion>,
		];
	}
}
