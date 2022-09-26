// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAv4lyM_typQc7HlcL8Nnc-Bzfe0hWhpr8',
  authDomain: 'react-portfolio-dashboar-268d9.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-268d9',
  storageBucket: 'react-portfolio-dashboar-268d9.appspot.com',
  messagingSenderId: '374198619100',
  appId: '1:374198619100:web:7284425dc73e7297885d19',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
