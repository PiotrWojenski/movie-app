import { Carousel } from 'react-bootstrap'
import video1 from '../assets/got.mp4'
import video2 from '../assets/lord of ring.mp4'
import video3 from '../assets/Shawshank.mp4'

const Intro = () => {
	return (
		<div className="flex justify-center">
			<Carousel className="w-1/2 h-1/3">
				<Carousel.Item className="w-1/2 h-1/3">
					<video className="d-block w-full h-full" autoPlay playsInline loop muted>
						<source src={video1} type="video/mp4" />
					</video>
					<Carousel.Caption className="text-white">
						<p>
							An epic saga of power and betrayal, where noble families vie for the Iron Throne of Westeros, with the
							impending doom of the White Walkers looming in the background.
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item className="w-1/2 h-1/3">
					<video className="d-block w-full h-full" autoPlay playsInline loop muted>
						<source src={video2} type="video/mp4" />
					</video>
					<Carousel.Caption className="text-white">
						<p>
							This is a monumental tale of courage and friendship, where a fellowship of heroes embarks on a quest to
							destroy the One Ring and defeat the dark lord Sauron.
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item className="w-1/2 h-1/3">
					<video className="d-block w-full h-full" autoPlay playsInline loop muted>
						<source src={video3} type="video/mp4" />
					</video>
					<Carousel.Caption className="text-white">
						<p>
							This is an inspiring tale of hope and friendship within a prison, where a wrongfully convicted banker
							strives for freedom and redemption.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Intro
