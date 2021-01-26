/**
 * Inspector Controls.
 */

/**
 * Internal dependencies.
 */

/**
 * Setup the block.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * Import block dependencies.
 */
const { InspectorControls } = wp.blockEditor;

/**
 * Import Inspector components.
 */
const { PanelBody, RangeControl, ToggleControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component.
 */
export default class Inspector extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		return (
			<InspectorControls key="inspector">
				<PanelBody>
					<ToggleControl
						label={ __( 'Оставить открытым', 'accordion-block' ) }
						checked={ this.props.attributes.accordionOpen }
						onChange={ () =>
							this.props.setAttributes( {
								accordionOpen: ! this.props.attributes
									.accordionOpen,
							} )
						}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
