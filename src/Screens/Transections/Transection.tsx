import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Card, Text} from '@ui-kitten/components';
import {transactions} from '../../Json/TransectionList.json';
import RootLayout from '../../Components/Ui/RootLayout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useGetAllTransection from '../../Hooks/useGetAllTransection';

const Transection = () => {
  const {data, isLoading, isSuccess, refetch, isError} = useGetAllTransection();

  console.log(
    'all transaction -=-----------',
    data?.map(item => item.data().attachement),
  );
  return (
    <RootLayout title="">
      {/* <ScrollView> */}
      <View style={{gap: 10, padding: 10}}>
        <Text category="h3">Transactions</Text>

        <FlatList
          data={data}
          contentContainerStyle={{paddingBottom: 50}}
          keyExtractor={(i, index) => i.id}
          renderItem={({item, index}) => {
            const transaction = item.data();
            const base64Image = Array.isArray(transaction.attachement)
              ? transaction.attachement.join('')
              : transaction.attachement;

            return (
              <View key={index} style={styles.mainContainer}>
                {/* Accent Bar */}
                <View
                  style={{
                    width: 6,
                    height: '100%',
                    borderRadius: 6,
                    backgroundColor: transaction.category.color,
                    marginRight: 12,
                  }}
                />
                {/* Main Content */}
                <View style={{flex: 1}}>
                  <Text
                    category="p2"
                    style={{color: '#adb5bd', marginBottom: 2}}>
                    {new Date(transaction.date).toDateString()}
                  </Text>
                  <Text
                    category="h5"
                    style={{fontWeight: 'bold', color: '#212529'}}>
                    ${transaction.amount}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 6,
                    }}>
                    <MaterialCommunityIcons
                      name={transaction.category.icon as any}
                      size={26}
                      color={transaction.category.color}
                      style={{marginRight: 8}}
                    />
                    <Text category="s1" style={{color: '#495057'}}>
                      {transaction.category.label}
                    </Text>
                  </View>
                </View>

                {/* Attachment Preview */}
                {base64Image && (
                  <Image
                    source={{
                      uri: `data:image/jpeg;base64,${base64Image}`,
                    }}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      marginLeft: 10,
                      borderWidth: 1,
                      borderColor: '#dee2e6',
                    }}
                  />
                )}
              </View>
            );
          }}
        />
      </View>
      {/* </ScrollView> */}
    </RootLayout>
  );
};

export default Transection;

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 14,
    backgroundColor: '#fafafa',
    flex: 1,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    marginBottom: 6,
  },
});
