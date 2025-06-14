import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from '@ui-kitten/components';
import RootLayout from '../../Components/Ui/RootLayout';
import useGetAllTransection from '../../Hooks/useGetAllTransection';
import Skeleton from '../../Components/Ui/Skeleton';
import TransactionCard from './components/TransactionCard';

const Transection = () => {
  const {data, isLoading, isPending, refetch} = useGetAllTransection();

  useEffect(() => {
    console.log('isLoading', isLoading);
    refetch();
  }, []);

  return (
    <RootLayout title="">
      <View style={{gap: 10, padding: 10}}>
        <Text category="h3">Transactions</Text>

        {isPending || isLoading ? (
          Array.from({length: 5}).map((_, i) => (
            <Skeleton key={i} style={{height: 100, marginBottom: 10}} />
          ))
        ) : (
          <FlatList
            data={data}
            contentContainerStyle={{paddingBottom: 50}}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              const transaction = item.data();
              const base64Image = Array.isArray(transaction.attachement)
                ? transaction.attachement.join('')
                : transaction.attachement;

              return (
                <TransactionCard
                  key={item.id}
                  transaction={transaction}
                  index={index}
                  base64Image={base64Image}
                />
              );
            }}
          />
        )}
      </View>
    </RootLayout>
  );
};

export default Transection;
