/**
 * Internal dependencies
 */
import Inspector from './inspector';
import Swiper from "swiper";
const $ = jQuery;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;
const {
	MediaUpload
} = wp.blockEditor;
const {
	TextControl,
	IconButton,
	Button,
	Placeholder,
	Tooltip
} = wp.components;

const imageSliderBlockIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 2 22 22" className="dashicon">
		<path fill="none" d="M0 0h24v24H0V0z"/>
		<path
			d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.88 4h4.24l1.83 2H20v12H4V6h4.05"/>
		<path d="M15 11H9V8.5L5.5 12 9 15.5V13h6v2.5l3.5-3.5L15 8.5z"/>
	</svg>
);

const previewImageData = 'data:image/png;base64,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';

export default class Edit extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			currentSelected: 0,
			imageLoaded: false,
			sliders: []
		};

		this.initSlider = this.initSlider.bind(this);
	}

	componentDidMount() {
		const {attributes} = this.props;

		if (attributes.images.length) {
			this.initSlider();
		}
	}

	componentWillUpdate(nextProps) {
		const {attributes} = this.props;
		const {images} = attributes;
		const {images: nextImages} = nextProps.attributes;

		if (images.length !== nextImages.length) {
			$.each(nextProps.sliders, function( index, value ) {
				value.destroy();
			});
		}
	}

	componentDidUpdate(prevProps) {
		const {attributes, clientId} = this.props;
		const {
			images,
			fullWidth,
			autoHeight,
			width,
			height,
		} = attributes;
		const {
			images: prevImages,
			fullWidth: prevFullWidth,
			autoHeight: prevAutoHeight,
			width: prevWidth,
			height: prevHeight,
		} = prevProps.attributes;

		if (images.length !== prevImages.length ||
			images.length == prevImages.length && !images.every((v,i)=>v === prevImages[i]) ||
			fullWidth.length !== prevFullWidth.length ||
			autoHeight.length !== prevAutoHeight.length ||
			width.length !== prevWidth.length ||
			height.length !== prevHeight.length
		) {
			if (images.length){
				this.initSlider();
			}
		}

		if (this.state.imageLoaded) {
			$(`#block-${clientId} .slider-block__image-list `)
				.find('.slider-block__image-list__item:first-child')
				.find('.slider-block__image-list__img')
				.trigger('click');

			this.setState({imageLoaded: null})
		}
	}

	initSlider() {
		const {clientId} = this.props;
		const blocks = $(`#block-${clientId} .slider-block.swiper-container`);
		let galleries = [];

		let slider = new Swiper(`#block-${clientId} .slider-block.swiper-container`,{
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				576: {
					slidesPerView: 'auto',
					spaceBetweenSlides: 20
				}
			}
		});

		switch (blocks.length) {
			case 0:
				break;
			case 1:
				galleries.push(
					slider
				);
				break;
			default:
				galleries = slider;
		}

		this.setState({sliders: galleries})
	}

	sliderSlideTo(element, index) {
		let id = $(element).closest('.slider').data('id');
		this.state.sliders[parseInt(id) - 1].slideTo(index);
		this.setState({currentSelected: index})
	}

	moveImage(currentIndex, newIndex) {
		const {setAttributes, attributes} = this.props;
		const {images} = attributes;

		const image = images[currentIndex];
		setAttributes({
			images: [
				...images.filter((img, idx) => idx !== currentIndex).slice(0, newIndex),
				image,
				...images.filter((img, idx) => idx !== currentIndex).slice(newIndex),
			]
		});
	}

	updateImagesData(data) {
		const {currentSelected} = this.state;
		if (typeof currentSelected !== 'number') {
			return null;
		}

		const {attributes, setAttributes} = this.props;
		const {images} = attributes;

		const newImages = images.map((image, index) => {
			if (index === currentSelected) {
				image = {...image, ...data};
			}

			return image;
		});

		setAttributes({images: newImages});
	}

	render() {
		const {attributes, setAttributes, clientId} = this.props;
		const {currentSelected, imageLoaded} = this.state;
		const {
			images,
			actionOnClick,
			fullWidth,
			autoHeight,
			width,
			height,
			isPreview,
		} = attributes;
		if (images.length === 0) {
			return (
				isPreview ?
					<img alt={__('Images Slider', 'slider-block')} width='100%' src={previewImageData}/>
					:
					<Placeholder
						icon={imageSliderBlockIcon}
						label={__('Слайдер изображений', 'slider-block')}
						instructions={__('Изображения не выбраны. Добавьте изображения, чтобы начать пользоваться блоком.', 'slider-block')}
					>
						<MediaUpload
							allowedTypes={['image']}
							value={null}
							multiple
							onSelect={(image) => {
								const imgInsert = image.map((img) => ({
									url: img.url,
									id: img.id,
								}));

								setAttributes({
									images: [
										...images,
										...imgInsert,
									]
								})
							}}
							render={({open}) => (
								<Button className="button button-large button-primary" onClick={open}>
									{__('Выбрать изображения', 'slider-block')}
								</Button>
							)}
						/>
					</Placeholder>
			)
		}

		const blocks = $(`#block-${clientId} .slider-block.swiper-container`);

		return (
			isPreview ?
				<img alt={__('Images Slider', 'slider-block')} width='100%' src={previewImageData}/>
				:
				<Fragment>
					<Inspector key={ 'slider-inspector-' + this.props.clientId } { ...this.props } />
					<div className="slider" data-id={blocks.length}>
						<div className="slider-block swiper-container">
							<div className="swiper-wrapper">
								{images.map((image, index) => (
									<div className="swiper-slide" key={index}>
										<img src={image.url}
											 className="slider-block__img"
											 alt={'Slider image'}
											 style={{
												 width: fullWidth ? '100%' : width,
												 height: autoHeight ? 'auto' : height,
											 }}
											 onLoad={() => {
												 if (index === 0) {
													 if (this.state.imageLoaded === false) {
														 this.setState({imageLoaded: true})
													 }
												 }
											 }}
											 onError={() => {
												 if (index === 0) {
													 if (this.state.imageLoaded === false) {
														 this.setState({imageLoaded: true})
													 }
												 }
											 }}
										/>
									</div>
								))}
							</div>
						</div>
						<div className="swiper-button-next" />
						<div className="swiper-button-prev" />
						<div className="swiper-pagination" />
						<div className="slider-block__controls">
							{actionOnClick === 'link' && (
								<div className="slider-block__link">
									<TextControl
										label={__('Ссылка', 'slider-block')}
										value={images[currentSelected] ? images[currentSelected].link || '' : ''}
										onChange={(value) => this.updateImagesData({link: value || ''})}
									/>
								</div>
							)}
							<div className="slider-block__image-list">
								{images.map((image, index) => (
									<div className="slider-block__image-list__item" key={index}>
										{index > 0 && (
											<Tooltip text={__('Переместить налево', 'slider-block')}>
											<span className="slider-block__image-list__move-arrow slider-block__image-list__move-arrow_left"
												  onClick={() => this.moveImage(index, index - 1)}
											>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
													 viewBox="0 0 24 24">
													<path fill="none" d="M0 0h24v24H0V0z"/>
													<path
														d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
												</svg>
											</span>
											</Tooltip>
										)}
										<img src={image.url}
											 className="slider-block__image-list__img"
											 alt={__('Изображение', 'slider-block')}
											 onClick={(e) => this.sliderSlideTo(e.target, index)}
										/>
										{index + 1 < images.length && (
											<Tooltip text={__('Переместить направо', 'slider-block')}>
											<span className="slider-block__image-list__move-arrow slider-block__image-list__move-arrow_right"
												  onClick={() => this.moveImage(index, index + 1)}
											>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
													 viewBox="0 0 24 24">
													<path fill="none" d="M0 0h24v24H0V0z"/>
													<path
														d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
												</svg>
											</span>
											</Tooltip>
										)}
										<Tooltip text={__('Удалить изображение', 'slider-block')}>
											<IconButton
												className="slider-block__image-list__item_remove"
												icon="no"
												onClick={() => {
													if (index === currentSelected) this.setState({currentSelected: null});
													setAttributes({images: images.filter((img, idx) => idx !== index)})
												}}
											/>
										</Tooltip>
									</div>
								))}
								<div className="slider-block__image-list__add-item">
									<MediaUpload
										allowedTypes={['image']}
										value={currentSelected}
										multiple
										onSelect={(imgs) => setAttributes({
											images: [...images, ...imgs.map((img) => lodash.pick(img, 'id', 'url'))],
										})}
										render={({open}) => (
											<IconButton
												label={__('Добавить изображение', 'slider-block')}
												icon="plus"
												onClick={open}
											/>
										)}
									/>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
		)
	}
}
