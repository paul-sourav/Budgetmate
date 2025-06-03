import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CommonCard from './CommonCard';
import {Button, Text} from '@ui-kitten/components';
import GlobalTextInput from '../../../Components/Global/GlobalTextInput';
import GlobalStyles from '../../../Components/Global/GlobalStyles';

const Name = ({
  next,
  name,
  setName,
}: {
  next: () => void;
  name: string;
  setName: (value: string) => void;
}) => {
  return (
    <CommonCard title="Wats your name?">
      <GlobalTextInput
        value={name}
        onChangeText={e => setName(e)}
        placeholder="enter your name"></GlobalTextInput>
      <Button style={GlobalStyles.button} onPress={next}>
        Next
      </Button>
    </CommonCard>
  );
};

export default Name;

const styles = StyleSheet.create({});
