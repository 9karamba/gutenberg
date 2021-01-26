
/**
 * WordPress dependencies
 */
const { Component } = wp.element;

export default class Save extends Component {
	constructor() {
		super( ...arguments );
	}

	getLink (image) {
		let link;

		switch (this.props.attributes.actionOnClick) {
			case 'link':
				link = !!image.link ? image.link : '#'
				break;
			case 'lightbox':
				link = image.url;
				break;
			default:
				link = '#';
				break;
		}

		return link;
	}

	render() {
		const {attributes} = this.props;
		const {
			images,
			actionOnClick,
			fullWidth,
			autoHeight,
			width,
			height,
		} = attributes;

		const blockClassName = [
			'editor-slider__slide__info-overlay',
			actionOnClick === 'lightbox' && 'lightbox',
		].filter(Boolean).join(' ');

		const styleImg = {
			width: fullWidth ? '' : width,
			height: autoHeight ? '' : height,
		};

		return (
			<div className="editor-slider">
				<div className="editor-slider__container swiper-container">
					<div className="editor-slider__wrapper swiper-wrapper">
						{images.map((image, index) => (
							<div className="editor-slider__slide swiper-slide" key={index}>
								<img src={image.url}
									 className="editor-slider__slide__img"
									 alt={'Slider image'}
									 style={styleImg}
								/>
								<div className="editor-slider__slide__info">
									{(actionOnClick !== '') && (
										<a className={blockClassName}
										   target={actionOnClick !== 'lightbox' ? '_blank' : false}
										   rel="noopener noreferrer"
										   href={this.getLink(image)}
										/>)}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="editor-slider__controls">
					<div className="swiper-button-prev" />
					<div className="swiper-button-next" />
				</div>
			</div>
		);
	}
}
