import firestore from '@react-native-firebase/firestore';

// Fetch a single document
export const getUser = async (userId: string) => {
  const doc = await firestore().collection('users').doc(userId).get();
  return { id: doc.id, ...doc.data() }
};

// Fetch a collection
export const getProducts = async () => {
  const snapshot = await firestore().collection('products').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Write a document
export const createOrder = async (order: object) => {
  return firestore().collection('orders').add(order);
};

// Real-time listener
export const subscribeToMessages = (
  chatId: string,
  callback: (messages: any[]) => void
) => {
  return firestore()
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      callback(messages);
    });
};