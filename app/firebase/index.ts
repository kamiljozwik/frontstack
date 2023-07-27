import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

// Safe to keep public
const firebaseConfig = {
  apiKey: "AIzaSyCf1auMVdyNuJUz5kbgVFK2Yi7KmCCmyWs",
  authDomain: "frontstack-blog.firebaseapp.com",
  projectId: "frontstack-blog",
  storageBucket: "frontstack-blog.appspot.com",
  messagingSenderId: "141319951300",
  appId: "1:141319951300:web:66645e0776360abe820a91",
  measurementId: "G-TCLDJJJD4N",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const saveMail = async (mail: string) => {
  return await setDoc(doc(db, "mails", mail), {
    mail,
    createdAt: serverTimestamp(),
  });
};

export const saveQuestion = async (question: string, email = "") => {
  return await addDoc(collection(db, "questions"), {
    question,
    email,
    createdAt: serverTimestamp(),
  });
};
