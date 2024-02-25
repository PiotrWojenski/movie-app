import { Carousel } from 'react-bootstrap'
import video1 from '../assets/got.mp4'
import video2 from '../assets/lord of ring.mp4'
import video3 from '../assets/Shawshank.mp4'

const Intro = () => {
	return (
		<div className="flex justify-center ">
			{' '}
			{/* Zmiana tutaj: wyśrodkowanie w pionie i poziomie na całym ekranie */}
			<Carousel className="w-1/2 h-auto ">
				{' '}
				{/* Zmiana tutaj: ustalenie szerokości na 1/2 ekranu i wysokości na 96 jednostek */}
				<Carousel.Item className="h-full">
					{' '}
					{/* Zmiana tutaj: ustalenie wysokości na pełną dla elementu karuzeli */}
					<video className="d-block w-full h-full" autoPlay playsInline loop muted>
						{' '}
						{/* Zmiana tutaj: pełna szerokość i wysokość dla wideo */}
						<source src={video1} type="video/mp4" />
					</video>
					<Carousel.Caption className="text-white">
						<p>
							An epic saga of power and betrayal, where noble families vie for the Iron Throne of Westeros, with the
							impending doom of the White Walkers looming in the background.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="h-full">
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
				<Carousel.Item className="h-full">
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
