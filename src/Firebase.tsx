// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCmaH7_F-VyslIDtQLV4U79eeFB8BY-0Ig',
	authDomain: 'movie-app-b3e28.firebaseapp.com',
	databaseURL: 'https://movie-app-b3e28-default-rtdb.firebaseio.com',
	projectId: 'movie-app-b3e28',
	storageBucket: 'movie-app-b3e28.appspot.com',
	messagingSenderId: '737560260508',
	appId: '1:737560260508:web:6759b554c825a623f9e259',
	measurementId: 'G-YQKX60LC18',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
