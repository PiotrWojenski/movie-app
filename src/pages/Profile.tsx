import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const Profile = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [currentStep, setCurrentStep] = useState(1)

	// Callback po udanym zalogowaniu
	const responseGoogleSuccess = response => {
		console.log(response)
		setIsLoggedIn(true)
	}

	// Callback po nieudanym logowaniu lub wylogowaniu
	const responseGoogleFailure = response => {
		console.log(response)
		setIsLoggedIn(false)
	}

	// Funkcja do obsługi przycisku następny w formularzu
	const nextStep = () => {
		setCurrentStep(currentStep + 1)
	}

	// Funkcja do obsługi przycisku wstecz w formularzu
	const prevStep = () => {
		setCurrentStep(currentStep - 1)
	}

	return (
		<div>
			{isLoggedIn ? (
				<>
					<h1>Profile Page of User</h1>
					{/* Formularz wieloetapowy */}
					{currentStep === 1 && (
						<div>
							<h2>Step 1</h2>
							<p>Some content for step 1...</p>
							<button onClick={nextStep}>Next</button>
						</div>
					)}
					{currentStep === 2 && (
						<div>
							<h2>Step 2</h2>
							<p>Some content for step 2...</p>
							<button onClick={prevStep}>Back</button>
							<button onClick={nextStep}>Next</button>
						</div>
					)}
					{/* Tutaj można dodać więcej kroków w podobny sposób */}
					<GoogleLogout
						clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
						buttonText="Logout"
						onLogoutSuccess={responseGoogleFailure}
					/>
				</>
			) : (
				<GoogleLogin
					clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
					buttonText="Login with Google"
					onSuccess={responseGoogleSuccess}
					onFailure={responseGoogleFailure}
					cookiePolicy={'single_host_origin'}
				/>
			)}
		</div>
	)
}

export default Profile
