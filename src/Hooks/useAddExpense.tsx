import {useMutation} from '@tanstack/react-query';
import {CollectionName} from '../Config/Common';
import {
  addDoc,
  collection,
  getFirestore,
} from '@react-native-firebase/firestore';

const useAddExpense = () => {
  const collectionName = CollectionName.EXPENSE;

  const AddExpense = useMutation({
    mutationKey: ['AddExpense'],
    mutationFn: async (body: object) => {
      try {
        const db = getFirestore();
        const collectionRef = collection(db, collectionName);
        await addDoc(collectionRef, body);
        return {success: true, message: 'Expense added successful'};
      } catch (error) {
        throw new Error('Error while adding transaction to the database');
      }
    },
  });

  return {...AddExpense};
};

export default useAddExpense;
