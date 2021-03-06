// Import block dependencies and components
import Accordion from './accordion';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		return (
			<Accordion { ...this.props }>
				<div className={ this.props.attributes.accordionOpen ? 'accordion-item__header active' : 'accordion-item__header' }>
					<p className="accordion-item__header-title">
						<RichText.Content
							value={ this.props.attributes.accordionTitle }
						/>
					</p>
				</div>
				<div
					className="accordion-item__content"
					style={{ display: this.props.attributes.accordionOpen ? 'block' : 'none' }}>
					<InnerBlocks.Content />
				</div>
			</Accordion>
		);
	}
}
