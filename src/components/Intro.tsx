import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import video1 from '../assets/got.mp4'
import video2 from '../assets/lord of ring.mp4'
import video3 from '../assets/Shawshank.mp4'

const Intro = () => {
	// Settings for the slider
	const settings = {
		dots: true, // Enable dot indicators
		infinite: true, // Infinite looping
		speed: 500, // Animation speed
		slidesToShow: 1, // Show one slide at a time
		slidesToScroll: 1, // Scroll one slide at a time

		autoplaySpeed: 2000, // Autoplay speed in milliseconds
		pauseOnHover: true, // Pause autoplay on hover
	}

	return (
		<div className="flex justify-center mt-4">
			<Slider {...settings} className="w-1/2 h-1/3">
				<div>
					<video className="d-block w-full h-full" playsInline loop muted>
						<source src={video1} type="video/mp4" />
					</video>
					<div className="text-white text-3xl">Game of Thrones</div>
				</div>

				<div>
					<video className="d-block w-full h-full" playsInline loop muted autoPlay>
						<source src={video2} type="video/mp4" />
					</video>
					<div className="text-white text-3xl">Lord of Ring</div>
				</div>

				<div>
					<video className="d-block w-full h-full" playsInline loop muted>
						<source src={video3} type="video/mp4" />
					</video>
					<div className="text-white text-2xl">Shawshank</div>
				</div>
			</Slider>
		</div>
	)
}

export default Intro
