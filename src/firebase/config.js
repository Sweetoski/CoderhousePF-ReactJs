import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABPImGje_E4wXl2jSIYeku9GIvD9P64M4",
  authDomain: "proyecto-react-coderhous-ee8ff.firebaseapp.com",
  projectId: "proyecto-react-coderhous-ee8ff",
  storageBucket: "proyecto-react-coderhous-ee8ff.appspot.com",
  messagingSenderId: "1075402881549",
  appId: "1:1075402881549:web:0343302acbbfbd52dc7344",
  measurementId: "G-130YCY98ED"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);