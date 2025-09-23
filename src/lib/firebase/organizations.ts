import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app);

export const createOrganization = async (organizationData: any) => {
  try {
    const docRef = await addDoc(collection(db, "organizations"), organizationData);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
