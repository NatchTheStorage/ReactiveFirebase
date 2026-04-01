import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export const getItems = async () => {
  try {
    const item = await getDocs(collection(db, 'test'));
    return item.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
  catch (e) {
    console.error("Error getting documents", e)
    return [];
  }
}

export const getItem = async (id: string) => {
  try {
    const ref = doc(db, "test", id,);
    const item = await getDoc(ref);

    if (item.exists()) {
      console.log(item.data());   // { name: "Alice", age: 30, ... }
      return item;
    } else {
      console.log("No such document");
    }
  }
  catch (e) {
    return null;
  }
}

export const createItem = async (name: string, number: number) => {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      name: name,
      number: number,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const deleteItem = async (id: string) => {
  await deleteDoc(doc(db, "test", id));
}