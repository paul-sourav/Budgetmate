import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from '@ui-kitten/components';

const CommonCard = ({children}: {children: any}) => {
  return (
    <Card
      style={{
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        gap: 18,
      }}>
      {children}
    </Card>
  );
};

export default CommonCard;

const styles = StyleSheet.create({});
