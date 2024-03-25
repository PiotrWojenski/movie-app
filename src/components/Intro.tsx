import React from 'react'
import Slider from 'react-slick'

import video1 from '../assets/got.mp4'
import video2 from '../assets/lord of ring.mp4'
import video3 from '../assets/Shawshank.mp4'

const Intro = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,

		pauseOnHover: true,
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
