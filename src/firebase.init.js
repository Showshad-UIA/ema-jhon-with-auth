// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBMF-_FjIRD2PZrEL05GvrA3K_zsm2PQ20",
	authDomain: "ema-jhon-simple-58560.firebaseapp.com",
	projectId: "ema-jhon-simple-58560",
	storageBucket: "ema-jhon-simple-58560.appspot.com",
	messagingSenderId: "1039784054484",
	appId: "1:1039784054484:web:a460c44d248a4b8165b541",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
