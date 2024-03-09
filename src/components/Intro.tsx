import { Carousel } from 'react-bootstrap'
import video1 from '../assets/got.mp4'
import video2 from '../assets/lord of ring.mp4'
import video3 from '../assets/Shawshank.mp4'

const Intro = () => {
	return (
		<div className="flex justify-center mt-5">
			<Carousel className="w-1/2 h-1/3">
				<Carousel.Item className="w-1/2 h-1/3">
					<video className="d-block w-full h-full" playsInline loop muted>
						<source src={video1} type="video/mp4" />
					</video>
					<Carousel.Caption className="text-white text-3xl">
						<p>Game of Thrones</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item className="w-1/2 h-1/3">
					<video className="d-block w-full h-full" playsInline loop muted>
						<source src={video2} type="video/mp4" />
					</video>
					<Carousel.Caption className="text-white text-3xl">
						<p>Lord of Ring</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item className="w-1/2 h-1/3">
					<video className="d-block w-full h-full" playsInline loop muted>
						<source src={video3} type="video/mp4" />
					</video>
					<Carousel.Caption className="text-white text-2xl">
						<p>Shawshank</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Intro
