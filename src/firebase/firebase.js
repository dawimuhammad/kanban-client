import firebase from 'firebase'

var config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: "https://kanban-f7cde.firebaseio.com",
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
}

firebase.initializeApp(config)

let database = firebase.database()

export default database