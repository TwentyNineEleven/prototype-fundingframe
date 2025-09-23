import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

export interface Application {
  id?: string;
  grantTitle: string;
  foundationName: string;
  amount: number;
  status: 'draft' | 'submitted' | 'accepted' | 'rejected';
  createdAt: any;
  updatedAt: any;
}

const applicationsCollection = collection(db, 'applications');

export const addApplication = async (application: Omit<Application, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(applicationsCollection, {
      ...application,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    return null;
  }
};
