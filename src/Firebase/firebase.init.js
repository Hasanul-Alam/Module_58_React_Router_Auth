import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cinfig";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;