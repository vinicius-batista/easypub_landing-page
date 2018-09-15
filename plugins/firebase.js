import Vue from 'vue'
import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyAJaFqcCoG8nSFFD93ZBG2hlSweDYZKdxg',
  authDomain: 'easypub-605da.firebaseapp.com',
  databaseURL: 'https://easypub-605da.firebaseio.com',
  projectId: 'easypub-605da',
  storageBucket: 'easypub-605da.appspot.com',
  messagingSenderId: '109972631400'
}

const firebaseApp = firebase.initializeApp(config)

const install = (Vue, options) => {
  Object
    .entries(options)
    .forEach(([key, value]) => {
      Vue.prototype[`$${key}`] = value
    })
}

Vue.use({ install }, { firestore: firebaseApp.firestore() })
