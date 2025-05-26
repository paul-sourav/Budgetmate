import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Text} from '@ui-kitten/components';
import {transactions} from '../../Json/TransectionList.json';
import RootLayout from '../../Components/Ui/RootLayout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Transection = () => {
  return (
    <RootLayout title="">
      <ScrollView>
        <View style={{gap: 10, padding: 10}}>
          {transactions.map((transection, index) => (
            <Card
              key={index}
              style={{
                borderRadius: 10,
                backgroundColor: '#f8f9fa',
              }}>
              <MaterialCommunityIcons
                name={transection.category.icon as any}
                size={30}
                color={transection.category.color}
                style={{marginRight: 12}}
              />
              <View>
                <Text category="h6">{transection.category.label}</Text>
                <Text category="s1" style={{color: '#6c757d'}}>
                  {transection.date}
                </Text>
                <Text category="h1" style={{marginTop: 5}}>
                  Amount: ${transection.amount}
                </Text>
              </View>

              {transection.attachment && (
                <Image
                  source={{uri: transection.attachment}}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    marginTop: 10,
                  }}
                />
              )}
            </Card>
          ))}
        </View>
      </ScrollView>
    </RootLayout>
  );
};

export default Transection;

const styles = StyleSheet.create({});
