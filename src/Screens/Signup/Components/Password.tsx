import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';

const Password = ({
  next,
  password,
  setPassword,
}: {
  next: () => void;
  password: string;
  setPassword: (value: string) => void;
}) => {
  return (
    <CommonCard>
      <Text category="h1">Wats your password?</Text>
      <GlobalTextInput
        value={password}
        placeholder="password"></GlobalTextInput>
      <Button children={'Next'} onPress={() => next()} />
    </CommonCard>
  );
};

export default Password;

const styles = StyleSheet.create({});
