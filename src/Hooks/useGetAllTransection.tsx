import {useQuery} from '@tanstack/react-query';
import {AsyncKeys, CollectionName} from '../Config/Common';
import {collection, getFirestore} from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetAllTransection = () => {
  const collectionName = CollectionName.EXPENSE;

  const props = useQuery({
    queryKey: [collectionName],
    queryFn: async () => {
      const userId = await AsyncStorage.getItem(AsyncKeys.USER_ID);
      console.log('userID', userId);
      const db = getFirestore();
      const expenseRef = collection(db, collectionName);
      const snapshot = await expenseRef.where('userID', '==', userId).get();
      return snapshot.docs;
    },
  });

  return {...props};
};

export default useGetAllTransection;
