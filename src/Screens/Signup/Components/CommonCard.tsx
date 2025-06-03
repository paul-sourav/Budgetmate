import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Text} from '@ui-kitten/components';

const CommonCard = ({children, title}: {children: any; title: string}) => {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        gap: 18,
        flex: 1,
        elevation: 3,
      }}>
      <Text category="h5">{title}</Text>
      {children}
    </View>
  );
};

export default CommonCard;

const styles = StyleSheet.create({});
