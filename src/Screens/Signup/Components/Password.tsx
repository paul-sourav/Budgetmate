import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';
import GlobalStyles from '../../../Components/Global/GlobalStyles';

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
    <CommonCard title="Wats your password?">
      <GlobalTextInput
        value={password}
        onChangeText={e => setPassword(e)}
        placeholder="password"></GlobalTextInput>
      <Button
        style={GlobalStyles.button}
        children={'Next'}
        onPress={() => next()}
      />
    </CommonCard>
  );
};

export default Password;

const styles = StyleSheet.create({});
