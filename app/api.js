import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    async (userCredential) => {
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {});
      return user.uid;
    }
  );
};

export const signIn = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user.uid;
};

// CREATE
export const createOrder = async (obj) => {
  const colRef = collection(db, "orders");
  return await addDoc(colRef, obj).id;
};

export const getCurrentUser = async () => await auth.currentUser;
export const logout = async () => await signOut(auth);
