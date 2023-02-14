const express = require('express')
const bcrypt = require('bcrypt')
const { initializeApp } = require('firebase/app')
const { getFirestore } = require('firebase/firestore')
require('dotenv/config')

// Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCVBkfdwLExtVTIax8_y1Y6gc-mbZM_FW8",
  authDomain: "back-firebase-8c23c.firebaseapp.com",
  projectId: "back-firebase-8c23c",
  storageBucket: "back-firebase-8c23c.appspot.com",
  messagingSenderId: "574328140880",
  appId: "1:574328140880:web:b6f5db1ecb143b02224d55"
};

// Inicializar BD con Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

// Inicializar el servidor
const app = express()

const PORT = process.env.PORT || 19000

// Ejecutamos el servidor
app.listen(PORT, () => {
	console.log(`Escuchando en el Puerto: ${PORT}`)
})