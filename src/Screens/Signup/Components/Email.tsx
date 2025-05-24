import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';

const Email = ({
  next,
  email,
  setEmail,
}: {
  next: () => void;
  email: string;
  setEmail: (value: string) => void;
}) => {
  return (
    <CommonCard>
      <Text category="h1">Wats your Email?</Text>
      <GlobalTextInput
        value={email}
        placeholder="admin@example.com"></GlobalTextInput>
      <Button children={'Next'} onPress={() => next()} />
    </CommonCard>
  );
};

export default Email;

const styles = StyleSheet.create({});
