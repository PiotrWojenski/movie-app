import React from 'react'
import { Carousel } from 'react-bootstrap'

const Intro: React.FC = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<video className="d-block w-100" autoPlay loop muted>
					<source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
				</video>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<video className="d-block w-100" autoPlay loop muted>
					<source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
				</video>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			{/* Dodaj więcej elementów Carousel.Item zgodnie z potrzebami */}
		</Carousel>
	)
}

export default Intro
