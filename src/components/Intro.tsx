import React from 'react'
import { Carousel } from 'react-bootstrap'
import video1 from '../assets/got-zwiastun.mp4' // Ensure the path to the file is correct

const Intro = () => {
	return (
		<Carousel>
			<Carousel.Item>
				{/* Added "playsInline" and "loop" attributes which can help with video playback on mobile devices and browsers */}
				<video className="d-block w-100" autoPlay playsInline loop muted>
					<source src={video1} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<Carousel.Caption>
					<h3>Game of Thrones</h3>
					<p>
						Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being
						dormant for millennia.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				{/* Ensure the URL is accessible and correct */}
				<video className="d-block w-100" autoPlay playsInline loop muted>
					<source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<Carousel.Caption>
					<h3>Second Slide</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			{/* You can add more Carousel.Item elements as needed */}
		</Carousel>
	)
}

export default Intro
