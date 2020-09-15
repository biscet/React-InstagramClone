import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCxyZcP4l2m_2E2PyF2py3aZNvtOCjrJp4",
	authDomain: "instagram-clone-react-3e168.firebaseapp.com",
	databaseURL: "https://instagram-clone-react-3e168.firebaseio.com",
	projectId: "instagram-clone-react-3e168",
	storageBucket: "instagram-clone-react-3e168.appspot.com",
	messagingSenderId: "287637691473",
	appId: "1:287637691473:web:f5b34e7cec1274f39d6c70",
	measurementId: "G-RYYRHSBWQ0",
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }

//export default db
