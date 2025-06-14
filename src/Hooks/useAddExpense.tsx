import {useMutation} from '@tanstack/react-query';
import {CollectionName} from '../Config/Common';

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  increment,
} from '@react-native-firebase/firestore';

const useAddExpense = () => {
  const collectionName = CollectionName.EXPENSE;

  // const AddExpense = useMutation({
  //   mutationKey: ['AddExpense'],
  //   mutationFn: async (body: object) => {
  //     try {
  //       const db = getFirestore();
  //       const collectionRef = collection(db, collectionName);
  //       await addDoc(collectionRef, body);
  //       return {success: true, message: 'Expense added successful'};
  //     } catch (error) {
  //       throw new Error('Error while adding transaction to the database');
  //     }
  //   },
  // });

  const AddExpense = useMutation({
    mutationKey: ['AddExpense'],
    mutationFn: async (body: any) => {
      try {
        const db = getFirestore();

        // 1. Add to transactions
        const transactionRef = collection(db, 'transactions');
        await addDoc(transactionRef, body);

        const {userID, amount, category, date, month} = body;

        // 2. Build daily and monthly doc IDs
        const dailyDocID = `${userID}_${date}`;
        const monthlyDocID = `${userID}_${month}`;

        const dailyRef = doc(db, 'dailySummaries', dailyDocID);
        const monthlyRef = doc(db, 'monthlySummaries', monthlyDocID);

        // 3. Update or create daily summary
        const dailySnap = await getDoc(dailyRef);
        if (dailySnap.exists()) {
          await setDoc(
            dailyRef,
            {
              totalSpent: increment(amount),
              [`categoryTotals.${category}`]: increment(amount),
            },
            {merge: true},
          );
        } else {
          await setDoc(dailyRef, {
            userID,
            date,
            totalSpent: amount,
            categoryTotals: {
              [category]: amount,
            },
          });
        }

        // 4. Update or create monthly summary
        const monthlySnap = await getDoc(monthlyRef);
        if (monthlySnap.exists()) {
          await setDoc(
            monthlyRef,
            {
              totalSpent: increment(amount),
              [`categoryTotals.${category}`]: increment(amount),
            },
            {merge: true},
          );
        } else {
          await setDoc(monthlyRef, {
            userID,
            month,
            totalSpent: amount,
            categoryTotals: {
              [category]: amount,
            },
          });
        }

        return {
          success: true,
          message: 'Expense and summaries added successfully',
        };
      } catch (error) {
        console.error(error);
        throw new Error(
          'Error while adding transaction and updating summaries',
        );
      }
    },
  });

  return {...AddExpense};
};

export default useAddExpense;
