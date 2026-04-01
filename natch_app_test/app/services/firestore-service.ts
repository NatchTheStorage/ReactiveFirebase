import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { DbItem } from '../config/items';



export const getItems = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'test'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
  catch (e) {
    console.error("Error getting documents", e)
    return [];
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



// export async function getItems() {
//   const citiesCol = collection(db, 'test');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }