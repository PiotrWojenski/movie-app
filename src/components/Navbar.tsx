import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { SubmitHandler, useForm } from 'react-hook-form'
import { searchType } from '../types/myTypes'
import { useNavigate } from 'react-router-dom'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

const Navbar = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<searchType>()

	const navigate = useNavigate()

	const onSubmit: SubmitHandler<searchType> = data => {
		console.log(data)
		navigate(`/search?result=${data.result}`)
		reset()
	}

	const inputValidator = {
		result: {
			required: 'This field is required',
		},
	}

	return (
		<header className="  p-4 text-2xl font-bold   w-full z-50 ">
			<div className=" flex justify-between items-center w-full">
				<div className="flex flex-grow content-start ">
					<span className="logo-img">movieApp</span>
				</div>
				<div className="flex flex-grow justify-center">
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							{...register('result', inputValidator.result)}
							id="filled-multiline-flexible"
							label="Search..."
							variant="filled"
							className="bg-slate-100 rounded-lg text-black"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton type="submit" className="text-black p-2" aria-label="search">
											<SearchIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>

						{errors.result && <>{errors.result.message}</>}
					</form>
				</div>
				<div className="flex flex-grow">
					<nav className="w-full">
						<ul
							className="flex justify-center space-x-7
						 w-full ">
							<li>
								<Link to="/" className="hover:text-gray-300 no-underline block text-center">
									Home
								</Link>
							</li>
							<li>
								<Link to="/movies" className="hover:text-gray-300 no-underline block text-center">
									Movies
								</Link>
							</li>
							<li>
								<Link to="/series" className="hover:text-gray-300 no-underline block text-center">
									Series
								</Link>
							</li>
							<li>
								<Link to="/favourites" className="hover:text-gray-300 no-underline block text-center">
									Favourites
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Navbar
