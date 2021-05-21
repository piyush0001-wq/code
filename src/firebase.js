import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyAI3J_kcQq19bHBI3OpS2RX_4UKsh9kmDY",
  authDomain: "dr-pet-59e12.firebaseapp.com",
  projectId: "dr-pet-59e12",
  storageBucket: "dr-pet-59e12.appspot.com",
  messagingSenderId: "200840680095",
  appId: "1:200840680095:web:d010b5170cdec3f66f88aa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;