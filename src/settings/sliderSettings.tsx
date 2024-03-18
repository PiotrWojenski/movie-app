import CustomArrow from '../components/CustomArrow'

export const sliderSettings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	nextArrow: <CustomArrow isNext={true} />,
	prevArrow: <CustomArrow isNext={false} />,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
}
