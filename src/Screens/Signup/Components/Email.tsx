import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';
import GlobalStyles from '../../../Components/Global/GlobalStyles';

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
    <CommonCard title="Wats your Email?">
      <GlobalTextInput
        value={email}
        onChangeText={e => setEmail(e)}
        placeholder="admin@example.com"></GlobalTextInput>
      <Button
        style={GlobalStyles.button}
        children={'Next'}
        onPress={() => next()}
      />
    </CommonCard>
  );
};

export default Email;

const styles = StyleSheet.create({});
