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
		<header className=" bg-gray-800 text-white p-4 text-xl font-bold  top-0 left-0 w-full z-50 mb-5">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<span className="logo-img" style={{ fontFamily: "'Protest Riot', sans-serif" }}>
						movieApp
					</span>
				</div>
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
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link to="/" className="hover:text-gray-300">
								Home
							</Link>
						</li>
						<li>
							<Link to="/movies" className="hover:text-gray-300">
								Movies
							</Link>
						</li>
						<li>
							<Link to="/series" className="hover:text-gray-300">
								Series
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
