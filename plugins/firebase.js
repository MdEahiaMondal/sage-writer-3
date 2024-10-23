

import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'


export default defineNuxtPlugin(nuxtApp => {
 

    const firebaseConfig = {
        apiKey: "AIzaSyCkzsYij9CcDZGfiFpHCWN7TmIvI3zSDlE",
        authDomain: "sage-d27cb.firebaseapp.com",
        projectId: "sage-d27cb",
        storageBucket: "sage-d27cb.appspot.com",
        messagingSenderId: "217943632376",
        appId: "1:217943632376:web:8d2ad8f41b48b10b9dce0d"
      };

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
    
})

