import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA50jGxyZVJEu0N_tDJh1SwdbEQzU3HyNs",
  authDomain: "movie-project-26ffe.firebaseapp.com",
  databaseURL: "https://movie-project-26ffe-default-rtdb.firebaseio.com",
  projectId: "movie-project-26ffe",
  storageBucket: "movie-project-26ffe.appspot.com",
  messagingSenderId: "61136410009",
  appId: "1:61136410009:web:87d80a8727cac9bd96ef08",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default getFirestore();
