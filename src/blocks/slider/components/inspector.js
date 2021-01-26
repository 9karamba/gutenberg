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
const { PanelBody, RangeControl, ToggleControl, SelectControl } = wp.components;

/**
 * Create an Inspector Controls wrapper Component.
 */
export default class Inspector extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {attributes, setAttributes} = this.props;
		const {
			actionOnClick,
			fullWidth,
			autoHeight,
			width,
			height,
		} = attributes;
		return (
			<InspectorControls key="inspector">
				<PanelBody title={__('Настройки слайдера', 'slider-block')}>
					<SelectControl
						label={__('Действие при нажатии на изображение', 'slider-block')}
						value={actionOnClick}
						options={[
							{label: __('Нет', 'slider-block'), value: ''},
							{label: __('Открывать в полном размере', 'slider-block'), value: 'lightbox'},
							{label: __('Переход по ссылке', 'slider-block'), value: 'link'},
						]}
						onChange={(value) => setAttributes({actionOnClick: value})}
					/>
					<ToggleControl
						label={__('На всю ширину', 'slider-block')}
						checked={fullWidth}
						onChange={() => setAttributes({fullWidth: !fullWidth})}
					/>
					<ToggleControl
						label={__('Автоматическая высота', 'slider-block')}
						checked={autoHeight}
						onChange={() => setAttributes({autoHeight: !autoHeight})}
					/>
					{!fullWidth && (
						<RangeControl
							label={__('Ширина', 'slider-block')}
							value={width}
							onChange={(value) => setAttributes({width: value})}
							min={200}
							max={1300}
						/>
					)}
					{!autoHeight && (
						<RangeControl
							label={__('Высота', 'slider-block')}
							value={height}
							onChange={(value) => setAttributes({height: value})}
							min={100}
							max={1000}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		);
	}
}
